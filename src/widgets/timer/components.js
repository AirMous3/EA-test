import styled from 'styled-components';

import mobileUnderlineImage from '@/shared/assets/mobileUnderlineImage.png';
import underlineImage from '@/shared/assets/timer-uderline.png';

export const Container = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.text.darkBlue};
  text-align: center;

  @media (max-width: 768px) {
    align-items: baseline;
    font-size: 36px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const Item = styled.div``;
export const Time = styled.div`
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
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

  @media (max-width: 768px) {
    background-image: url(${mobileUnderlineImage});
    background-size: contain;
    background-position: center;
    width: 64px;
    font-size: 12px;
    margin-top: -15px;
  }
`;
