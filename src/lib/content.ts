import type { NavItem, ServiceItem, ValueItem } from "@/types/content";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Values", href: "#values" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "mailto:info@solact.jp" },
];

export const SERVICES: ServiceItem[] = [
  {
    name: "ソラタイプ診断",
    desc: "40問で、キャリアの迷いを整理する。",
    href: "#services",
    logoSrc: "",
  },
  {
    name: "SoraVet（ソラベット）",
    desc: "学生も、病院も、診断で選ぶ。",
    href: "#services",
    logoSrc: "",
  },
  {
    name: "SoraBiz（ソラビズ）",
    desc: "根拠のある実績が、正しい採用判断を生む。",
    href: "#services",
    logoSrc: "",
  },
  {
    name: "SoraGuild（ソラギルド）",
    desc: "ひとつひとつのクエストが、実績になる。",
    href: "#services",
    logoSrc: "",
  },
];

export const CORE_VALUES: ValueItem[] = [
  { jp: "行動が証明する", en: "Action Proves" },
  { jp: "本質を照らす", en: "Illuminate Essence" },
  { jp: "公平にアクセスする", en: "Fair Access" },
];

export const VISION_PARAGRAPHS: string[][] = [
  [
    "学歴でも、肩書きでもなく、",
    "その人が積み上げてきた行動を、",
    "採用の根拠にする。",
  ],
  [
    "第三者が証明したボランティア実績、",
    "40問の診断が導き出す適性。",
    "自己申告ではない、本当の姿で評価される世界へ。",
  ],
  [
    "Solas（光）と Act（行動）。",
    "私たちは「行動実績」という光で、",
    "本来見えるはずだった人の本質を照らします。",
  ],
];

export const STORY_PARAGRAPHS: string[] = [
  "就職活動で、3種類の「もどかしさ」を経験しました。",
  "",
  "理系企業では、面接にたどり着く前に書類で落とされることが続きました。話してみれば内定をもらえることが多かっただけに、「会う前に、どうやって自分を証明すればいいんだろう」と、ずっと考えていました。",
  "",
  "文系企業では、「自分が何をやってきたか」を言葉だけで伝えるしかありませんでした。どれだけ真剣に話しても、それが本当に届いているかどうかわからない。企業も学生も、手探りのまま決めていくような感覚がありました。",
  "",
  "動物病院の就職活動では、また別の景色がありました。実習に行けばほぼ内定が出るほど人を必要としているのに、採用コストは高く、地方の病院には若い人材がなかなか届かない。求める側と求められる側が、うまくつながれていない現状がありました。",
  "",
  "3つの就職活動を経て、私はひとつの問いにたどり着きました。",
  "「その人の本質を、採用に届ける仕組みはつくれないか。」",
  "",
  "SOLACT は、その問いから生まれました。",
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export const CONTACT_EMAIL = "info@solact.jp";
