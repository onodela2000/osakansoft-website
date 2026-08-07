// PLAYGROUND に並べるゲーム。増えたらここに足す。

import pixelPopDjShot from "../assets/games/pixel-pop-dj.png";
import osushiShot from "../assets/games/osushi.png";
import quizPartyShot from "../assets/games/quiz-party-screen-v2.png";

export type Game = {
  slug: string;
  title: string;
  titleEn: string;
  copy: string;
  description: string;
  url: string;
  year: string;
  status: "PLAYABLE" | "WIP";
  tech: string[];
  /* 制作の裏話。ここが「作れる人がやってる」の証拠になる箇所 */
  notes: string[];
  /** カードとヒーローに使うスクリーンショット（16:10 推奨） */
  shot: ImageMetadata;
  palette: { bg: string; fg: string; accent: string };
};

export const games: Game[] = [
  {
    slug: "pixel-pop-dj",
    title: "Pixel Pop DJ",
    titleEn: "PIXEL POP DJ",
    copy: "ブラウザで鳴らす、チップチューンDJ",
    description:
      "ドラム・ベース・アルペジオのループを重ねて、その場でトラックを組み立てるブラウザDJ。BPMを変えながらレイヤーを足し引きするだけで、それっぽい曲になります。インストール不要、開いたらすぐ鳴ります。",
    url: "https://pixelpopdj.web.app/",
    year: "2026",
    status: "PLAYABLE",
    tech: ["Web Audio API", "TypeScript", "Firebase Hosting"],
    notes: [
      "音は録音データではなく Web Audio API で合成しています。ファイルを持たないので読み込みが速い。",
      "UIは90年代のPC音楽ソフトのイメージ。全部ドット絵で組んでいます。",
    ],
    shot: pixelPopDjShot,
    palette: { bg: "#7ec8f0", fg: "#1b2a5e", accent: "#f5c518" },
  },
  {
    slug: "osushi",
    title: "Osushi",
    titleEn: "OSUSHI",
    copy: "3Dで寿司を握る、それだけ",
    description:
      "画面のなかで寿司を握る3D体験。シャリを握って、ネタを乗せる。それ以上のルールはありません。ブラウザで開くだけで、板前になれます。",
    url: "https://osushi-game.web.app/",
    year: "2026",
    status: "PLAYABLE",
    tech: ["Three.js", "WebGL", "TypeScript", "Firebase Hosting"],
    notes: [
      "3Dモデルは全部コードで組み立てています。外部モデルを読まないので軽い。",
      "「握る」の手応えをどう出すかに一番時間を使いました。",
    ],
    shot: osushiShot,
    palette: { bg: "#0f1420", fg: "#f4ede1", accent: "#e5544b" },
  },
  {
    slug: "quiz-party",
    title: "Quiz Party JP",
    titleEn: "QUIZ PARTY JP",
    copy: "スマホで集まる、リアルタイムクイズ大会",
    description:
      "飲み会や研修、学校イベントなどで使えるクイズ大会サービス。クイズをつくってURLを共有すれば、参加者はスマホからすぐに参加できます。回答の集計から正解発表、ランキングまでリアルタイムで進みます。",
    url: "https://quizparty.jp/",
    year: "2026",
    status: "PLAYABLE",
    tech: ["Next.js", "TypeScript", "Supabase", "Realtime"],
    notes: [
      "参加者はログイン不要。共有されたURLを開くだけで、その場のクイズ大会に参加できます。",
      "出題・回答・集計・結果発表をリアルタイムにつなぎ、会場でみんなが一緒に楽しめる流れをつくりました。",
    ],
    shot: quizPartyShot,
    palette: { bg: "#15130d", fg: "#fff9e7", accent: "#f6c453" },
  },
];
