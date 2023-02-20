// const FONT_PRIMARY = 'Barlow, sans-serif';
const FONT_SECONDARY = 'Barlow, sans-serif';
const FONT_HEADING = 'Bebas Neue, sans-serif';
function pxToRem(value) {
  return `${value / 16}rem`;
}

export const typography = {
  h1: {
    fontFamily: FONT_HEADING,
    fontWeight: 400,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
  },
  h2: {
    fontFamily: FONT_HEADING,
    fontWeight: 400,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
  },
  h4: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  h5: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  h6: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 28 / 16,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 26 / 14,
    fontSize: pxToRem(14),
  },
  subtitle3: {
    fontWeight: 600,
    lineHeight: 24 / 13,
    fontSize: pxToRem(13),
  },
  body1: {
    lineHeight: 28 / 20,
    fontSize: pxToRem(20),
  },
  body2: {
    lineHeight: 26 / 16,
    fontSize: pxToRem(16),
  },
  body3: {
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 20 / 13,
    fontSize: pxToRem(13),
  },
  overline: {
    fontWeight: 600,
    lineHeight: 20 / 12,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};