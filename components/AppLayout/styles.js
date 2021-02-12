import css from 'styled-jsx/css';
import { breakpoints, colors, fonts } from '../../styles/theme';
import { addOpacityToColor } from '../../styles/utils';
const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export const globalStyles = css.global`
  html,
  body {
    background-color: #060606;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%232f002f' stroke-width='1.5'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%232a002a'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E");
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
  textarea,
  input {
    font-family: ${fonts.base};
  }
  /* KEYFRAMES */

  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(359deg);
    }
  }

  @keyframes spin3D {
    from {
      transform: rotate3d(0.5, 0.5, 0.5, 360deg);
    }

    to {
      transform: rotate3d(0deg);
    }
  }

  @keyframes configure-clockwise {
    0% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(90deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes configure-xclockwise {
    0% {
      transform: rotate(45deg);
    }

    25% {
      transform: rotate(-45deg);
    }

    50% {
      transform: rotate(-135deg);
    }

    75% {
      transform: rotate(-225deg);
    }

    100% {
      transform: rotate(-315deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }

    to {
      opacity: 0.25;
      transform: scale(0.75);
    }
  }

  /* GRID STYLING */

  .spinner-box {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  /* SPINNING CIRCLE */

  .leo-border-1 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(63, 249, 220, 0.1) 33%,
      rgba(63, 249, 220, 1) 100%
    );
    animation: spin3D 1.8s linear 0s infinite;
  }

  .leo-core-1 {
    width: 100%;
    height: 100%;
    background-color: #37474faa;
    border-radius: 50%;
  }

  .leo-border-2 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(251, 91, 83);
    background: linear-gradient(
      0deg,
      rgba(251, 91, 83, 0.1) 33%,
      rgba(251, 91, 83, 1) 100%
    );
    animation: spin3D 2.2s linear 0s infinite;
  }

  .leo-core-2 {
    width: 100%;
    height: 100%;
    background-color: #1d2630aa;
    border-radius: 50%;
  }

  /* ALTERNATING ORBITS */

  .circle-border {
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(63, 249, 220, 0.1) 33%,
      rgba(63, 249, 220, 1) 100%
    );
    animation: spin 0.8s linear 0s infinite;
  }

  .circle-core {
    width: 100%;
    height: 100%;
    background-color: #1d2630;
    border-radius: 50%;
  }

  /* X-ROTATING BOXES */

  .configure-border-1 {
    width: 115px;
    height: 115px;
    padding: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fb5b53;
    animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
  }

  .configure-border-2 {
    width: 115px;
    height: 115px;
    padding: 3px;
    left: -115px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(63, 249, 220);
    transform: rotate(45deg);
    animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
  }

  .configure-core {
    width: 100%;
    height: 100%;
    background-color: #1d2630;
  }

  /* PULSE BUBBLES */

  .pulse-container {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pulse-bubble {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3ff9dc;
  }

  .pulse-bubble-1 {
    animation: pulse 0.4s ease 0s infinite alternate;
  }

  .pulse-bubble-2 {
    animation: pulse 0.4s ease 0.2s infinite alternate;
  }

  .pulse-bubble-3 {
    animation: pulse 0.4s ease 0.4s infinite alternate;
  }

  /* SOLAR SYSTEM */

  .solar-system {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fafbfc;
    border-radius: 50%;
  }

  .earth-orbit {
    width: 165px;
    height: 165px;
    -webkit-animation: spin 12s linear 0s infinite;
  }

  .venus-orbit {
    width: 120px;
    height: 120px;
    -webkit-animation: spin 7.4s linear 0s infinite;
  }

  .mercury-orbit {
    width: 90px;
    height: 90px;
    -webkit-animation: spin 3s linear 0s infinite;
  }

  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3ff9dc;
  }

  .sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #ffab91;
  }

  .leo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .blue-orbit {
    width: 165px;
    height: 165px;
    border: 1px solid #91daffa5;
    -webkit-animation: spin3D 3s linear 0.2s infinite;
  }

  .green-orbit {
    width: 120px;
    height: 120px;
    border: 1px solid #91ffbfa5;
    -webkit-animation: spin3D 2s linear 0s infinite;
  }

  .red-orbit {
    width: 90px;
    height: 90px;
    border: 1px solid #ffca91a5;
    -webkit-animation: spin3D 1s linear 0s infinite;
  }

  .white-orbit {
    width: 60px;
    height: 60px;
    border: 2px solid #ffffff;
    -webkit-animation: spin3D 10s linear 0s infinite;
  }

  .w1 {
    transform: rotate3D(1, 1, 1, 90deg);
  }

  .w2 {
    transform: rotate3D(1, 2, 0.5, 90deg);
  }

  .w3 {
    transform: rotate3D(0.5, 1, 2, 90deg);
  }

  .three-quarter-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid #fb5b53;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 0.5s linear 0s infinite;
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23101010' stroke-width='2' stroke-opacity='0.34'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    position: relative;
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;
