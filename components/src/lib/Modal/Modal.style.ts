import styled from 'styled-components';

import { ModalPositionType, ModalSizeType } from '../types/ModalTypes';
import { COLORS, MODAL_SIZE } from '../constants/styles';

export const ModalPositioner = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ModalBackdrop = styled.div<{
  $opacity: string;
  $zIndex: number;
}>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${(props) => `rgb(0 0 0 / ${props.$opacity})`};
  z-index: ${(props) => props.$zIndex};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div<{
  $position: ModalPositionType;
  $size: ModalSizeType;
  $width?: string;
  $zIndex: number;
}>`
  background: ${COLORS.grey100};
  color: ${COLORS.grey800};
  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: ${(props) => props.$width ?? MODAL_SIZE[props.$size]};
  z-index: ${(props) => props.$zIndex};

  ${(props) => {
    if (props.$position === 'center') {
      return `
        margin: auto;
        border-radius: 10px;
      `;
    }
    if (props.$position === 'bottom') {
      return `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 10px 10px 0 0;
      `;
    }
  }}
`;
