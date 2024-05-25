import { ButtonInterface, ButtonsPositionType } from '../../types/ModalTypes';

import * as Styled from './ModalFooter.style';

interface ModalFooterProps {
  buttons: ButtonInterface[];
  buttonsFlexDirection: ButtonsPositionType;
}

export default function ModalFooter({ buttons, buttonsFlexDirection }: ModalFooterProps) {
  return (
    <Styled.Footer $buttonsFlexDirection={buttonsFlexDirection}>
      {buttons.map((button, index) => {
        return (
          <Styled.FooterButton
            key={index}
            $style={button.style}
            onClick={button.onClick}
            disabled={button.disabled ?? false}
            type="button"
          >
            {button.text}
          </Styled.FooterButton>
        );
      })}
    </Styled.Footer>
  );
}
