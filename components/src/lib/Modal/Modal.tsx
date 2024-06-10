import React, { useRef, useEffect } from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import ModalContent from './ModalContent/ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';

import type {
  ModalSizeType,
  ModalPositionType,
  ButtonInterface,
  ButtonsPositionType,
} from '../types/ModalTypes';

import * as Styled from './Modal.style';

export interface ModalProps {
  isOpen: boolean;
  title: string;
  size?: ModalSizeType;
  width?: string;
  position?: ModalPositionType;
  hasCloseButton?: boolean;
  isClosableOnClickBackdrop?: boolean;
  zIndex?: { backdrop: number; modal: number };
  backdropOpacity?: string;
  buttons?: ButtonInterface[];
  buttonsFlexDirection?: ButtonsPositionType;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  title,
  children,
  size = 'medium',
  width,
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttons,
  buttonsFlexDirection = 'column',
  onClose,
}: React.PropsWithChildren<ModalProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = () => {
    if (isClosableOnClickBackdrop) {
      onClose();
    }
  };

  return (
    <Styled.ModalPositioner $zIndex={zIndex.backdrop}>
      <Styled.ModalBackdrop
        $zIndex={zIndex.backdrop}
        $opacity={backdropOpacity}
        onClick={handleClickBackdrop}
      >
        <Styled.ModalWrapper
          ref={modalRef}
          $position={position}
          $size={size}
          $width={width}
          $zIndex={zIndex.modal}
          onKeyDown={handleKeyDown}
          onClick={(event) => event.stopPropagation()}
          tabIndex={0}
        >
          <ModalHeader
            title={title}
            hasCloseButton={hasCloseButton}
            onClose={onClose}
          />

          {children && <ModalContent>{children}</ModalContent>}

          {buttons && (
            <ModalFooter
              buttons={buttons}
              buttonsFlexDirection={buttonsFlexDirection}
            />
          )}
        </Styled.ModalWrapper>
      </Styled.ModalBackdrop>
    </Styled.ModalPositioner>
  );
}
