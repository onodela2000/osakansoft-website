// サイト全体で使う会社の基本情報。文言の差し替えはここだけ触ればいい。

export const site = {
  name: "合同会社おさかなソフト",
  nameEn: "OSAKANA SOFT LLC",
  short: "おさかなソフト",
  url: "https://osakanasoft.com",
  email: "info@osakanasoft.com",
  description:
    "神奈川県小田原市のソフトウェア開発会社。受託開発・ゲーム開発・AI導入支援・技術アドバイザリーをやっています。",
} as const;

export const companyProfile: ReadonlyArray<readonly [string, string]> = [
  ["会社名", "合同会社おさかなソフト"],
  ["英文名", "Osakana Soft LLC"],
  ["代表社員", "小野寺 一輝"],
  ["設立", "2026年5月"],
  ["資本金", "300,000円"],
  ["所在地", "神奈川県小田原市本町1丁目5番4号"],
  ["事業内容", "受託開発 / ゲーム開発 / AI導入支援 / 技術アドバイザリー"],
];

export const services = [
  {
    id: "contract",
    no: "01",
    en: "CONTRACT DEV",
    title: "受託開発",
    lead: "要件が固まってなくても、\n相談は始められる。",
    body: "業務システム、Webアプリ、社内ツール。要件定義から設計・実装・運用まで通しでやります。",
    tags: ["Webシステム", "業務アプリ", "社内ツール", "既存改修"],
    accent: "cyan",
  },
  {
    id: "game",
    no: "02",
    en: "GAME DEV",
    title: "ゲーム開発",
    lead: "企画書ではなく、\n動くものを出します。",
    body: "ブラウザゲーム、ミニゲーム、プロトタイプ。自分たちで公開までやっているので、話が早いです。",
    tags: ["ブラウザゲーム", "プロトタイプ", "3D / WebGL", "企画から"],
    accent: "coral",
  },
  {
    id: "ai",
    no: "03",
    en: "AI ADOPTION",
    title: "AI導入支援",
    lead: "AIを入れることが、\n目的になっていませんか。",
    body: "何ができるかの整理、小さく試す検証、実務への組み込み。仕事が実際に軽くなるところまでやります。",
    tags: ["生成AI活用相談", "AI機能の実装", "社内定着支援", "PoC"],
    accent: "sun",
  },
  {
    id: "advisory",
    no: "04",
    en: "ADVISORY",
    title: "技術アドバイザー",
    lead: "社内にエンジニアが\nいなくても、大丈夫です。",
    body: "技術選定、設計レビュー、開発チームの壁打ち。判断の材料が要るときに、外から入ります。",
    tags: ["技術選定", "設計レビュー", "壁打ち", "顧問"],
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
