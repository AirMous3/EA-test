import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.text.darkBlue};
  opacity: 0.39;
  text-transform: uppercase;
  margin-top: 110px;
  margin-bottom: 40px;
`;

export const EventsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 28px;
  padding-right: 28px;
`;

export const Accordion = styled.ul`
  display: flex;
  overflow: hidden;
`;

export const AccordionItem = styled.li`
  position: relative;
  width: ${({ isActive }) => (isActive ? '995px' : '85px')};
  display: flex;
  height: 682px;
  transition: width 0.9s ease;
  background: ${({ img }) => `url(${img})`} no-repeat center;
  margin-right: 4px;
  overflow: hidden;
`;

export const AccordionTitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  cursor: pointer;
  padding: 15px 15px 50px;
  background: ${({ isActive }) =>
    isActive
      ? '#162c4e'
      : 'linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%);'};
  display: flex;
  justify-content: center;
  height: 100%;
  width: 85px;
  box-sizing: border-box;
  transition: background 0.4s ease-out;
`;

export const AccordionTitle = styled.span`
  position: absolute;
  transform: rotate(270deg);
  color: #fff;
  letter-spacing: 0.1em;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  bottom: 52%;
  width: max-content;
`;

export const AccordionNumber = styled.div`
  display: flex;
  align-items: end;
  font-weight: 500;
  font-size: 40px;
  color: white;

  @media (max-width: 1450px) {
    font-size: 32px;
  }
`;

export const AccordionInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 37%;
  height: 100%;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(20px);
  text-align: start;
  padding-left: 42px;
`;

export const AccordionInfoNumber = styled.div`
  position: absolute;
  top: -30px;
  left: -105px;
  font-size: 380px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.04);
`;

export const AccordionInfoTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: white;
`;

export const AccordionInfoDate = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 12px;
  margin-bottom: 25px;
`;

export const AccordionButton = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.03em;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-right: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  border-left: 7px solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  width: 256px;
  height: 62px;
  background: transparent;
  margin-bottom: 50px;
  cursor: pointer;
`;
