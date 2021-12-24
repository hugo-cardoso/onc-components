export type FontSizes = 'small' | 'medium' | 'large';

export type FontColors = 'neutral' | 'light' | 'highlight' | 'dark' | 'primary' | 'secondary';

export type TextProps = {
  size?: FontSizes;
  color?: FontColors;
  text: string;
};