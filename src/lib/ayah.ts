export type Word = {
  ar: string;
  transliteration: string;
  zh: string;
  en: string;
};

export type RelatedAyah = {
  ref: string;
  slug?: string;
  ar: string;
  zh: string;
  en: string;
};

export type AyahLesson = {
  slug: string;
  surahNumber: number;
  ayahNumber: number;
  surahNameAr: string;
  surahNameZh: string;
  surahNameEn: string;
  arabic: string;
  paraphraseZh: string;
  translationZh: string;
  translationZhSource: string;
  translationEn: string;
  translationEnSource: string;
  words: Word[];
  points: { title: string; body: string }[];
  related: RelatedAyah[];
};

export const ayah254: AyahLesson = {
  slug: "25-54",
  surahNumber: 25,
  ayahNumber: 54,
  surahNameAr: "الفرقان",
  surahNameZh: "准则章",
  surahNameEn: "Al-Furqan",
  arabic:
    "وَهُوَ الَّذِي خَلَقَ مِنَ الْمَاءِ بَشَرًا فَجَعَلَهُ نَسَبًا وَصِهْرًا ۗ وَكَانَ رَبُّكَ قَدِيرًا",
  paraphraseZh: "他从水上创造人类，并使人们成为亲属",
  translationZh: "他就是用精水创造人，使人成为血族和姻亲的。你的主是全能的。",
  translationZhSource: "马坚译本",
  translationEn:
    "And it is He who created from water a human being and made him [a relative by] lineage and marriage. And ever is your Lord competent [concerning creation].",
  translationEnSource: "Sahih International",
  words: [
    {
      ar: "وَهُوَ",
      transliteration: "wa-huwa",
      zh: "而他",
      en: "And He",
    },
    {
      ar: "الَّذِي",
      transliteration: "alladhī",
      zh: "那位",
      en: "who",
    },
    {
      ar: "خَلَقَ",
      transliteration: "khalaqa",
      zh: "创造了",
      en: "created",
    },
    {
      ar: "مِنَ",
      transliteration: "mina",
      zh: "从",
      en: "from",
    },
    {
      ar: "الْمَاءِ",
      transliteration: "al-māʾi",
      zh: "水（精水）",
      en: "the water",
    },
    {
      ar: "بَشَرًا",
      transliteration: "basharan",
      zh: "人",
      en: "a human being",
    },
    {
      ar: "فَجَعَلَهُ",
      transliteration: "fa-jaʿalahu",
      zh: "于是使他成为",
      en: "then made him",
    },
    {
      ar: "نَسَبًا",
      transliteration: "nasaban",
      zh: "血亲 / 血统",
      en: "lineage / blood kinship",
    },
    {
      ar: "وَصِهْرًا",
      transliteration: "wa-ṣihran",
      zh: "和姻亲",
      en: "and marriage kinship",
    },
    {
      ar: "وَكَانَ",
      transliteration: "wa-kāna",
      zh: "并且",
      en: "and is",
    },
    {
      ar: "رَبُّكَ",
      transliteration: "rabbuka",
      zh: "你的主",
      en: "your Lord",
    },
    {
      ar: "قَدِيرًا",
      transliteration: "qadīran",
      zh: "全能的",
      en: "All-Powerful",
    },
  ],
  points: [
    {
      title: "从水创造人",
      body: "「الْمَاءِ」字面是「水」。马坚译本译作「精水」，伊本·凯西尔等经注也把它理解为微弱的精液（nuṭfah）：真主从一滴被轻视的液体中造出人，赋予形状，分为男女。更广地说，《古兰经》也多次提到一切活物都由水造成。",
    },
    {
      title: "نَسَب — 血亲",
      body: "نَسَب 指由出生、血统结成的亲属：为人子女、为人父母、兄弟姊妹。人首先进入的，是这条血缘之链。",
    },
    {
      title: "صِهْر — 姻亲",
      body: "صِهْر 指由婚姻结成的亲属：岳父母、女婿、亲家。伊本·凯西尔说：起初他是别人的孩子，随后结婚成为女婿，再有自己的姻亲。血亲和姻亲，是人类社会得以展开的两条纽带。",
    },
    {
      title: "你的主是全能的",
      body: "经文以「وَكَانَ رَبُّكَ قَدِيرًا」收束：从一滴水到完整的人，再从一个人铺开血亲与姻亲的网络，都在真主的能力之中。",
    },
  ],
  related: [
    {
      ref: "21:30",
      ar: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
      zh: "我用水创造一切生物。",
      en: "And We made from water every living thing.",
    },
    {
      ref: "24:45",
      ar: "وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِنْ مَاءٍ",
      zh: "真主创造一切动物于水。",
      en: "Allah has created every [living] creature from water.",
    },
    {
      ref: "49:13",
      ar: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
      zh: "众人啊！我确已从一男一女创造你们，我使你们成为许多民族和宗族，以便你们互相认识。",
      en: "O mankind, We created you from a male and a female and made you peoples and tribes that you may know one another.",
    },
  ],
};

export function getLessonBySlug(slug: string): AyahLesson | undefined {
  if (slug === ayah254.slug) {
    return ayah254;
  }
  return undefined;
}

export function formatAyahRef(lesson: AyahLesson): string {
  return `${lesson.surahNameZh} ${lesson.surahNumber}:${lesson.ayahNumber}`;
}
