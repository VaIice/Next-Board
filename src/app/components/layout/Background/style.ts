import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

export const float = keyframes`
  0% {
    transform: translate(0px, 0px) rotate(0deg) scale(1);
  }
  10% {
    transform: translate(5px, -20px) rotate(2deg) scale(1.05);
  }
  20% {
    transform: translate(-8px, -10px) rotate(-2deg) scale(0.98);
  }
  30% {
    transform: translate(10px, -30px) rotate(1deg) scale(1.02);
  }
  40% {
    transform: translate(-4px, -15px) rotate(-3deg) scale(1);
  }
  50% {
    transform: translate(7px, -25px) rotate(2deg) scale(1.03);
  }
  60% {
    transform: translate(-6px, -5px) rotate(0deg) scale(0.97);
  }
  70% {
    transform: translate(4px, -35px) rotate(-1deg) scale(1.02);
  }
  80% {
    transform: translate(-3px, -20px) rotate(3deg) scale(1);
  }
  90% {
    transform: translate(6px, -10px) rotate(-2deg) scale(0.99);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg) scale(1);
  }
`;

export const Background = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #001c3c 0%, #004a7e 100%);
  overflow: hidden;
`;

export const Dot = styled.div<{
  top: string;
  left: string;
  size: string;
  duration: string;
}>`
  position: absolute;
  background-color: rgb(255, 250, 182);
  border-radius: 50%;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  opacity: 0.5;
  animation:
    ${fadeIn} 2s ease-out,
    ${float} ${({ duration }) => duration} ease-in-out infinite;
  filter: drop-shadow(0 0 2px rgb(255 250 182 / 0.6));
`;

export const Container = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
