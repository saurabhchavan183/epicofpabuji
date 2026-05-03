import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

function Translation() {

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
                Translation
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                             
              </div>

            </div>

            {/* Tale in Brief Section */}
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                Horoscope
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The story begins in the Saṃvat year thirty-seven when the Lord Pābūjī took his miraculous incarnation within a field of saffron. His infancy was marked by divine nursing, as he was suckled by a tigress and cradled by his mother, Kamaḷāde, until he matured into a formidable young man. Ascending the throne as Lakṣmaṇa, the ascetic deity of the sand-desert, Pābūjī surrounded himself with a legendary retinue of chieftains, each an incarnation of a powerful deity. Among these were Cā̃do, the king of Chappan Vāgaṛ and incarnation of Mother Cāmuṇḍā; Saljī Soḷaṅkī, the embodiment of Mother Bhaisā̃ḍ; and Harmal Devāsī, the prince of the Āls and incarnation of Mother Vīsot. Most fearsome of all was the opium-drinker Ḍhẽbo, an incarnation of Hanumān, whose legendary hunger and thirst for bhang were matched only by his prowess as a warrior.

Within Pābūjī’s court, a realm of divine order and raw power, wrestlers and rams competed while judgment was sternly passed upon the wicked. The Lord’s dominance was so absolute that even Jam, the god of death, lay bound head-down to his bedstead. Pābūjī’s physical form was a composite of the divine, possessing the knees of Gaṇeśa, the waist of Kālikā, and the chest of Hanumān, while his face reflected the very land of Marwar itself. Under a sky where the moon and sun shone simultaneously, Pābūjī reigned as a celestial monarch, his presence so radiant that he shared the light of the sun equally with the earth he ruled.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the hare
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The narrative shifts to Koḷū, where King Būṛo, Pābūjī’s elder brother, sets out on a hunt for wild pig. During the chase, a hare appears and leads Būṛo on a twelve-kos pursuit, eventually seeking sanctuary in the court of Sārãgde Khī̃cī in Jāyal. When Būṛo arrives to claim his prize, Sārãgde offers him only the headless body, keeping the head as a symbol of protection and defiance. Insulted by this gesture, Būṛo returns to Koḷū disconsolate, facing further sting from his queen, Gailovat, who mocks him for returning home without a fight. The tension escalates when Pābūjī’s chieftain, Cā̃do, travels to Jāyal to remonstrate with the Khī̃cīs. There, Cā̃do encounters a stone-carver brazenly setting up boundary stones on Rāṭhoṛ land; in a fit of rage, Cā̃do decapitates the carver, narrowly avoiding a full-scale skirmish only through the divine intervention of the lady Deval.

Returning to Koḷū, Cā̃do reports the Khī̃cīs' boastful insults—specifically their claim that they would make the great Rāṭhoṛ heroes their lowly servants. Infuriated, Pābūjī and his warriors, led by the ferocious Ḍhẽbo, march on Jāyal. A bloody battle ensues where Ḍhẽbo, fueled by opium and divine strength, decimates the Khī̃cī army. He eventually seizes Sārãgde Khī̃cī and kills him by cutting out his vital organs, securing a decisive but costly victory. Realizing that they have now ignited a permanent and dangerous feud with Sārãgde’s son, Jindrāv Khī̃cī, Pābūjī decides on a diplomatic course to settle the blood-debt.

To transform an enemy into a kinsman, Pābūjī proposes a marriage alliance, offering his sister Pemā̃ to Jindrāv Khī̃cī. Despite the heavy shadow of his father’s death, Jindrāv accepts the bridal garlands brought by Cā̃do, though he does so with a dark heart, privately vowing to make Pemā̃ grieve her marriage. The episode concludes with the wedding procession arriving in Koḷū, where the marriage is finalized. Although the union technically makes them brothers-in-law, the underlying resentment remains, leaving the "feud of the hare" as a fragile peace built upon a foundation of deep-seated bitterness.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the mare
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The narrative shifts to Pābūjī’s court in Koḷū, where the Lord expresses a deep dissatisfaction with the horses available to him. Despite having searched the four corners of the earth, he has found no mount worthy of his stature until a vivid dream reveals the mare Kesar Kāḷamī, a legendary creature belonging to the lady Deval. Driven by this vision, Pābūjī and his chieftains ride to Gaḍvāṛo to petition Deval, a Cāraṇ lady and goddess, for the animal. Pābūjī explains that since she has traveled beyond the seven seas to acquire high-priced horses, he knows she keeps Kesar hidden within the depths of an underground chamber.

Deval is initially resistant and fearful, warning Pābūjī that the mare is already coveted by his brother-in-law and rival, Jindrāv Khī̃cī. She expresses a justified concern that surrendering the horse to the Rāṭhoṛs will provoke Khī̃cī to attack her unprotected lands. Pābūjī, however, remains undeterred by the mention of his rival, asserting his dominance over the region. His chieftains, Harmal and Cā̃do, assist him in saddling the beast, and as Pābūjī mounts Kesar Kāḷamī, her divine nature becomes apparent; while the other horses gallop upon the earth, Kesar takes to the sky, shining brilliantly above.

The chapter concludes with a moment of supernatural tension as the mare’s flight causes Ḍhẽbo to believe Pābūjī is being carried away to heaven in a celestial palanquin. He calls out to Deval in alarm, fearing he has lost his lord. The goddess instructs the warriors to offer the scent of burning bdellium incense to the mare. As the fragrant smoke wafts into the air, the divine Kesar Kāḷamī is enticed back to the ground, formally uniting Pābūjī with the mount that will define his legendary exploits.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of Pāṭaṇ
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                With the divine mare Kesar Kāḷamī now under his command, Pābūjī offers the lady Deval rich grazing lands and water for her cattle in exchange for her blessing as he prepares to confront Mirzā Khān, the ruler of Pāṭaṇ. Adorning his mare with diamonds and pearls, Pābūjī and his chieftains ride to Pāṭaṇ to demand an end to the slaughter of cows and the destruction of the local wildlife. Cā̃do acts as the messenger, delivering a stern warning to Mirzā Khān, but the proud King responds with the same arrogance seen previously in Jāyal, threatening to enslave Pābūjī and his men. This insult seals the fate of Pāṭaṇ, and Pābūjī prepares for a full-scale assault.

As the war-drums of Pāṭaṇ roar and Mirzā Khān’s army emerges, Pābūjī suggests taking cover in the hills, but his warriors Cā̃do and Ḍhẽbo refuse the protection of the landscape, choosing instead to fight in the open to preserve their honor. The battle is a display of supernatural might; Ḍhẽbo, the opium-fueled warrior, mows down the enemy forces like falling leaves. Even as Mirzā Khān’s cannons fire, the balls merely lodge harmlessly in Ḍhẽbo’s moustaches as he transforms his body into an impenetrable fortification. Ḍhẽbo decimates the entire army, sparing only Mirzā Khān himself.

The victory is absolute, and as Mirzā Khān’s wives plead for mercy, Pābūjī fulfills his divine mission by rescuing the sacred cows and protecting the natural world. He rules Pāṭaṇ for three days, but his spirit soon yearns for his desert home in Marwar. The episode concludes with a shift toward the spiritual as Pābūjī plans a pilgrimage to the holy Pushkar Lake for the full moon of Kātakī. He envisions a gathering of the five legendary pīrs—including Rāmdev, Haṛbū Sā̃khalo, and Meyo Mā̃gaḷiyo—to perform their sacred ablutions, marking a transition from the violence of war to the rituals of faith.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of Pushkar
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                Driven by the auspicious arrival of the full moon of Kātakī, Pābūjī orders his chieftain Cā̃do to prepare the mare Kesar Kāḷamī for a sacred pilgrimage to Pushkar Lake. The mare is adorned with unparalleled opulence—diamonds and fine pearls are woven into her mane and fastened to her hindquarters—reflecting Pābūjī's divine status as he sets out at midnight. After a three-day journey across the sands, he arrives at the holy waters just as dawn breaks, paying his respects to the lake and the rising sun before settling his camp on the northern steps.

While Pābūjī performs his ritual ablutions, he suffers a momentary slip on the steps, but he is swiftly caught and steadied by the hand of Gogo Cauhāṇ, who is encamped on the western ghāṭ. Impressed by the stranger’s reflexes and noble bearing, Pābūjī inquires about his lineage. Gogo identifies himself as the crown prince of Naravāṇo and the son of King Pītaḷde. In gratitude for the assistance, Pābūjī offers to shower the young prince with immense wealth in the tradition of the Rāṭhoṛs. 

However, Gogo refuses the gold, asking instead for a marriage alliance with the eldest daughter of the Rāṭhoṛ clan, specifically mentioning the girl Kelam. This request troubles Pābūjī, who remains committed to his ascetic path and divine focus. He clarifies that he avoids all worldly dealings with women, asserting that there is no daughter within his own palace to give. This encounter at the holy lake sets the stage for a complex negotiation of kinship, as the spiritual merit of the pilgrimage is suddenly met with the social obligations of dynastic politics.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of Gogo’s wedding
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The narrative continues with Pābūjī bringing the young prince Gogo back to Koḷū to pursue the marriage alliance. Despite the initial refusal from King Būṛo and Queen Gailovat—who dismiss Gogo as a "base" and "foolish" suitor compared to the noble Rāṭhoṛs—Pābūjī orchestrates a divine intervention. He instructs Gogo, an incarnation of the snake-god Vāsuki, to take the form of a black cobra and hide in a campo tree within the royal garden. During the festival of Sāvaṇ rī tīj, the princess Kelam enters the garden and is bitten by the snake on her little finger. When the court healers fail to cure her, Pābūjī reveals that the only remedy is to tie a thread in Gogo's name and fulfill the betrothal promise he made at Pushkar. The "snake-fever" miraculously breaks the moment the vow is honored, leaving Būṛo with no choice but to accept the union.

The wedding preparations take on a cosmic scale as invitations, symbolized by grains of turmeric rice, are sent to the gods. The wedding procession becomes a celestial event, featuring a literal assembly of deities including Gaṇeśa, Kṛṣṇa (playing his flute), Rāmdev, Hanumān, and Śiva riding his bull, Nandī. This divine retinue, stretching for miles with swaying elephants and war-drums, arrives at Koḷū where Gogo is received with high honors. Under a fire-bright pavilion, the joining of hands is performed, and the couple completes the sacred circumambulations that seal their marriage.

As is custom, the family presents Kelam with lavish wedding gifts: cows, elephants, gold ornaments, and fine silks. However, the scene is stolen by Pābūjī’s extraordinary vow. While others give tangible wealth, Pābūjī promises to plunder the legendary reddish-brown she-camels from the island of Laṅkā as his gift. Kelam is skeptical, noting that Laṅkā lies across seven seas and that no man who goes there ever returns; she even asks for his mare, Kesar, instead. Pābūjī firmly refuses to part with his divine mount but stakes his immortal name on his promise, vowing to deliver the mythical camels within three months, setting the stage for his most famous exploit.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the she-camels
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                Following Gogo's wedding, Pābūjī honors his word by dispatching Harmal Devāsī to spy on the legendary she-camels of Laṅkā. To infiltrate the kingdom of the demon-king Rāvaṇa, Harmal undergoes a rigorous spiritual transformation, taking the ochre robes and glass earrings of a *jogī* under the guidance of Guru Gorakhnāth. The Guru bestows upon him magical artifacts for the journey: sandals that allow him to walk upon the waves, a begging bowl that provides endless food, and a small drinking gourd that can never be filled—a charm to prevent Harmal from committing perfidy by drinking the milk of those he intends to rob. Despite the tearful protests of his mother and wife, who fear the witches and the vast seas of Laṅkā, Harmal sets out, eventually crossing the black waters to find the mythical reddish-brown herds grazing on coconuts and cardamoms.

In Laṅkā, Harmal lives among the camel-riders, maintaining his disguise even as he is tested. The demoness Sikotarī, Rāvaṇa’s mother, sees through his charade and warns the riders that this "holy man" is a spy. They bury Harmal alive under a massive wellhead stone, but he invokes Pābūjī’s name, and the divine power of the Rāṭhoṛ shatters his tomb. Returning to Koḷū with samples of camel-hair and dung to prove his success, Harmal is nearly slandered by the god of death, Jam, who claims he never left home. The fierce Ḍhẽbo, however, defends Harmal’s honor by literally burying Jam in the ground, clearing the way for the great invasion.

Pābūjī and his four chieftains then mount their divine steeds and gallop across the surface of the seven seas to reach the far shore. While Pābūjī initially shows mercy to the weak, Ḍhẽbo insists on plundering every last red hair from Laṅkā. As they drive the massive herds across a magical causeway made of arrows, Rāvaṇa’s demon army pursues them. In a climactic battle, Ḍhẽbo makes his chest a shield and his moustaches a fortification, slaughtering the demon host. Pābūjī himself takes to the sky on Kesar Kāḷamī, striking Rāvaṇa through the head with his spear from above.



On their triumphant return journey, the party halts in the kingdom of Ūmarkoṭ. Pābūjī’s divine presence causes the Soḍho gardens—barren for twelve years—to bloom instantly with lush greenery. The princess Phulvantī, captivated by the radiance of the "spotless moon-like" king, watches from her lattice window as heaven and earth tremble at Kesar's hoofbeats. She sends a hand-woven chaplet to Pābūjī, a silent proposal that the ascetic king recognizes as the work of a royal hand. The episode concludes with Harmal riding ahead to Sāmbhar to bring the joyous news to the lady Kelam: her father's brother has finally plundered the reddish-brown she-camels of Laṅkā to fulfill her wedding gift.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of Devnārāyaṇ
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                With the plundered she-camels in tow, Pābūjī and his retinue depart from Ūmarkoṭ to fulfill his promise to the lady Kelam. Their journey leads them into the territory of the powerful deity Devnārāyaṇ. Recognizing the value of the mythical herd, Devnārāyaṇ demands a heavy toll or half the camels as tribute for crossing his lands. Pābūjī steadfastly refuses, explaining that the animals are a sacred wedding gift for his niece. Devnārāyaṇ then issues a challenge: if the Rāṭhoṛs are not out of his borders by daybreak, they must pay. To enforce this, he uses his divine magic to manifest massive mountains in their path during the night, trapping the party within his borders.

When dawn breaks and the obstruction is discovered, Pābūjī strikes the mountain with his whip, and through his divine power, the earth splits to grant him a pass, now known as Līḷī-Lāmāṇā̃. Pābūjī and the main group escape toward Marwar, but the fierce Ḍhẽbo is left behind, still sleeping. He is confronted by Devnārāyaṇ’s chieftain, Mogaṛ, who demands the tribute. Ḍhẽbo, unfazed and fueled by opium, mocks the request, offering Mogaṛ tobacco and datura instead of gold. The disagreement quickly turns into a violent duel of archers.

Mogaṛ fires first, lodging an arrow in Ḍhẽbo’s moustache, but when Ḍhẽbo finally looses his own arrow, the force is so immense that Pābūjī hears the bowstring twang fifty kos away. The shot decapitates Mogaṛ, sending his head spinning into the sky. The severed head flies across the desert and catches up with Pābūjī, pleading for a proper resting place. Pābūjī, acknowledging Mogaṛ's bravery and the manner of his death, ordains that he will be worshipped as a deity by the Mīṇos. Meanwhile, Ḍhẽbo catches up with his lord, casually reporting that he has "paid the tribute" to Mogaṛ in full, marking another victory for the Rāṭhoṛs over a formidable divine rival.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the she-camels (2)
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The great trek finally concludes as Pābūjī and his warriors arrive at the gates of Sāmbhar with the legendary herd in tow. Standing at the Sun-gate, Pābūjī calls out to his niece, the lady Kelam, declaring that her father’s brother has fulfilled his sacred vow and brought the reddish-brown she-camels across the seven seas. Kelam, overjoyed and vindicated, attempts to perform a welcome-ceremony for Pābūjī with diamonds and pearls, but the ascetic lord redirects the honor to his divine mare, Kesar Kāḷamī. With the camels now filling the courtyard, Kelam triumphantly addresses her mocking sisters-in-law, ordering them to clear away their spinning wheels and cotton baskets to make room for the calves of Laṅkā, thereby silencing their taunts forever.

Having redeemed his honor and released himself from the pledge, Pābūjī leads his chieftains back to his home stronghold of Koḷū. The return journey is a celebratory procession, with the divine Kesar Kāḷamī sporting and dancing along the way. Upon arriving at the fortress, the gatekeeper opens the way for the conqueror of Laṅkā. Pābūjī returns to his court, spreading out his hero's rug to sit once more among his faithful leading warriors. His final command reflects the deep bond with his mount: while the other horses are sent to the stables, he insists that Kesar Kāḷamī be tethered within his sight, a testament to the mare's central role in his miraculous exploits.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of Pābūjī’s wedding
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The story shifts to the palace of lattice windows in Ūmarkoṭ, where the princess Phulvantī lies disconsolate. When questioned by her mother, she reveals that while her parents have searched many lands for a suitor, her heart is set on only one: Pābūjī, the ascetic deity of Koḷū. She recounts how she observed his divine radiance when he camped in their garden during the return from Laṅkā. Her mother immediately dispatches the family priest to Koḷū with the bridal coconuts. The brahmin travels through the harsh, waterless desert and arrives at Pābūjī’s court to present the proposal.

Initially, Pābūjī stays true to his ascetic nature. He refuses the garlands, fearing that becoming a householder will bring ill-repute to his status as the incarnation of the celibate Lakṣmaṇa. He even attempts to redirect the brahmin to his elder brother, Būṛo. However, his loyal chieftains—Cā̃do, Ḍhẽbo, Harmal, and Saljī—intervene. They argue that for the sake of the Rāṭhoṛ lineage and Pābūjī's own fame, he must not die unmarried and risk becoming a wandering ancestor. 

Relenting under the pressure of his peers, Pābūjī agrees to the betrothal but issues a seemingly impossible challenge as a condition. He declares that he will only go to his wedding if his marriage procession is bathed in the color of saffron. This stipulation sets a new divine task for his followers, as saffron was a rare and precious commodity, signaling that his wedding must be as miraculous as his battles.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the saffron
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                To fulfill his final condition for marriage, Pābūjī tasks his chieftains with securing oxen-loads of saffron. Following the guidance of the lady Deval, who had seen saffron growing in the gardens of Lakkhū Paṭhāṇ near Pāṭaṇ, Pābūjī first sends Deval herself as an envoy. However, the proud Muslim king Lakkhū Paṭhāṇ mocks the request, telling Deval that Pābūjī should be fanning him in his bedchamber and suggesting that the Rāṭhoṛs use common āk-bushes from the desert to make their bridal garlands instead of his precious saffron. Insulted and enraged, Deval returns to Koḷū to report this arrogance. Pābūjī then sends Cā̃do to demand the saffron, but Cā̃do meets the same biting sarcasm. Lakkhū Paṭhāṇ boasts of his own magic power, backed by the "fifty-two pīrs," and defies the "ascetic deity" of the sand-desert to take the saffron by force.

The conflict escalates into a supernatural battle as Pābūjī and his five horsemen ride to Lakkhū’s land. Ḍhẽbo the opium-drinker mows down the Paṭhāṇ army like falling leaves, but Lakkhū uses his magic to sprout a forest of spears across the earth, leaving no room for Pābūjī’s mare to land. In a display of divine agility, Kesar Kāḷamī leaps into the starry sky and descends on her back, allowing Pābūjī to snatch the "great spear" that served as the anchor for Lakkhū’s sorcery. With the magic of the pīrs broken, the Rāṭhoṛs decimate the remaining forces. Ḍhẽbo offers to humiliate Lakkhū further by forcing him to wear a woman’s bodice, but Pābūjī focus remains on his goal; they seize the saffron, destroy the gardens, and load the prize onto Deval’s oxen.

The party returns to Koḷū in triumph, having won the "battle of the saffron." Pābūjī orders the precious spice to be placed in a clean tub to dye the wedding finery. In a grand display of their victory and new status as bridegrooms, Pābūjī’s own turban is dyed first, followed by Kesar’s horse-cloth and the great turbans of all his chieftains. With the desert now blooming with the color of royalty and sacrifice, Pābūjī finally prepares to set out for his wedding in Ūmarkoṭ, his divine stipulation met through blood and magic.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of Pābūjī’s wedding (2)
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The grand wedding of Pābūjī begins with a gathering of the divine, as the lady Deval carries turmeric rice invitations to the gods. From Gaṇeśa on his rat to Śiva on his bull and the monkey army of Hanumān, the celestial world joins the procession. Amidst the splendor, Pābūjī’s rival and brother-in-law, Jindrāv Khī̃cī of Jāyal, attempts to spy on the event disguised as a jogī. Cā̃do discovers the ruse, but Pābūjī, ever noble, forbids violence against his sister's husband. Instead, he treats Khī̃cī as an honored guest, gifting him a horse but warning him not to ride within Rāṭhoṛ borders.

As the procession nears Koḷū, the lady Deval confronts Pābūjī with a dire prophecy: while he celebrates in Ūmarkoṭ, Khī̃cī will surely attack her unprotected fortress and steal her cattle. Pābūjī offers her the protection of his brother Būṛo or the village heroes, but Deval trusts no one but Pābūjī and his chieftains. Pābūjī eventually makes a solemn vow: 'if danger befalls her, he will hear her request even if he is seated in the wedding pavilion'. As the journey continues, a series of omens—a wood-bearing girl, a snake, and a tiger—test the party. Ḍhẽbo kills the tiger in a fit of rage, but Pābūjī, seeking to keep his "virgin procession" untainted by blood, uses his magic to bring the beast back to life.

Upon arriving at Ūmarkoṭ, the Soḍhos challenge Pābūjī to a race to the toraṇ (the ceremonial arch). The Soḍho prince Aṇadū wagers his fortress against Pābūjī’s mare and his chieftain Ḍhẽbo. Under Pābūjī’s command, Kesar Kāḷamī does not merely run; she flies, placing her hooves upon the fortress battlements. Lacking a ceremonial stick, Ḍhẽbo uproots a whole khejaṛī tree for Pābūjī to strike the toraṇ. After a shower of pearls and Ḍhẽbo’s legendary feat of swallowing entire wells of opium and cauldrons of food, the ceremony moves to the fire-bright pavilion.

The climax occurs during the third circumambulation. Deval, transforming into a gold bird, appears in the pavilion with a bitter cry: Khī̃cī has struck, and her cows are being driven off. True to his word, Pābūjī halts mid-step. He demands the brahmin release the bridal knot, preferring the duty of a protector over the joy of a householder. When Phulvantī clings to his stirrup, Pābūjī explains that their fate allows for only a short time together. To comfort her, he fashions a gold parrot from the bridal ointment on his chest, telling her it will signal his life or death in the coming battle. Cutting the bridal knot with his sword, Pābūjī abandons his wedding to ride toward a final, fatal confrontation, leaving Ūmarkoṭ forever.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the cows
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                Returning to Koḷū after his interrupted wedding, Pābūjī immediately focuses on the recovery of Deval’s stolen cows. The lady Deval, disheveled and spitting blood in her grief and rage, first appeals to Pābūjī’s elder brother, Būṛo. However, Būṛo feigns illness, claiming a "throbbing pain" in his eye to avoid the conflict. Deval curses him—wishing that the bandage on his eye never be removed—and turns to Pābūjī. Though Pābūjī is still wearing his wedding threads, Deval’s fury is absolute; she curses him as well, wishing that his bridal ornaments be unfastened only by the point of a spear in battle.

To mobilize the village, Deval seeks a drummer, but the Ḍholī (drummer) makes excuses, claiming his drum is broken. She curses him to be buried in salt on the borders of three villages. She then turns to the **Bā̃bī** (weaver). Initially, he also refuses, saying he must weave for Būṛo, but after Deval curses his loom, he relents. He climbs the banks of Gū̃javo well and lets out a cry so powerful that Pābūjī’s mare, Kesar Kāḷamī, shatters her steel chains in response.

Pābūjī rides out with three chieftains but leaves the opium-drinker **Ḍhẽbo** behind, fearing his massive "opium belly" would look unseemly in the sister-in-law’s army (the Khī̃cīs). Deval, realizing Ḍhẽbo’s absence, wakes him with her tears. Ḍhẽbo is so enraged at being left behind that he shatters his bedstead as he sits up. On his pursuit, Ḍhẽbo’s horse grows weary; in a feat of superhuman strength, he tucks the horse under his arm and runs on foot. When vultures circle him, demanding a meal, Ḍhẽbo literally cuts open his own belly, feeding them his entrails and hanging the rest on a khejaṛī tree (an act that legend says created the tree's reddish pods).

Ḍhẽbo catches the Khī̃cī army alone and decimates them. He seizes Jindrāv Khī̃cī and is about to deliver the killing blow when Pābūjī arrives and stops him, reminding Ḍhẽbo that Khī̃cī is his sister's husband and must not be killed (to spare Pemā̃ from widowhood). Ḍhẽbo is disgusted by this "alliance in the midst of battle." Later, at a gathering, Pābūjī offers Ḍhẽbo opium, but Ḍhẽbo—revealing he has no entrails left to hold food—declares he will take his next dose in heaven and passes away.

The episode ends with a touch of wit and miracle: Deval refuses to release Pābūjī from his pledge because a "one-eyed bull-calf" is missing. It is revealed that the late Ḍhẽbo had played a final joke by hiding the calf inside his opium-box. When the calf is produced, Deval sets one last trial: Pābūjī must water the cows at Gū̃javo well. Deval uses magic to place Susiyo Pīr in the well to dry it up, but Pābūjī hurls his spear through the spirit's head, restoring the water. With the cows finally watered and Deval satisfied, Pābūjī is released from his vow, but Jindrāv Khī̃cī has already fled to seek allies for the final showdown.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the Bhāṭīs
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The final tragedy begins as **Jindrāv Khī̃cī**, humiliated by Ḍhẽbo, retreats to seek the aid of **Jaisiṅgh Bhāṭī** of Jaisalmer. Casting his turban down in supplication—a gesture of extreme desperation—Khī̃cī convinces the Bhāṭīs to join him in a massive retaliatory strike against Koḷū. As the combined Khī̃cī and Bhāṭī armies approach, the dust clouds from their horses darken the sky. Pābūjī, realizing that leaving Khī̃cī alive after the cow-recovery was a fatal error, prepares for his final stand at the banks of the Gū̃javo well.

In a final show of loyalty, even a passing wedding procession of **seven-and-a-half score Rebārīs** (camel-breeders) abandons their own celebrations to die alongside their lord. Pābūjī’s elder brother, **Būṛo**, finally casts off his feigned illness, dons his armor, and joins the fray on his mare Ḍhel. 

The battle is a cosmic collision of powers. The goddess **Deval** (as Karṇī) circles the field as the air fills with arrows and vultures. In the midst of the slaughter, Pābūjī confronts Khī̃cī. In an act of profound spiritual surrender, Pābūjī hands his own sword to his enemy and takes Khī̃cī's whip, goading him to fulfill their "vows from a previous birth." When Khī̃cī hesitates, Pābūjī lashes him with the whip until Khī̃cī, in a fit of rage, strikes. As the sword falls, a **heavenly palanquin** descends. Pābūjī, alongside his divine mare Kesar Kāḷamī, enters the palanquin and ascends to heaven, his earthly mission complete.



With their lord gone, the remaining chieftains—**Cā̃do, Harmal, and Saljī Soḷaṅkī**—find themselves in a supernatural state where they cannot die by enemy hands. Realizing Pābūjī has departed, they decide to commit a ritual mutual sacrifice to join him. They take up their swords and cut off each other's heads, ending the line of the legendary chieftains.

As Pābūjī ascends, he looks down and sees Deval separating the streams of blood flowing from the fallen. He commands her to break the banks and let the blood of the **Bhīls, Rebārīs, and Rajpūts** mingle. He declares that since they died in the same service, their blood must become one, ensuring that in the future, these castes will remain united under his name. Deval obeys, and the blood of the heroes merges into a single sacred stream.

The episode concludes with the death of **Būṛo**, who is left fighting alone against the entire Khī̃cī host. Khī̃cī finally decapitates him. A camel-rider catches Būṛo’s severed head before it can hit the ground and gallops toward Koḷū, signaling the end of the Rāṭhoṛ rule and the fulfillment of the tragic destiny sparked by the "feud of the hare."

How do you feel about the way Pābūjī chose to end the battle by surrendering his sword to his enemy?
            </p>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12">
                The episode of the widows’ pyre
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                The final chapter of the epic follows the tragic aftermath of the battle and the rise of a new hero to avenge the fallen Rāṭhoṛs. In the wake of the slaughter, Queen Gailovat is haunted by a dream in which **Yama**, the god of death, reveals that Pābūjī and Būṛo have passed to heaven. Despite her desperate denial, the arrival of a camel-rider bearing Būṛo’s turban confirms the nightmare. Gailovat and the Soḍhī princess, Phulvantī—whose gold parrot has died in her hand as a final omen—resolve to become *satīs*. Before ascending the pyre at the Gū̃javo well, the pregnant Gailovat performs a final, miraculous act: she uses a dagger to cut open her own belly, delivering Būṛo's son. She names the child **Rūpnāth** and entrusts him to the Wind and Rain before a midwife carries him away to the safety of his grandmother Sonagarī’s palace in Girnār.

Rūpnāth grows into a powerful young man, unaware of his heritage until a series of taunts from his aunts and a chance encounter with the goddess **Deval** reveal the truth. Upon learning of the "unavenged memorials" of his father and uncle, Rūpnāth’s childhood ends. He renounces his royal status, takes the ochre robes of a *jogī* under **Guru Gorakhnāth**, and receives a divine blessing to levy vengeance. Armed with nothing but a *mū̃j* reed that he transforms into a deadly weapon, he decapitates Khī̃cī’s guardian buffaloes and infiltrates the palace at Jāyal.



Guided by his aunt **Pemā̃**, who has lived a life of sorrow among the Khī̃cīs, Rūpnāth navigates a palace protected by magical illusions, snakes, and tigers. He eventually finds **Jindrāv Khī̃cī** asleep and, after declaring his lineage, strikes off his head. In a grim ritual of vindication, Pemā̃ churns Khī̃cī’s blood in her curd-pot, announcing to the other queens that the Rāṭhoṛ debt is paid. Rūpnāth escapes the surrounding Khī̃cī army by leaping over the palace walls on his father’s legendary mare, **Ḍhel**, who recognizes the scent of her true master.

Rūpnāth returns to Girnār with Khī̃cī’s head, which he fashions into a ball to play a triumphant game in his grandmother's courtyard. Once satisfied, he strikes the "ball" back to Jāyal so that Pemā̃ may finally become a *satī* with her husband's remains. Having fulfilled his dharma of vengeance, Rūpnāth refuses the throne of Koḷū. He returns to his ascetic roots, setting up an eternal sacred fire at Sā̃gāṇ ro Dhoro, leaving the legacy of the great Rāṭhoṛ Pābūjī to be immortalized by the bards for generations to come.
            </p>
            

            </div>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Translation;