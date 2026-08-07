// ドット絵は文字列マップで持つ。1文字＝1ドット。
//   .  透明   #  本体   t  ひれ   o  目   b  腹（明るい面）

export type Sprite = {
  pattern: string[];
  /** 文字 → 色。色は CSS 変数でも実値でもいい */
  colors: Record<string, string>;
};

/** 右向きのおさかな 16×9 */
export const fish: Sprite = {
  pattern: [
    "..........####..",
    "t.......########",
    "tt....##########",
    "ttt.########o###",
    "tttt############",
    "ttt.############",
    "tt....#####bbbb#",
    "t.......###bbbb.",
    "..........####..",
  ],
  colors: {
    "#": "var(--color-cyan)",
    t: "var(--color-coral)",
    o: "var(--color-abyss)",
    b: "var(--color-foam)",
  },
};

/** 小魚 9×5 */
export const minnow: Sprite = {
  pattern: [
    "....####.",
    "t..######",
    "tt###o###",
    "t..######",
    "....####.",
  ],
  colors: {
    "#": "var(--color-sun)",
    t: "var(--color-coral)",
    o: "var(--color-abyss)",
  },
};

/** ロゴマークのおさかな。四角くて太い、アイコン向け 12×12 */
export const logoFish: Sprite = {
  pattern: [
    "............",
    "......####..",
    "t...########",
    "tt.#########",
    "ttt####o####",
    "ttt#########",
    "ttt#########",
    "tt.####bbb##",
    "t...###bbb..",
    "......####..",
    "............",
    "............",
  ],
  colors: {
    "#": "var(--color-cyan)",
    t: "var(--color-coral)",
    o: "var(--color-abyss)",
    b: "var(--color-foam)",
  },
};

/** 泡 5×5 */
export const bubble: Sprite = {
  pattern: [
    ".###.",
    "#b..#",
    "#b..#",
    "#...#",
    ".###.",
  ],
  colors: {
    "#": "var(--color-cyan)",
    b: "var(--color-foam)",
  },
};
