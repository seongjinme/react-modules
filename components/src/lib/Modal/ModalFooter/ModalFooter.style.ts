import styled from 'styled-components';

import { ButtonInterface, ButtonsPositionType } from '../../types/ModalTypes';
import { COLORS } from '../../constants/styles';

export const Footer = styled.footer<{
  $buttonsFlexDirection: ButtonsPositionType;
}>`
  display: flex;
  gap: 12px;
  flex-direction: ${(props) => props.$buttonsFlexDirection};
  justify-content: ${(props) => (props.$buttonsFlexDirection === 'column' ? 'inherit' : 'right')};

  & > button {
    height: ${(props) => (props.$buttonsFlexDirection === 'column' ? '44px' : '36px')};
    padding: ${(props) => (props.$buttonsFlexDirection === 'column' ? 'inherit' : '0.3em 1.2em;')};
  }
`;

export const FooterButton = styled.button<{
  $style: ButtonInterface['style'];
}>`
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  transition: 0.3s ease;
  cursor: pointer;

  ${(props) => {
    switch (props.$style) {
      case 'primary':
        return `background: ${COLORS.grey700}; color: ${COLORS.grey100};`;
      case 'secondary':
        return `background: ${COLORS.grey100}; border: 1px solid ${COLORS.grey300}; border-radius: 5px; color: ${COLORS.grey500};`;
      case 'transparent':
        return `background: ${COLORS.grey100}; color: ${COLORS.grey400};`;
      default:
        return `background: ${COLORS.grey700}; color: ${COLORS.grey100};`;
    }
  }};

  &:hover {
    ${(props) => {
      switch (props.$style) {
        case 'primary':
          return `background: ${COLORS.grey600};`;
        case 'secondary':
          return `background: ${COLORS.grey200};`;
        case 'transparent':
          return `background: ${COLORS.grey200};`;
        default:
          return `background: ${COLORS.grey600};`;
      }
    }};
  }

  &:disabled {
    ${(props) => {
      switch (props.$style) {
        case 'primary':
          return `background: ${COLORS.grey300}; color: ${COLORS.grey100};`;
        case 'secondary':
          return `background: ${COLORS.grey100}; border: 1px solid ${COLORS.grey300}; border-radius: 5px; color: ${COLORS.grey300};`;
        case 'transparent':
          return `background: ${COLORS.grey200}; color: ${COLORS.grey300};`;
        default:
          return `background: ${COLORS.grey300}; color: ${COLORS.grey100};`;
      }
    }};
    cursor: default;
  }
`;
