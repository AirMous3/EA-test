import * as S from './components';

export const Timer = () => {
  return (
    <S.Container>
      <S.Item>
        <S.Time>92</S.Time>
        <S.TimeUnderline>days</S.TimeUnderline>
      </S.Item>
      :
      <S.Item>
        <S.Time>11</S.Time>
        <S.TimeUnderline>hours</S.TimeUnderline>
      </S.Item>
      :
      <S.Item>
        <S.Time>41</S.Time>
        <S.TimeUnderline>minutes</S.TimeUnderline>
      </S.Item>
      :
      <S.Item>
        <S.Time>48</S.Time>
        <S.TimeUnderline>seconds</S.TimeUnderline>
      </S.Item>
    </S.Container>
  );
};
