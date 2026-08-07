// 中の人。※ 経歴・SNSは仮置き。実際の内容に差し替えてください。

export const member = {
  name: "小野寺 一輝",
  nameEn: "KAZUKI ONODERA",
  role: "代表社員 / エンジニア",
  // TODO: 実際の経歴に差し替え
  bio: [
    "（仮）ソフトウェアエンジニアとして受託開発・自社サービス開発に携わったのち、2026年5月に合同会社おさかなソフトを設立。",
    "（仮）業務システムからブラウザゲームまで、企画から実装・運用まで一通り手を動かします。最近は生成AIを実務にどう馴染ませるかに関心があります。",
  ],
  // TODO: 実際のスキルに差し替え
  skills: [
    "TypeScript / React / Next.js",
    "Python",
    "Cloudflare / Firebase / GCP",
    "Three.js / WebGL",
    "生成AI活用・LLMアプリ開発",
  ],
  // TODO: 実際のアカウントに差し替え。不要な行は消してOK
  links: [
    { label: "X", handle: "@—", url: "#" },
    { label: "GitHub", handle: "—", url: "#" },
  ],
} as const;

/** 奥さんとの共同制作について書くならここ。書かないなら show: false */
export const crew = {
  show: true,
  title: "ふたりでつくる",
  body: "ゲームは夫婦でつくっています。仕事とは別の、つくりたいものをつくる場所。できたものは あそびば に置いていきます。",
} as const;
