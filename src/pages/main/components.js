import styled, { keyframes } from 'styled-components';

import arrowIcon from '@/shared/assets/arrow-icon.svg';
import backLeftCorner from '@/shared/assets/back-left-corner.png';
import backRightCorner from '@/shared/assets/back-right-corner.png';
import logo from '@/shared/assets/logo.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const leftCornerFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-100px, -100px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const rightCornerFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, -100px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const LeftCornerImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${backLeftCorner});
  background-position: left 0 top 0;
  background-repeat: no-repeat;
  width: 565px;
  height: 714px;
  animation: ${leftCornerFadeIn} 1s;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
  z-index: -1;

  @media (max-width: 1200px) {
    background-size: 250px;
    background-position: left -8px top -15px;
  }

  @media (max-width: 560px) {
    background-size: 188px 165px;
    background-position: left -14px top -21px;
  }
`;

export const RightCornerImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${backRightCorner});
  background-position: right 0 top 0;
  background-repeat: no-repeat;
  height: 714px;
  width: 864px;
  animation: ${rightCornerFadeIn} 1s;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
  z-index: -1;

  @media (max-width: 1200px) {
    background-size: 360px 310px;
    background-position: right -65px top 0px;
  }

  @media (max-width: 560px) {
    background-size: 267px 252px;
    background-position: right -61px top -6px;
  }
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 190px;
  height: 60px;
  margin-top: 60px;
  margin-bottom: 74px;
  animation: ${fadeIn} 1s;
  cursor: pointer;

  @media (max-width: 480px) {
    margin-bottom: 55px;
    background-size: 132px;
    background-position: bottom;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  line-height: 104px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  animation: ${fadeIn} 1s;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.text.darkBlue};
  opacity: 0.39;
  text-transform: uppercase;

  @media (max-width: 860px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    line-height: 104%;
    margin-top: 12px;
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.8);
  max-width: 425px;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 286px;
  }
`;

export const EventInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
  animation-delay: 0.8s;
  animation-fill-mode: backwards;
`;

export const EventInfo = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 72px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 40px;
  }
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
  margin-bottom: 82px;

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
  position: relative;
  height: 192px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    height: 160px;
  }
  @media (max-width: 480px) {
    height: 141px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  max-height: 59px;
  min-width: 440px;
  max-width: 440px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background.white};
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  padding: 16px 8px 16px 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-width: 360px;
    max-width: 360px;
    max-height: 41px;
  }

  @media (max-width: 480px) {
    min-width: 280px;
    max-width: 280px;
  }
`;

export const GetStartedInput = styled.input`
  width: 100%;
  height: 40px;
  padding-right: 20px;

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    &::placeholder {
      font-size: 14px;
    }
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    display: inline-block;
    content: '';
    height: 20px;
    width: 20px;
    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 768px) {
    height: 33px;
    width: 33px;
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: -30px;
  color: red;
`;

export const OtherEvents = styled.div`
  position: absolute;
  right: 145px;
  bottom: 40%;
  font-weight: 400;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1200px) {
    position: static;
    margin-top: 15px;
    font-size: 16px;
  }

  &:after {
    display: inline-block;
    content: '';
    height: 20px;
    width: 20px;
    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    margin-left: 10px;
    transform: rotate(90deg);
  }
`;
