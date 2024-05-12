import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

export interface ConfirmModalProps extends ModalProps {
  description: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ConfirmModal({
  isOpen,
  size,
  title,
  description,
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttonsFlexDirection = 'row',
  onConfirm,
  onCancel,
  onClose,
}: ConfirmModalProps) {
  const confirmButton: ButtonInterface = {
    text: confirmButtonText,
    style: 'primary',
    onClick: onConfirm,
  };

  const cancelButton: ButtonInterface = {
    text: cancelButtonText,
    style: 'secondary',
    onClick: onCancel,
  };

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      title={title}
      onClose={onClose}
      buttons={[confirmButton, cancelButton]}
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
