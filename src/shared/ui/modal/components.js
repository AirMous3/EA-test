import styled from 'styled-components';

import cross from '@/shared/assets/cross.svg';

export const Mask = styled.div`
  height: 100%;
  background: rgba(22, 44, 78, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;

  ${({ $visible }) =>
    $visible ? 'opacity: 1;  ' : 'opacity: 0; pointer-events: none'};
`;

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
  color: white;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 370px;
  background: ${({ theme }) => theme.colors.background.white};
  border: 1px solid rgba(19, 89, 120, 0.07);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cross = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-right: 16px;
  margin-top: 20px;
  background-image: url(${cross});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  position: relative;
  z-index: 10;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text.darkBlue};
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.span`
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  max-width: 280px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const CloseButton = styled.button`
  border: none;
  padding: 0;
  width: 200px;
  height: 60px;
  background: #1d4169;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: 40px;
  cursor: pointer;
`;
