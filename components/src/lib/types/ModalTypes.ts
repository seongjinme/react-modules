export type ModalType = 'default' | 'alert' | 'confirm' | 'prompt';
export type ModalSizeType = 'small' | 'medium' | 'large';
export type ModalPositionType = 'center' | 'bottom';
export type ButtonStyleType = 'primary' | 'secondary' | 'transparent';
export type ButtonsPositionType = 'row' | 'row-reverse' | 'column';

export interface ButtonInterface {
  text: string;
  style: ButtonStyleType;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
