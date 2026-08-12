export type BalinjeraLang = "he" | "en";

export type BalinjeraPageKey = "home" | "about" | "events" | "blog";

export const languageLabels: Record<
  BalinjeraLang,
  { current: string; switchTo: string; switchLabel: string; dir: "rtl" | "ltr" }
> = {
  he: {
    current: "עברית",
    switchTo: "EN",
    switchLabel: "Switch to English",
    dir: "rtl",
  },
  en: {
    current: "English",
    switchTo: "עברית",
    switchLabel: "החלפה לעברית",
    dir: "ltr",
  },
};

export function resolveLang(value?: string | string[]): BalinjeraLang {
  const raw = Array.isArray(value) ? value[0] : value;

  return raw === "en" ? "en" : "he";
}

export function hrefWithLang(href: string, lang: BalinjeraLang) {
  const [basePath, hash] = href.split("#");
  const path = basePath || "/balinjera";
  const separator = path.includes("?") ? "&" : "?";

  return `${path}${separator}lang=${lang}${hash ? `#${hash}` : ""}`;
}

export const balinjeraCopy = {
  he: {
    navLabel: "תפריט ראשי",
    menuLabel: "פתיחת תפריט",
    orderLabel: "הזמינו",
    contactLabel: "צרו קשר",
    menuCta: "תפריט",
    moreInfo: "מידע נוסף",
    orderWolt: "הזמינו דרך Wolt",
    readyTitle: ["מוכנים לאכול?", "הזמינו שולחן עכשיו!"],
    madeBy: "Made By Shushan Studio",
    footerTagline: "מסעדת באלינג׳רה,\nמטבח אתיופי מסורתי",
    footerColumns: [
      {
        title: "כתובת",
        lines: ["מל״ן 4 / הכובשים 39", "תל אביב"],
      },
      {
        title: "שמרו על קשר",
        lines: ["03-525-2527", "fantaprada25@gmail.com", "הצהרת נגישות"],
      },
      {
        title: "שעות פתיחה",
        lines: ["ראשון-חמישי", "12:00-20:00", "שישי", "11:00-15:00"],
      },
    ],
    follow: "עקבו אחרינו",
    quick: {
      accessibility: "אפשרויות נגישות",
      actions: "פעולות מהירות",
      wolt: "הזמנה ב-Wolt",
      whatsapp: "WhatsApp",
    },
    nav: [
      { key: "home", label: "ראשי", href: "/balinjera" },
      { key: "about", label: "אודותינו", href: "/balinjera/about" },
      { key: "menu", label: "תפריט", href: "/balinjera#menu" },
      { key: "events", label: "אירועים", href: "/balinjera/events" },
      { key: "blog", label: "בלוג", href: "/balinjera/blog" },
      { key: "contact", label: "יצירת קשר", href: "/balinjera#footer" },
    ],
    hero: {
      eyebrow: "ביסטרו אתיופי כשר בכרם התימנים",
      title: "מסעדת באלינג׳רה,\nמטבח אתיופי\nמסורתי",
      body: "אנו מציעים חוויה אתיופית אמיתית. תוכלו למצוא אצלנו את המנות האתיופיות המוכרות כמו אינג׳רה לצד מנות שטרם יצא לכם להכיר. התפריט של ״באלינג׳רה״ מבוסס על חומרי גלם טריים בריאים וטבעיים עם תיבול אתיופי ייחודי שמתאים גם לחיך הישראלי.",
    },
    intro: {
      title: "מסעדה אתיופית כשרה בכרם התימנים",
      body: "קשה להסביר במילים את מה שאנחנו מציעים בבאלינג׳רה, אבל אם כבר הבנתם מהשם של המקום, אז כן, אנחנו מכינים אוכל אתיופי מסורתי, בריא, טעים ובעיקר עם מלא מלא צבע! זה בסדר לא נעלבנו אם תגידו לנו שזו הפעם הראשונה שאתם מגיעים אלינו, רק לפני כמה שנים החלטנו להרים את הכפפה או יותר נכון את הסירים ולחשוף לכולם את הטעמים והריחות של מסורת אתיופית/יהודית ארוכת שנים. ואם כבר אתיופי אז אין כמו אינג׳רה טרייה שאנחנו מכינים יום יום (ללא גלוטן). אתם מוזמנים להגיע לטעום ולחוות חוויה יוצאת דופן שכמוה עוד לא חוויתם, אחר כך כבר תחזרו לבד.",
    },
    offer: {
      title: "מה תכלו לקבל אצלנו",
      body: "באלינג׳ירה הוא ביסטרו קליל וצעיר בפאתי שוק הכרמל המשמש כאכסניה חמה למטבח האתיופי. זהו פרויקט של הדוגמנית פנטה פראדה. הארוחה האתיופית הקלאסית, המתבססת על פיתת אינג׳ירה אוורירית מקמח טף (ללא גלוטן), מוגשת פה עם מבחר תבשילים בשריים או טבעוניים.",
    },
    featureCards: [
      {
        title: "אירועים",
        description:
          "אתם מוזמנים להגיע לטעום ולחוות חוויה יוצאת דופן שכמוה עוד לא חוויתם, אחר כך כבר תחזרו לבד.",
        href: "/balinjera/events",
        media: "event",
      },
      {
        title: "מסעדה",
        description:
          "ביסטרו קליל וצעיר בפאתי שוק הכרמל המשמש כאכסניה חמה למטבח האתיופי.",
        href: "/balinjera/about",
        media: "restaurant",
      },
      {
        title: "מוצרים מאתיופיה",
        description:
          "אנחנו מכינים אוכל אתיופי מסורתי, בריא, טעים ובעיקר עם מלא מלא צבע!",
        media: "products",
      },
    ],
    name: {
      title: "איך בא לי אינג׳ירה",
      body: "משמעות השם של המקום הוא משחק מילים בין המילה אינג׳ירה שהוא הלחם האתיופי הלאומי, והמילה באלינג׳רה באמהרית שמשמעותה לאכול ביחד, הדרך המסורתית לאכול באתיופיה היא במשותף.",
    },
    quote: {
      body: "אחת מתחנות הביקור שלי בשוק הכרמל היתה מסקרנת במיוחד: ״באלינג׳רה״ מסעדה אתיופית שהוקמה ע״י פאנטה. התרגום של שם המסעדה הוא: ״ביחד״ וכך גם היתה התחושה שלי הן לגבי המקום והן לגבי הדרך שאוכלים כאן. זאת הפעם הראשונה שלי במסעדה אתיופית ואני שמח שניסיתי. טעמתי אוכל נהדר ומפתיע מאוד.",
      cite: "שאול לוי",
    },
    aboutPage: {
      eyebrow: "אודות באלינג׳רה",
      title: "בית קטן למטבח אתיופי מסורתי בלב תל אביב",
      body: "באלינג׳רה נולדה מתוך רצון לפתוח שולחן אתיופי אמיתי: אינג׳רה טרייה, תבשילים מתובלים, ירקות, קטניות, בשר וטעמים שמגיעים ממסורת משפחתית. המסעדה יושבת בפאתי שוק הכרמל וכרם התימנים, ומחברת בין אוכל ביתי, הכנסת אורחים וחוויה צבעונית שלא מנסה להיראות כמו שום דבר אחר.",
      highlights: [
        "אינג׳רה טרייה ללא גלוטן מקמח טף",
        "מנות בשריות וטבעוניות לפי המסורת האתיופית",
        "חוויה משפחתית של אכילה משותפת סביב שולחן אחד",
      ],
      storyTitle: "הסיפור של המקום",
      story:
        "רק לפני כמה שנים החלטנו להרים את הסירים ולחשוף לכולם את הטעמים והריחות של מסורת אתיופית/יהודית ארוכת שנים. בבאלינג׳רה לא רק מזמינים מנה, אלא פותחים את השולחן, קורעים אינג׳רה בידיים ואוכלים ביחד.",
    },
    eventsPage: {
      eyebrow: "אירועים בבאלינג׳רה",
      title: "אירוע קטן, צבעוני ומלא טעמים",
      body: "המסעדה מתאימה למפגשים משפחתיים, ימי הולדת, ארוחות צוות וחוויות טעימה סביב המטבח האתיופי. אנחנו שומרים על האופי החם של המקום, עם תפריט שמבוסס על אינג׳רה טרייה, תבשילים בשריים או טבעוניים ושולחן שמזמין לאכול ביחד.",
      options: [
        "ארוחות קבוצתיות סביב שולחן משותף",
        "טעימות היכרות עם המטבח האתיופי",
        "תפריט בשרי או טבעוני לפי אופי האירוע",
      ],
      ctaTitle: "רוצים לתכנן אירוע?",
      ctaBody:
        "שלחו לנו פרטים ונבנה יחד ארוחה שמתאימה לקבוצה, לשעה ולסגנון האירוח.",
    },
    blogPage: {
      eyebrow: "בלוג באלינג׳רה",
      title: "סיפורים, טעמים ומסורת מהמטבח האתיופי",
      body: "הבלוג נותן מקום לסיפורים שמאחורי האוכל: אינג׳רה, טף, אכילה משותפת והטעמים שמחברים בין מסורת אתיופית לחיים בתל אביב.",
      posts: [
        {
          title: "מה הופך אינג׳רה ללב הארוחה?",
          excerpt:
            "אינג׳רה היא גם לחם, גם צלחת וגם הדרך שבה כולם חולקים את אותה ארוחה.",
          image: "/balinjera/injera-wide.jpg",
        },
        {
          title: "איך אוכלים ביחד בבאלינג׳רה",
          excerpt: "השם באלינג׳רה מזכיר את הרעיון הפשוט והיפה של אכילה משותפת.",
          image: "/balinjera/food-table.jpg",
        },
        {
          title: "מטבח אתיופי ליד שוק הכרמל",
          excerpt:
            "החיבור בין כרם התימנים, שוק הכרמל והמטבח האתיופי יוצר חוויה תל אביבית מיוחדת.",
          image: "/balinjera/team.jpg",
        },
      ],
    },
  },
  en: {
    navLabel: "Main navigation",
    menuLabel: "Open menu",
    orderLabel: "Order",
    contactLabel: "Contact us",
    menuCta: "Menu",
    moreInfo: "More info",
    orderWolt: "Order with Wolt",
    readyTitle: ["Ready to eat?", "Reserve your table now"],
    madeBy: "Made By Shushan Studio",
    footerTagline: "Balinjera Restaurant,\ntraditional Ethiopian cuisine",
    footerColumns: [
      {
        title: "Address",
        lines: ["Malan 4 / HaKovshim 39", "Tel Aviv"],
      },
      {
        title: "Stay in touch",
        lines: ["03-525-2527", "fantaprada25@gmail.com", "Accessibility"],
      },
      {
        title: "Opening hours",
        lines: ["Sunday-Thursday", "12:00-20:00", "Friday", "11:00-15:00"],
      },
    ],
    follow: "Follow us",
    quick: {
      accessibility: "Accessibility options",
      actions: "Quick actions",
      wolt: "Order on Wolt",
      whatsapp: "WhatsApp",
    },
    nav: [
      { key: "home", label: "Home", href: "/balinjera" },
      { key: "about", label: "About", href: "/balinjera/about" },
      { key: "menu", label: "Menu", href: "/balinjera#menu" },
      { key: "events", label: "Events", href: "/balinjera/events" },
      { key: "blog", label: "Blog", href: "/balinjera/blog" },
      { key: "contact", label: "Contact", href: "/balinjera#footer" },
    ],
    hero: {
      eyebrow: "Kosher Ethiopian bistro in Kerem HaTeimanim",
      title: "Balinjera Restaurant,\ntraditional\nEthiopian cuisine",
      body: "We offer a true Ethiopian experience. You will find familiar Ethiopian dishes such as injera alongside dishes you may not have met before. Balinjera's menu is based on fresh, healthy and natural ingredients with unique Ethiopian seasoning that also suits the Israeli palate.",
    },
    intro: {
      title: "A kosher Ethiopian restaurant in Kerem HaTeimanim",
      body: "It is hard to explain in words what we offer at Balinjera, but the name already gives a clue: we prepare traditional Ethiopian food that is healthy, tasty and full of color. A few years ago we decided to lift the pots and share the tastes and aromas of a long Ethiopian-Jewish tradition. And if it is Ethiopian, nothing beats fresh injera that we make every day from teff flour, naturally gluten free.",
    },
    offer: {
      title: "What you can get here",
      body: "Balinjera is a light, young bistro on the edge of Carmel Market and a warm home for Ethiopian cuisine. It is a project by model Fanta Prada. The classic Ethiopian meal, based on airy injera made from teff flour, is served here with a selection of meat or vegan stews.",
    },
    featureCards: [
      {
        title: "Events",
        description:
          "Come taste and experience something different, warm and memorable. After the first visit, you will know your way back.",
        href: "/balinjera/events",
        media: "event",
      },
      {
        title: "Restaurant",
        description:
          "A light, young bistro on the edge of Carmel Market and a warm home for Ethiopian cuisine.",
        href: "/balinjera/about",
        media: "restaurant",
      },
      {
        title: "Ethiopian products",
        description:
          "We prepare traditional Ethiopian food that is healthy, tasty and especially full of color.",
        media: "products",
      },
    ],
    name: {
      title: "Craving injera",
      body: "The restaurant name is a play on the word injera, Ethiopia's national bread, and the Amharic word Balinjera, meaning to eat together. Traditionally, Ethiopian food is shared around the same table.",
    },
    quote: {
      body: "One of my visits near Carmel Market was especially intriguing: Balinjera, an Ethiopian restaurant founded by Fanta. The restaurant name means together, and that was exactly the feeling I had in the place and in the way people eat here. It was my first time in an Ethiopian restaurant and I am glad I tried it. I tasted wonderful and surprising food.",
      cite: "Shaul Levy",
    },
    aboutPage: {
      eyebrow: "About Balinjera",
      title: "A small home for traditional Ethiopian cuisine in Tel Aviv",
      body: "Balinjera was born from the wish to open a true Ethiopian table: fresh injera, seasoned stews, vegetables, legumes, meat and flavors rooted in family tradition. The restaurant sits by Carmel Market and Kerem HaTeimanim, connecting homemade food, hospitality and a colorful experience with its own identity.",
      highlights: [
        "Fresh gluten-free injera made from teff flour",
        "Meat and vegan dishes from Ethiopian tradition",
        "A shared family-style meal around one table",
      ],
      storyTitle: "The story of the place",
      story:
        "A few years ago we decided to lift the pots and reveal the flavors and aromas of a long Ethiopian-Jewish tradition. At Balinjera you do not only order a dish. You open the table, tear injera by hand and eat together.",
    },
    eventsPage: {
      eyebrow: "Events at Balinjera",
      title: "Small, colorful events full of flavor",
      body: "The restaurant is suited for family gatherings, birthdays, team meals and tasting experiences around Ethiopian cuisine. We keep the warm character of the place, with a menu based on fresh injera, meat or vegan stews and a table that invites everyone to eat together.",
      options: [
        "Group meals around a shared table",
        "Introductory tastings of Ethiopian cuisine",
        "Meat or vegan menu according to the event style",
      ],
      ctaTitle: "Planning an event?",
      ctaBody:
        "Send us the details and we will shape a meal that fits the group, timing and hosting style.",
    },
    blogPage: {
      eyebrow: "Balinjera Blog",
      title: "Stories, flavors and tradition from the Ethiopian kitchen",
      body: "The blog makes room for the stories behind the food: injera, teff, shared eating and the flavors that connect Ethiopian tradition with life in Tel Aviv.",
      posts: [
        {
          title: "Why injera is the heart of the meal",
          excerpt:
            "Injera is bread, plate and the way everyone shares the same meal.",
          image: "/balinjera/injera-wide.jpg",
        },
        {
          title: "How people eat together at Balinjera",
          excerpt:
            "The name Balinjera carries the simple and beautiful idea of a shared meal.",
          image: "/balinjera/food-table.jpg",
        },
        {
          title: "Ethiopian food near Carmel Market",
          excerpt:
            "The connection between Kerem HaTeimanim, Carmel Market and Ethiopian cuisine creates a distinct Tel Aviv experience.",
          image: "/balinjera/team.jpg",
        },
      ],
    },
  },
} as const;
