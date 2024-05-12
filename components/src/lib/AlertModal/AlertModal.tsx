import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

export interface AlertModalProps extends ModalProps {
  description: string;
  confirmButtonText?: string;
  onConfirm: () => void;
}

export default function AlertModal({
  isOpen,
  size,
  title,
  description,
  confirmButtonText = '확인',
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttonsFlexDirection = 'row',
  onConfirm,
  onClose,
}: AlertModalProps) {
  const confirmButton: ButtonInterface = {
    text: confirmButtonText,
    style: 'primary',
    onClick: onConfirm,
  };

  return (
    <Modal
      isOpen={isOpen}
      size={size}
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
      <p>{description}</p>
    </Modal>
  );
}
