import styled from 'styled-components';

import underlineImage from '@/shared/assets/timer-uderline.png';

export const Container = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.text.darkBlue};
  text-align: center;
`;

export const Item = styled.div``;
export const Time = styled.div``;
export const TimeUnderline = styled.div`
  font-weight: 400;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.white};
  background-image: url(${underlineImage});
  background-repeat: no-repeat;
  width: 132px;
  height: 54px;
  margin-top: -20px;
`;
