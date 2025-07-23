'use client';

import {
  Background,
  Container,
  Dot,
} from '@/app/components/layout/Background/style';
import { generateDots } from '@/utils/utils';
import React, { useState, useEffect } from 'react';

type DotProps = {
  top: string;
  left: string;
  size: string;
  duration: string;
};

export default function BackgroundWithDots({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [dots, setDots] = useState<Array<DotProps>>([]);

  useEffect(() => {
    setDots(generateDots(40));
  }, []);

  return (
    <Background>
      {dots.map((dot, i) => (
        <Dot key={i} {...dot} />
      ))}
      <Container>{children}</Container>
    </Background>
  );
}
