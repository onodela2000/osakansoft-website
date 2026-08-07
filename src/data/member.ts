// 中の人。公開前に経歴とリンクを確認してください。

export const member = {
  name: "小野寺 一輝",
  nameEn: "KAZUKI ONODERA",
  role: "代表社員 / エンジニア",
  bio: [
    "相談、設計、実装、運用まで手を動かします。業務システムからAI、自主制作のゲームやアプリまで、必要なサイズから一緒につくります。",
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
