import { useState } from 'react';

import * as S from './components';
import { eventsConfig } from './config';

export const EventList = () => {
  const [isActive, setActive] = useState(1);
  return (
    <S.Container id="allEvents">
      <S.Title>all events</S.Title>

      <S.EventsWrapper>
        <S.Accordion>
          {eventsConfig.map(({ img, title, date, id }) => {
            const active = isActive === id;
            return (
              <S.AccordionItem isActive={active} img={img} key={id}>
                <S.AccordionTitleWrapper
                  isActive={active}
                  onClick={() => setActive(id)}
                >
                  <S.AccordionTitle>{title}</S.AccordionTitle>
                  <S.AccordionNumber>0{id}</S.AccordionNumber>
                </S.AccordionTitleWrapper>

                {active && (
                  <S.AccordionInfoWrapper>
                    <S.AccordionMInfoWrapper>
                      <S.AccordionInfoNumber>0{id}</S.AccordionInfoNumber>
                      <S.AccordionInfoTitle>{title}</S.AccordionInfoTitle>
                      <S.AccordionInfoDate>{date}</S.AccordionInfoDate>

                      <S.AccordionButton>
                        {/*  Не знаю куда должна перенаправлять кнопка, по тз не сказано, поэтому пусть будет так)*/}
                        <a
                          href="https://egorovagency.by/about#about-team"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          More information
                        </a>
                      </S.AccordionButton>
                    </S.AccordionMInfoWrapper>
                  </S.AccordionInfoWrapper>
                )}
              </S.AccordionItem>
            );
          })}
        </S.Accordion>
      </S.EventsWrapper>
    </S.Container>
  );
};