import { useState } from 'react';

import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

import * as Styled from './PromptModal.style';

export interface PromptModalProps extends ModalProps {
  inputField: {
    name: string;
    label?: string;
    placeholder?: string;
    initialValue?: string;
    errorMessage?: string;
  };
  submitButtonText?: string;
  cancelButtonText?: string;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void;
  onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PromptModal({
  isOpen,
  size,
  width,
  title,
  inputField,
  submitButtonText = '확인',
  cancelButtonText = '취소',
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttonsFlexDirection = 'row',
  onSubmit,
  onCancel,
  onClose,
}: PromptModalProps) {
  const [inputValue, setInputValue] = useState(inputField.initialValue || '');

  const handleClickSubmitButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSubmit(event, inputValue);
  };

  const submitButton: ButtonInterface = {
    text: submitButtonText,
    style: 'primary',
    onClick: handleClickSubmitButton,
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
      width={width}
      title={title}
      onClose={onClose}
      buttons={[submitButton, cancelButton]}
      buttonsFlexDirection={buttonsFlexDirection}
      position={position}
      hasCloseButton={hasCloseButton}
      isClosableOnClickBackdrop={isClosableOnClickBackdrop}
      zIndex={zIndex}
      backdropOpacity={backdropOpacity}
    >
      {inputField.label && (
        <Styled.Label htmlFor={inputField.name}>{inputField.label}</Styled.Label>
      )}
      <Styled.Input
        name={inputField.name}
        defaultValue={inputField.initialValue}
        placeholder={inputField.placeholder}
        $isError={!!inputField.errorMessage}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
      />
      {inputField.errorMessage && (
        <Styled.ErrorMessage>{inputField.errorMessage}</Styled.ErrorMessage>
      )}
    </Modal>
  );
}
