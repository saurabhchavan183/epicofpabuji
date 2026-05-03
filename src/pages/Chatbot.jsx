import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Chatbot() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get('topic') || 'Pabuji';

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  // Initial message on topic change
  useEffect(() => {
    setMessages([
      { role: 'bot', text: `${topic} this side. Ask me anything.` }
    ]);
  }, [topic]);

  // Auto scroll
  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', text: input };

    setInput('');
    setLoading(true);

    // Show only current question + typing
    setMessages([
      userMessage,
      { role: 'bot', text: 'Typing...' }
    ]);

    try {
      const res = await fetch(`https://pabuji.onrender.com/chat/${topic}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text })
      });

      const data = await res.json();

      // Replace typing with response
      setMessages([
        userMessage,
        {
          role: 'bot',
          text: data.response || data.error || 'No response from server'
        }
      ]);

    } catch (error) {
      setMessages([
        userMessage,
        {
          role: 'bot',
          text: 'Error connecting to server.'
        }
      ]);
    }

    setLoading(false);
};
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

          {/* Title */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Chat with {topic}
            </h1>
          </div>

          {/* Chat Box */}
          <div
            ref={chatRef}
            className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-4 overflow-y-auto overflow-x-hidden space-y-4"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex w-full ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                className={`max-w-[80%] min-w-0 px-4 py-2 rounded-2xl text-sm break-words whitespace-pre-wrap leading-relaxed ${
                    msg.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 max-h-[60vh] overflow-y-auto'
                }`}
                >
                {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="mt-4 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
              className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Chatbot;
