// サイト全体で使う会社の基本情報。文言の差し替えはここだけ触ればいい。

export const site = {
  name: "合同会社おさかなソフト",
  nameEn: "OSAKANA SOFT LLC",
  short: "おさかなソフト",
  url: "https://osakanasoft.com",
  email: "info@osakanasoft.com",
  description:
    "神奈川県小田原市の小さなソフトウェアスタジオ。システム開発・AI導入・技術顧問・企業向けAI勉強会を、相談から一緒につくります。",
} as const;

export const companyProfile: ReadonlyArray<readonly [string, string]> = [
  ["会社名", "合同会社おさかなソフト"],
  ["英文名", "Osakana Soft LLC"],
  ["代表社員", "小野寺 一輝"],
  ["設立", "2026年6月"],
  ["資本金", "300,000円"],
  ["所在地", "神奈川県小田原市本町1丁目5番4号"],
  ["事業内容", "システム開発 / AI導入支援 / 技術顧問 / 企業向けAI勉強会 / 自主制作"],
];

export const services = [
  {
    id: "contract",
    no: "01",
    en: "SOFTWARE DEVELOPMENT",
    title: "システム開発",
    lead: "まだ言葉になっていない段階から。",
    body: "業務システム、Webアプリ、社内ツール。相談から設計・実装・運用まで、必要なサイズで一緒につくります。",
    tags: ["Webシステム", "業務アプリ", "社内ツール", "既存改修"],
    accent: "cyan",
  },
  {
    id: "ai",
    no: "02",
    en: "AI ADOPTION",
    title: "AI導入",
    lead: "使えるところを、一緒に探す。",
    body: "何に使えるかの整理、小さな検証、AI機能の実装、社内への定着。仕事が実際に軽くなるところまで伴走します。",
    tags: ["活用相談", "AI機能の実装", "PoC", "社内定着"],
    accent: "coral",
  },
  {
    id: "advisory",
    no: "03",
    en: "TECH ADVISORY",
    title: "技術顧問",
    lead: "判断に迷ったとき、すぐ隣に。",
    body: "技術選定、設計レビュー、開発チームの壁打ち。社内に専任のエンジニアがいないときも、外から一緒に考えます。",
    tags: ["技術選定", "設計レビュー", "壁打ち", "定例相談"],
    accent: "sun",
  },
  {
    id: "workshop",
    no: "04",
    en: "AI WORKSHOP",
    title: "AI勉強会",
    lead: "聞くだけでなく、その場で試す。",
    body: "普段の業務を題材にした企業向けの勉強会です。オンラインを基本に、小田原周辺では対面開催もご相談いただけます。",
    tags: ["企業内研修", "初心者向け", "業務別ワーク", "対面相談可"],
    accent: "cyan",
  },
] as const;

export const steps = [
  {
    no: "01",
    en: "TALK",
    title: "はなす",
    body: "困りごとを聞きます。要件が固まっている必要はありません。むしろ固まる前のほうが、手伝えることが多い。",
  },
  {
    no: "02",
    en: "TRY",
    title: "ためす",
    body: "いきなり全部つくりません。効きそうなところから小さく形にして、実際に触って確かめます。",
  },
  {
    no: "03",
    en: "GROW",
    title: "そだてる",
    body: "納品して終わりにしません。使われ方を見ながら直していきます。運用まで付き合います。",
  },
] as const;
