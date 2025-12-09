/**
 * CSS patterns inspired by traditional Andhra Pradesh textile weaves
 * Each pattern is unique and represents different AP textile traditions
 */

export const texturePatterns = {
  // Dharmavaram: Green & gold silk with paisley borders (Image 1)
  dharmavaram: `
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(184, 134, 11, 0.12) 3px,
      rgba(184, 134, 11, 0.12) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 100, 0, 0.08) 3px,
      rgba(0, 100, 0, 0.08) 6px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 12px,
      rgba(184, 134, 11, 0.06) 12px,
      rgba(184, 134, 11, 0.06) 14px
    )
  `,

  // Kalamkari: Floral vine patterns with fish motifs (Image 2)
  kalamkari: `
    radial-gradient(
      circle at 25% 25%,
      rgba(139, 69, 19, 0.08) 0%,
      transparent 25%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(184, 134, 11, 0.06) 0%,
      transparent 20%
    ),
    repeating-linear-gradient(
      60deg,
      transparent,
      transparent 4px,
      rgba(139, 90, 43, 0.05) 4px,
      rgba(139, 90, 43, 0.05) 8px
    ),
    repeating-linear-gradient(
      -60deg,
      transparent,
      transparent 4px,
      rgba(160, 82, 45, 0.04) 4px,
      rgba(160, 82, 45, 0.04) 8px
    )
  `,

  // Mangalagiri: Red & green with silver zari borders (Image 3)
  mangalagiri: `
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 8px,
      rgba(192, 192, 192, 0.08) 8px,
      rgba(192, 192, 192, 0.08) 10px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20px,
      rgba(192, 192, 192, 0.06) 20px,
      rgba(192, 192, 192, 0.06) 22px
    ),
    linear-gradient(
      180deg,
      rgba(139, 0, 0, 0.04) 0%,
      transparent 50%,
      rgba(0, 100, 0, 0.04) 100%
    )
  `,

  // Uppada: Pink floral with delicate vine patterns (Image 4)
  uppada: `
    radial-gradient(
      circle at 50% 50%,
      rgba(219, 112, 147, 0.06) 0%,
      transparent 30%
    ),
    repeating-linear-gradient(
      30deg,
      transparent,
      transparent 2px,
      rgba(199, 21, 133, 0.04) 2px,
      rgba(199, 21, 133, 0.04) 4px
    ),
    repeating-linear-gradient(
      150deg,
      transparent,
      transparent 2px,
      rgba(139, 90, 43, 0.03) 2px,
      rgba(139, 90, 43, 0.03) 4px
    )
  `,

  // Venkatagiri: Fine cotton with gold zari work
  venkatagiri: `
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 4px,
      rgba(218, 165, 32, 0.08) 4px,
      rgba(218, 165, 32, 0.08) 6px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 6px,
      rgba(218, 165, 32, 0.06) 6px,
      rgba(218, 165, 32, 0.06) 8px
    ),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 1px,
      rgba(255, 215, 0, 0.03) 1px,
      rgba(255, 215, 0, 0.03) 2px
    )
  `,

  // Pochampally Ikat: Geometric resist-dye patterns
  ikat: `
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(75, 0, 130, 0.07) 3px,
      rgba(75, 0, 130, 0.07) 6px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 4px,
      rgba(128, 0, 128, 0.05) 4px,
      rgba(128, 0, 128, 0.05) 8px
    ),
    radial-gradient(
      ellipse at 30% 70%,
      rgba(148, 0, 211, 0.04) 0%,
      transparent 40%
    )
  `,

  // Gadwal: Bold borders with contrast colors
  gadwal: `
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 10px,
      rgba(255, 140, 0, 0.08) 10px,
      rgba(255, 140, 0, 0.08) 12px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 15px,
      rgba(139, 69, 19, 0.06) 15px,
      rgba(139, 69, 19, 0.06) 17px
    ),
    linear-gradient(
      45deg,
      rgba(255, 165, 0, 0.03) 0%,
      transparent 50%,
      rgba(139, 69, 19, 0.03) 100%
    )
  `,

  // Chirala: Handloom cotton with earthy tones
  chirala: `
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 5px,
      rgba(210, 105, 30, 0.07) 5px,
      rgba(210, 105, 30, 0.07) 7px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 8px,
      rgba(139, 90, 43, 0.05) 8px,
      rgba(139, 90, 43, 0.05) 10px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(160, 82, 45, 0.04) 3px,
      rgba(160, 82, 45, 0.04) 5px
    )
  `,
} as const;

export type TextureType = keyof typeof texturePatterns;
