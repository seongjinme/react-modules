import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

export interface AlertModalProps extends ModalProps {
  confirmButtonText?: string;
  onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AlertModal({
  isOpen,
  size,
  width,
  title,
  children,
  confirmButtonText = '확인',
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttonsFlexDirection = 'row',
  onConfirm,
  onClose,
}: React.PropsWithChildren<AlertModalProps>) {
  const confirmButton: ButtonInterface = {
    text: confirmButtonText,
    style: 'primary',
    onClick: onConfirm,
  };

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      width={width}
      title={title}
      onClose={onClose}
      buttons={[confirmButton]}
      buttonsFlexDirection={buttonsFlexDirection}
      position={position}
      hasCloseButton={hasCloseButton}
      isClosableOnClickBackdrop={isClosableOnClickBackdrop}
      zIndex={zIndex}
      backdropOpacity={backdropOpacity}
    >
      {children}
    </Modal>
  );
}
