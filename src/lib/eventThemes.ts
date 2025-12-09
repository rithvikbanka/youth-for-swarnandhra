import { texturePatterns } from './texturePatterns';

export const eventThemes = {
  "youth-changemaker-talks": {
    bannerGradient: "from-[#c73e1d]/90 via-[#8b2e0f]/85 to-[#d97706]/80",
    bannerBackground: "/backgrounds/b1.jpg",
    texture: texturePatterns.dharmavaram,
    showMeta: false, // HIDE schedule chips for special events
  },
  "youth-con": {
    bannerGradient: "from-[#6b3fa5]/90 via-[#4a2870]/85 to-[#c97a2c]/80",
    bannerBackground: "/backgrounds/b2.jpg",
    texture: texturePatterns.ikat,
    showMeta: false, // HIDE schedule chips for special events
  },
  "youth-impact-labs": {
    bannerGradient: "from-[#b84e1a]/90 via-[#7a3410]/85 to-[#d97706]/80",
    bannerBackground: "/backgrounds/b3.jpg",
    texture: texturePatterns.kalamkari,
    showMeta: false, // HIDE schedule chips for special events
  },
  "youth-art-wall": {
    bannerGradient: "from-[#d84a5c]/90 via-[#a23242]/85 to-[#d97706]/80",
    bannerBackground: "/backgrounds/b4.jpg",
    texture: texturePatterns.uppada,
    showMeta: true, // SHOW schedule chips
  },
  "talent-carnival": {
    bannerGradient: "from-[#c85a2c]/90 via-[#8b3f1f]/85 to-[#d97706]/80",
    bannerBackground: "/backgrounds/b1.jpg",
    texture: texturePatterns.gadwal,
    showMeta: true, // SHOW schedule chips
  },
  "yuvasrishti": {
    bannerGradient: "from-[#d4651b]/90 via-[#9a4810]/85 to-[#d97706]/80",
    bannerBackground: "/backgrounds/b2.jpg",
    texture: texturePatterns.venkatagiri,
    showMeta: true, // SHOW schedule chips
  },
  "carnival-parade": {
    bannerGradient: "from-[#d4651b]/90 via-[#a84515]/85 to-[#d97706]/80",
    bannerBackground: "/backgrounds/b3.jpg",
    texture: texturePatterns.mangalagiri,
    showMeta: true, // SHOW schedule chips
  },
  "andhra-yuva-sankalp": {
    bannerGradient: "from-[#fe8c00]/90 via-[#fb5f1f]/85 to-[#f83600]/80",
    bannerBackground: "/backgrounds/b4.jpg",
    texture: texturePatterns.chirala,
    showMeta: false, // HIDE schedule chips
  },
} as const;

export type EventThemeKey = keyof typeof eventThemes;
