import styled from 'styled-components';

import arrowIcon from '@/shared/assets/arrow-icon.svg';
import backLeftCorner from '@/shared/assets/back-left-corner.png';
import backRightCorner from '@/shared/assets/back-right-corner.png';
import logo from '@/shared/assets/logo.png';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${backLeftCorner}), url(${backRightCorner});
  background-position: left 0 top 0, right 0 top 0;
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 190px;
  height: 60px;
  margin-top: 60px;
  margin-bottom: 74px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.text.darkBlue};
  opacity: 0.39;
  text-transform: uppercase;
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.8);
  max-width: 425px;
`;

export const EventInfo = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 72px;
`;

export const EventButton = styled.button`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.white};
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background.navyBlue};
  border-radius: 40px;
  box-sizing: border-box;
  width: 240px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 76px;

  &:after {
    display: inline-block;
    content: '';
    background-image: url(${arrowIcon});
    width: 20px;
    height: 20px;
    margin-left: 35px;
  }
`;

export const GetStarted = styled.div`
  position: fixed;
  bottom: 0;
  height: 192px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  max-height: 59px;
  min-width: 440px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background.white};
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  padding-left: 27px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 8px;
  box-sizing: border-box;
`;

export const GetStartedInput = styled.input`
  width: 100%;
  height: 40px;
  padding-right: 20px;

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
  }
`;

export const ArrowInputButton = styled.button`
  height: 43px;
  width: 43px;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background.red};
  border-radius: 50%;
  margin-left: auto;

  &:after {
    display: inline-block;
    content: '';
    height: 20px;
    width: 20px;
    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
  }
`;
