import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

function Tale() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                Tale in Brief
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                             
              </div>

            </div>

            {/* Tale in Brief Section */}
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Tale in Brief
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                Dhā̃dal Rāṭhoṛ had four children, two boys (Būṛo and Pābūjī) and two girls (Sonā̃ and Pemā̃). When he died, both his sons set up court in their village of Koḷū; but Pābūjī was a god incarnate, born not from Dhā̃dal’s wife but from a celestial nymph who had promised him that when he was twelve years old she would return to him in the form of a mare for him to ride. He had four companions: Cā̃do and Ḍhẽbo, two brothers of whom Ḍhẽbo was a colossus with an insatiable appetite for food, drink and opium, and immensely aggressive; Saljī Soḷaṅkī the augurer; and Harmal the Rebārī herdsman. Pābūjī’s first exploit was to fight the Khī̃cīs, who were encroaching on his borders and treating him and Būṛo arrogantly. In the course of the fight Jindrāv Khī̃cī’s father was killed. To try to prevent a blood-feud Pābūjī and Būṛo gave Khī̃cī their sister Pemā̃ in marriage. But in fact he remained hostile, and his hostility was brought to a head when Pābūjī secured from the Cāraṇ lady Deval (an incarnation of the Goddess) the fine black mare Kesar Kāḷamī, on whom Khī̃cī had set his heart. The mare was, of course, Pābūjī’s mother returned to him. In exchange for the mare, Pābūjī promised to protect Deval from Khī̃cī’s raids. Then he set off on his exploits: he overthrew Mirzā Khān, the cow-killing king of Pāṭaṇ, and then went to bathe in the holy lake of Pushkar to cleanse himself of the sin of bloodshed. Whilst he was bathing his foot slipped, and he was saved from drowning by the snake-god Gogo Cauhāṇ. As a reward Pābūjī offered him the hand of his niece Kelam, Būṛo’s daughter, and he accepted. But Kelam’s parents were fiercely opposed to any such wedding, and so Pābūjī set up a subterfuge instead. At his instigation, Gogo turned himself into a venomous snake and concealed himself in the garden; and when Kelam came there to swing he bit her on the little finger. The curers were unable to do anything for her, but Pābūjī said that she could be cured by tying on her arm an amulet in Gogo’s name, provided that she was then married to him. The cure worked and the wedding had to go ahead. During the wedding-ceremony various people gave costly presents to Kelam; when his turn came, Pābūjī said, ‘I shall plunder she-camels from Rāvaṇa the demon king of Laṅkā to give you.’ Everyone laughed, for camels were then unknown in Rajasthan and Laṅkā was known to be impregnable. And when Kelam reached her husband’s home her in-laws taunted her mercilessly. So she sent a letter to Pābūjī imploring him to carry out his promise. He sent one of his men, Harmal, to Laṅkā to reconnoitre; and Harmal, disguised as a jogī (holy man), managed to get the information they needed, and also obtained physical evidences of the she-camels, all this despite being mistrusted and ill treated by the inhabitants of Laṅkā. Then he returned to Koḷū with his news, and they all set off to raid Laṅkā. They crossed the sea by Pābūjī’s power and rounded up Rāvaṇa’s she-camels; then they did battle with Rāvaṇa and his army and defeated them, Pābūjī himself killing Rāvaṇa with his spear. On their way to give the captured she-camels to Kelam they had to pass through Ūmarkoṭ in Sindh, and here the Soḍhī princess Phulvantī saw Pābūjī and fell in love with him. Pābūjī continued on his way: he triumphed in an encounter with Devnārāyaṇ, and was soon able to hand over the she-camels to a delighted Kelam and return home to Koḷū. But now he received a wedding-proposal from Phulvantī’s father. At first he tried to avoid it, and even when he capitulated and accepted it he caused further delay by insisting that saffron be obtained to dye the garments of the men who travelled in his wedding-procession — which resulted in an all-out war with Lakkhū Paṭhāṇ, the owner of the saffron. But at last he set off back to Ūmarkoṭ to be married. Deval, to whom he had promised his protection, stopped him on the way and tried to persuade him to stay, or at least to leave some of his men behind, but he refused, promising that if she needed him he would come instantly, even if he were sitting inside the wedding-pavilion. Then the wedding-procession started off once more, but as they travelled they observed numbers of bad omens, culminating in a tiger which Ḍhẽbo killed. They reached Ūmarkoṭ, and the preparations for thewedding went ahead smoothly; but before the ceremony itself was even complete Deval arrived in the form of a bird to say that Khī̃cī had stolen her cattle. Pābūjī insisted on abandoning the wedding in order to ride in pursuit: he severed the bridal knot with his sword, and gave his bride a parrot which would tell her what became of him. He rode back to Koḷū with his men, and after some slight delay set out in pursuit of the Khī̃cīs, leaving only Ḍhẽbo behind asleep. Deval woke Ḍhẽbo up and sent him out too, and he soon overtook Pābūjī, for when his horse tired from endless galloping, he picked it up and put it under his arm and ran on. Then disaster befell him. Vultures began to circle over him, and he as usual told them to be patient (‘I shall satiate you with the vital organs of the Khī̃cīs!’); but these vultures were not content, and told him that they wished to eat his own flesh. Ḍhẽbo was a man of such noble character that he could refuse no request, so he disembowelled himself for the birds. Then he drew his belt tight, and rode on; and soon he caught up with Khī̃cī. Single-handed he destroyed Khī̃cī’s whole army, until only Khī̃cī himself was left alive, and he was about to kill him too when Pābūjī, who had arrived on the battlefield, stayed his hand: ‘If you kill him you make my sister Pemā̃ a widow.’ They freed Khī̃cī, and set off to give Deval back her cattle. On the way, when Pābūjī offered Ḍhẽbo some opium, Ḍhẽbo revealed that he was disembowelled, and died. Pābūjī and his remaining men now returned the cattle to Deval, but she kept making objections: first she said her favourite bull-calf was missing — but it was discovered inside Ḍhẽbo’s opium-box, where he had put it as a joke; then she complained that her cattle were thirsty and told Pābūjī to water them — but when he tried to do so he found that all the water in the well had been swallowed on Deval’s instructions by a genie named Susiyo Pīr. He struck the genie through the head with his spear and watered the cattle; but by the time he had finished doing all this Khī̃cī had been able to enlist the support of his uncle Jaisiṅgh Bhāṭī, and was riding on Koḷū with a Bhāṭī army. There was a great battle, in which Pābūjī and Khī̃cī came face to face. Pābūjī said, ‘Khī̃cī, take my sword and give me your whip: my body cannot fall to a blow from your sword.’ They exchanged weapons, but at first Khī̃cī did nothing; so Pābūjī goaded him into fury by whipping him, and Khī̃cī struck back at him with the sword. Instantly, a palanquin came from heaven and took Pābūjī away with his mare. After this, Pābūjī’s men were wiped out quickly, the last to fall being Būṛo, who had his head cut off by Khī̃cī. Būṛo’s wife had a terrible dream in which she saw the massacre of the Rāṭhoṛs; and when she awoke the news was confirmed by a camel-rider, who brought her the turban of her dead husband. Similarly in Ūmarkoṭ Phulvantī heard the news from her parrot, which then died. Then all the women prepared to become satīs (i.e. to follow their husbands into death by mounting the funeral pyre). But Būṛo’s widow was advanced in pregnancy, and before becoming a satī she took a knife and cut out from her body a male child. She named him Rūpnāth, and had him sent to her mother’s home in Girnār to be looked after. Rūpnāth grew up in ignorance of his origins, but one day when he was twelve years old he encountered Deval, and persuaded her to tell him the truth. Then he was consumed by desire to take revenge on Khī̃cī. In the disguise of a holy man he went to Khī̃cī’s place, and his aunt Pemā̃ (Khī̃cī’s wife) told him how to avoid the traps and savage animals with which Khī̃cī guarded himself. He was successful in doing this, and thus came into the room where Khī̃cī was asleep. He awoke him, told him who he was, and then beheaded him. Pemā̃ helped her nephew escape, and asked him for Khī̃cī’s head so that she could become a satī with it; but Rūpnāth told her that she would have to wait a little before he could return it to her. Then he went off with it back to Girnār, where he used it as a ball for a game that ran all the way from Girnār to Koḷū and back. Finally, with one blow of his bat, he sent it to Khī̃cī’s place for Pemā̃ to become a satī. Then, his mission accomplished, he became a (genuine) holy man, living on a sandhill near Bikaner, where he is still worshipped today.

            </p>

            </div>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Tale;