// src/data/sentences.js
// שלב ב': הבנת משפטים. כל שאלה: prompt (מה שמוצג), promptKind, optionsKind, options.
// התמונות נמצאות בתיקייה public/images
// הערה: סימון isCorrect נקבע לפי תוכן התמונות. כותבת המבדק צריכה לאשר.

// לוח 1: משפט למעלה, בוחרים תמונה
export const sentencesBoard1 = [
  {
    prompt: "שׁוּלַמִּית מְצַיֶּרֶת בַּיִת",
    promptKind: "text",
    optionsKind: "image",
    options: [
      { content: "/images/s1-shulamit-colors.jpg", isCorrect: false },
      { content: "/images/s1-shulamit-draws-house.jpg", isCorrect: true },
      { content: "/images/s1-shulamit-eats-apple.jpg", isCorrect: false },
    ],
  },
  {
    prompt: "שִׁמְעוֹן נָהַג בַּמְּכוֹנִית הָאֲדֻמָּה",
    promptKind: "text",
    optionsKind: "image",
    options: [
      { content: "/images/s2-blue-car.jpg", isCorrect: false },
      { content: "/images/s2-boy-bicycle.jpg", isCorrect: false },
      { content: "/images/s2-shimon-red-car.jpg", isCorrect: true },
    ],
  },
  {
    prompt: "דְּבוֹרָה סָגְרָה אֶת הַחַלּוֹן",
    promptKind: "text",
    optionsKind: "image",
    options: [
      { content: "/images/s3-devorah-closes-window.jpg", isCorrect: true },
      { content: "/images/s3-devorah-door.jpg", isCorrect: false },
      { content: "/images/s3-devorah-curtain.jpg", isCorrect: false },
    ],
  },
  {
    prompt: "שׁוּקִי רָכַב עַל הָאוֹפַנַּיִם",
    promptKind: "text",
    optionsKind: "image",
    options: [
      { content: "/images/s4-tricycle.jpg", isCorrect: false },
      { content: "/images/s4-shuki-bicycle.jpg", isCorrect: true },
      { content: "/images/s4-soccer.jpg", isCorrect: false },
    ],
  },
];

// לוח 2: תמונה למעלה, בוחרים משפט
export const sentencesBoard2 = [
  {
    prompt: "/images/b2-g1-mom-feeds.jpg",
    promptKind: "image",
    optionsKind: "text",
    options: [
      { content: "אִמָּא מַלְבִּישָׁה אֶת מוֹיְשִׁי וּמְסַפֶּרֶת לוֹ סִפּוּר", isCorrect: false },
      { content: "אִמָּא מַאֲכִילָה אֶת מוֹיְשִׁי וּמְסַפֶּרֶת לוֹ סִפּוּר", isCorrect: true },
      { content: "אִמָּא מְשַׂחֶקֶת עִם מוֹיְשִׁי וּמְסַפֶּרֶת לוֹ סִפּוּר", isCorrect: false },
    ],
  },
  {
    prompt: "/images/b2-g2-kids-tree-ball.jpg",
    promptKind: "image",
    optionsKind: "text",
    options: [
      { content: "הַיְּלָדִים יָצְאוּ לֶחָצֵר וְשִׂחֲקוּ בַּכַּדּוּר", isCorrect: false },
      { content: "הַיְּלָדִים טִפְּסוּ עַל הָעֵץ כְּדֵי לְהוֹרִיד אֶת הַכַּדּוּר", isCorrect: true },
      { content: "הַיְּלָדִים יָצְאוּ לֶחָצֵר וְשִׂחֲקוּ מַחְבּוֹאִים", isCorrect: false },
    ],
  },
  {
    prompt: "/images/b2-g3-kids-umbrella.jpg",
    promptKind: "image",
    optionsKind: "text",
    options: [
      // בקובץ המקור כתוב "מִסְתָּרְקִים" (כנראה טעות הקלדה), תוקן ל"מִסְתַּתְּרִים". לאשר.
      { content: "גֶּשֶׁם יוֹרֵד וְהַיְּלָדִים מִסְתַּתְּרִים לְיַד הַמִּטְרִיָּה", isCorrect: false },
      { content: "גֶּשֶׁם יוֹרֵד וְהַיְּלָדִים מִסְתַּתְּרִים מִתַּחַת לַמִּטְרִיָּה", isCorrect: true },
      { content: "גֶּשֶׁם יוֹרֵד וְהַיְּלָדִים מִסְתַּתְּרִים מִתַּחַת לַתַּחֲנָה", isCorrect: false },
    ],
  },
];

// לוח 3: הוראה למעלה, שלושה פריטים באותה תמונה בגדלים שונים
// size: small / medium / large (ה-CSS קובע את הגודל בפועל)
export const sentencesBoard3 = [
  {
    prompt: "סַמֵּן אֶת הַכִּסֵּא הַקָּטָן",
    promptKind: "text",
    optionsKind: "image",
    options: [
      { content: "/images/b3-chair.png", size: "large", isCorrect: false },
      { content: "/images/b3-chair.png", size: "small", isCorrect: true },
      { content: "/images/b3-chair.png", size: "medium", isCorrect: false },
    ],
  },
  {
    prompt: "סַמֵּן אֶת הַכִּבְשָׂה הַגְּבוֹהָה",
    promptKind: "text",
    optionsKind: "image",
    options: [
      { content: "/images/b3-sheep.png", size: "small", isCorrect: false },
      { content: "/images/b3-sheep.png", size: "medium", isCorrect: false },
      { content: "/images/b3-sheep.png", size: "large", isCorrect: true },
    ],
  },
  {
    prompt: "סַמֵּן אֶת הַכַּף הַבֵּינוֹנִית",
    promptKind: "text",
    optionsKind: "image",
    options: [
      { content: "/images/b3-spoon.png", size: "large", isCorrect: false },
      { content: "/images/b3-spoon.png", size: "small", isCorrect: false },
      { content: "/images/b3-spoon.png", size: "medium", isCorrect: true },
    ],
  },
];
