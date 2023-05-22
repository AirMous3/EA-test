import { useContext, useState } from 'react';
import { Link } from 'react-scroll';

import { EventList } from '@/entities';
import { isEmailValid } from '@/features';
import { ModalContext } from '@/shared';
import { Timer } from '@/widgets';

import * as S from './components';

export const Main = () => {
  const { setVisible } = useContext(ModalContext);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState(false);

  const handleChangeInputText = (e) => {
    setInputText(e.currentTarget.value);
    setError(false);
  };

  const handleSendEmail = async () => {
    if (isEmailValid(inputText)) {
      /*Не совсем понятно условие "отправку данных с помощью ajax.", куда отправлять эти данные, поэтому сделал
       * промисификацию(имитацию запроса на сервер и ожидания ответа)*/
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      setVisible(true);
      setInputText('');
    } else {
      setError(true);
    }
  };

  const handleRedirectToMain = () => {
    window.location.href = '/EA-test';
  };

  return (
    <S.Container>
      <S.LeftCornerImage />
      <S.RightCornerImage />
      <S.Logo onClick={handleRedirectToMain} />

      <S.TitleWrapper>
        <S.Title>Under Construction</S.Title>
        <S.Subtitle>
          We're making lots of improvements and will be back soon
        </S.Subtitle>
      </S.TitleWrapper>

      <Timer />

      <S.EventInfoWrapper>
        <S.EventInfo>Check our event page when you wait:</S.EventInfo>
        <S.EventButton>
          <a
            href="https://leadadvisors.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to the event
          </a>
        </S.EventButton>
      </S.EventInfoWrapper>

      <S.GetStarted>
        <S.InputWrapper>
          <S.GetStartedInput
            type="text"
            placeholder="Enter your Email and get notified"
            value={inputText}
            onChange={(e) => handleChangeInputText(e)}
          />

          <S.ArrowInputButton onClick={handleSendEmail} />
          {error && <S.Error>Woops, check your email</S.Error>}
        </S.InputWrapper>

        <Link to="allEvents" smooth={true} duration={600}>
          ><S.OtherEvents>Other Events</S.OtherEvents>
        </Link>
      </S.GetStarted>

      <EventList />
    </S.Container>
  );
};
