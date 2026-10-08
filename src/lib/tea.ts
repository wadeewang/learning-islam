import type { QuizQuestion } from "@/lib/quiz";

export type TeaAroma = {
  name: string;
  alsoCalled?: string;
  note: string;
};

export type TeaLesson = {
  slug: string;
  title: string;
  subtitle: string;
  origin: string;
  category: string;
  summary: string;
  points: { title: string; body: string }[];
  aromas: TeaAroma[];
  steps: { name: string; body: string }[];
  villages: string[];
  confuseWith: { title: string; body: string };
};

export const dancong: TeaLesson = {
  slug: "dancong",
  title: "凤凰单丛茶叶",
  subtitle: "潮州凤凰镇 · 乌岽村",
  origin: "广东省潮州市潮安区凤凰镇",
  category: "广东乌龙茶",
  summary:
    "「凤凰蛋村茶叶」多半是在说凤凰单丛：核心好茶出在凤凰镇乌岽村。潮汕话里「丛」就是一棵茶树；单株采、单株做、单株卖，才叫单丛。",
  villages: ["乌岽村", "凤西", "凤溪", "棋盘", "大庵"],
  points: [
    {
      title: "为什么常被写成「蛋村」",
      body: "单丛（dān cóng）口播时很容易听成「蛋村」。凤凰单丛的核心产区是乌岽村，不是一座叫蛋村的村子。正写是「丛」，不是「枞」；潮州市2004年已规定包装宣传一律用「丛」。",
    },
    {
      title: "单丛是什么意思",
      body: "一株茶树经几代人选育，香味独特稳定后，就单独采收、单独制作、单独出售。这样的茶树叫单丛茶树，做出的茶叫单丛茶。凤凰单丛是这些优异单株的总称。",
    },
    {
      title: "山与人",
      body: "凤凰茶因凤凰山得名。南宋起山民已种鸟嘴茶；民间传说宋帝赵昺路过乌岽山，山民献红茵茶汤，后称「宋茶」。明弘治年间待诏山（今大质山）茶曾作贡品。潮安凤凰单丛茶文化系统2014年入选中国重要农业文化遗产。",
    },
    {
      title: "怎么喝",
      body: "潮州工夫茶是它的日常喝法：小壶、薄杯，沸水冲泡，热杯热壶，刮沫淋盖，短浸快出。好的单丛有花香或蜜韵，也常提到「丛韵」——山场留下的岩骨气息。",
    },
  ],
  aromas: [
    {
      name: "银花香",
      alsoCalled: "鸭屎香",
      note: "近年最出名的香型。名字土，香气却像金银花，被新茶饮带火。",
    },
    {
      name: "蜜兰香",
      note: "蜜甜里带兰花气，是入门最常遇到的单丛之一。",
    },
    {
      name: "黄栀香",
      note: "栀子花香，清而透，传统名丛里常见。",
    },
    {
      name: "芝兰香",
      note: "兰花清香，汤感较细。",
    },
    {
      name: "桂花香",
      note: "桂花甜香，秋香感更明显。",
    },
    {
      name: "玉兰香",
      note: "白玉兰般的厚香，香气更浓一些。",
    },
  ],
  steps: [
    { name: "晒青", body: "鲜叶薄摊，借日光走一部分水。" },
    { name: "晾青 / 浪青", body: "室内摊凉，再摇青碰青，让青味消退、香气起来。" },
    { name: "发酵", body: "做青之后继续氧化，形成乌龙茶的半发酵风格。" },
    { name: "炒青", body: "高温杀青，固定已有的香。" },
    { name: "揉捻", body: "成条，挤出茶汁，便于冲泡。" },
    { name: "烘焙", body: "炭焙或烘笼收干，火候决定蜜韵与耐泡。" },
  ],
  confuseWith: {
    title: "不要和武夷山「凤凰蛋」混在一起",
    body: "武夷山民间另有一种拇指大小的草药丸，也叫凤凰蛋：以武夷岩茶配数十种草药捏成蛋形，端午制作，用来冲泡或煎煮。那是闽北药茶习俗，不是潮州凤凰单丛，也不是乌岽村的干茶。",
  },
};

export function getTeaLesson(slug: string): TeaLesson | undefined {
  if (slug === dancong.slug) {
    return dancong;
  }
  return undefined;
}

export const dancongQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "「凤凰蛋村茶叶」通常对应哪一种茶？",
    options: ["西湖龙井", "凤凰单丛", "普洱熟茶", "白毫银针"],
    answerIndex: 1,
    explanation:
      "口播里的「蛋村」多半是「单丛」或核心产区「乌岽村」。正名是潮州凤凰单丛。",
  },
  {
    id: 2,
    question: "凤凰单丛的核心产区在哪里？",
    options: [
      "福建武夷山星村",
      "浙江杭州龙井村",
      "广东潮州凤凰镇乌岽村",
      "云南西双版纳易武",
    ],
    answerIndex: 2,
    explanation: "好茶集中在潮安区凤凰镇，乌岽、凤西一带海拔高、古茶树多。",
  },
  {
    id: 3,
    question: "「单丛」在潮汕茶里主要指什么？",
    options: [
      "把许多品种拼在一起卖",
      "单株采收、单株制作、单株出售",
      "只采春茶一季",
      "必须用陶瓷大壶闷泡",
    ],
    answerIndex: 1,
    explanation: "优异单株单独采制销售，才叫单丛。凤凰单丛是这些单株的总称。",
  },
  {
    id: 4,
    question: "鸭屎香属于哪一种香型？",
    options: ["肉桂香", "杏仁香", "夜来香", "银花香"],
    answerIndex: 3,
    explanation: "鸭屎香是银花香单丛的俗称，近年因奶茶出圈。",
  },
  {
    id: 5,
    question: "武夷山的「凤凰蛋」是什么？",
    options: [
      "乌岽村的古茶树品种",
      "潮州单丛的另一种写法",
      "岩茶配草药捏成的民间药茶丸",
      "凤凰单丛的特级品名",
    ],
    answerIndex: 2,
    explanation:
      "凤凰蛋是武夷山端午制作的蛋形草药丸，和潮州凤凰单丛不是同一种东西。",
  },
];
