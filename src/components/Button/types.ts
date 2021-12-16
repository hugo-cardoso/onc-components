export type ButtonColorTypes = 'primary' | 'secondary';

export type ButtonSizeTypes = 'small' | 'medium' | 'large';

export type ButtonProps = {
  text: string;
  color?: ButtonColorTypes;
  size?: ButtonSizeTypes;
  disabled?: boolean;
  onClick?: () => void;
};