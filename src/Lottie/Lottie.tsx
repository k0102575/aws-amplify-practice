/** @jsxImportSource @emotion/react */
import { LottieOptions, useLottie } from 'lottie-react';
import { memo, useEffect } from 'react';
import { SerializedStyles } from '@emotion/react';
import esim from './lotties/esim.json';
import plane from './lotties/plane.json';
import loading_kakaopay from './lotties/loading_kakaopay.json';
import whirl from './lotties/whirl_long.json';
import pindaro_title from './lotties/pindaro_title.json';
import transfer_key_visual from './lotties/transfer_key_visual.json';
import transfer_arrival from './lotties/transfer_arrival.json';
import transfer_reservation from './lotties/transfer_reservation.json';

interface LottieProps {
  name: string;
  width: number | string;
  height?: number;
  speed?: number;
  style?: SerializedStyles;
}

type animationDatasType = {
  [index: string]: unknown;
  esim: unknown;
  plane: unknown;
  loading_kakaopay: unknown;
  whirl: unknown;
  pindaro_title: unknown;
  transfer_key_visual: unknown;
  transfer_arrival: unknown;
  transfer_reservation: unknown;
};

const Lottie = ({ name, width, height, speed, style }: LottieProps) => {
  const animationDatas: animationDatasType = {
    esim,
    plane,
    loading_kakaopay,
    whirl,
    pindaro_title,
    transfer_key_visual,
    transfer_arrival,
    transfer_reservation,
  };

  // lottie Options
  const options: LottieOptions = {
    animationData: animationDatas[name],
    loop: true,
  };

  // hooks
  const { View, setSpeed } = useLottie(options, { width, height });

  // useEffect
  useEffect(() => {
    if (speed) {
      setSpeed(speed);
    }
  }, [speed, setSpeed]);

  return <div css={[style]}>{View}</div>;
};

export default memo(Lottie);
