import { Timer } from '@/widgets';

import * as S from './components';

export const Main = () => {
  return (
    <S.Container>
      <S.Logo />

      <S.TitleWrapper>
        <S.Title>Under Construction</S.Title>
        <S.Subtitle>
          We're making lots of improvements and will be back soon
        </S.Subtitle>
      </S.TitleWrapper>

      <Timer />

      <S.EventInfo>Check our event page when you wait:</S.EventInfo>
      <S.EventButton>Go to the event</S.EventButton>

      <S.GetStarted>
        <S.InputWrapper>
          <S.GetStartedInput
            type="text"
            placeholder="Enter your Email and get notified"
          />

          <S.ArrowInputButton />
        </S.InputWrapper>
      </S.GetStarted>
    </S.Container>
  );
};
