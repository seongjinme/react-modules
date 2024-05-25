import styled from 'styled-components';

import { COLORS } from '../../constants/styles';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  display: inline-block;
  width: 14px;
  height: 100%;
  background: ${COLORS.grey100};
  border: 0;
  padding: 0;
  cursor: pointer;
`;
