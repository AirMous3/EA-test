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
    </S.Container>
  );
};
