import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './components';

const calculateTimeLeft = () => {
  const countdownTimeLeft = new Date('May 31, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = countdownTimeLeft - now;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10);

    return () => clearTimeout(timer);
  });

  return (
    <S.Container>
      <S.Item>
        <S.Time>{timeLeft.days || "0"}</S.Time>
        <S.TimeUnderline>{isTabletOrMobile ? 'DD' : 'Days'}</S.TimeUnderline>
      </S.Item>
      :
      <S.Item>
        <S.Time>{timeLeft.hours || "0"}</S.Time>
        <S.TimeUnderline>{isTabletOrMobile ? 'HH' : 'Hours'}</S.TimeUnderline>
      </S.Item>
      :
      <S.Item>
        <S.Time>{timeLeft.minutes || "0"}</S.Time>
        <S.TimeUnderline>{isTabletOrMobile ? 'MM' : 'Minutes'}</S.TimeUnderline>
      </S.Item>
      :
      <S.Item>
        <S.Time>{timeLeft.seconds || "0"}</S.Time>
        <S.TimeUnderline>{isTabletOrMobile ? 'SS' : 'Seconds'}</S.TimeUnderline>
      </S.Item>
    </S.Container>
  );
};
