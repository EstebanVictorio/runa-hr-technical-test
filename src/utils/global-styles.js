import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: RSC;
  src: url("/NanumGothic-Regular.ttf") format("truetype");
}

:root {
  --dark: #20232a;
  --primary-accent: skyblue;
  --secondary-accent: whitesmoke;
}


html, body {
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-family: RSC;
  box-sizing: border-box;
  color: var(--primary-accent);
  background-color: var(--dark);
}


#root {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.main-content {
  width: 100vw;
}

.welcome-title, .call-to-action {
  text-align: center;
}

.svg-icon {
  width: 48px;
  height: 48px;
}


.svg-icon path {
  width: 100%;
  height: 100%;
  fill: whitesmoke;
}

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


/* react-loader-spinner styles */
.react-spinner-loader-swing div {
  border-radius: 50%;
  float: left;
  height: 1em;
  width: 1em;
}
.react-spinner-loader-swing div:nth-of-type(1) {
  background: -webkit-linear-gradient(left, #385c78 0%, #325774 100%);
  background: linear-gradient(to right, #385c78 0%, #325774 100%);
}
.react-spinner-loader-swing div:nth-of-type(2) {
  background: -webkit-linear-gradient(left, #325774 0%, #47536a 100%);
  background: linear-gradient(to right, #325774 0%, #47536a 100%);
}
.react-spinner-loader-swing div:nth-of-type(3) {
  background: -webkit-linear-gradient(left, #4a5369 0%, #6b4d59 100%);
  background: linear-gradient(to right, #4a5369 0%, #6b4d59 100%);
}
.react-spinner-loader-swing div:nth-of-type(4) {
  background: -webkit-linear-gradient(left, #744c55 0%, #954646 100%);
  background: linear-gradient(to right, #744c55 0%, #954646 100%);
}
.react-spinner-loader-swing div:nth-of-type(5) {
  background: -webkit-linear-gradient(left, #9c4543 0%, #bb4034 100%);
  background: linear-gradient(to right, #9c4543 0%, #bb4034 100%);
}
.react-spinner-loader-swing div:nth-of-type(6) {
  background: -webkit-linear-gradient(left, #c33f31 0%, #d83b27 100%);
  background: linear-gradient(to right, #c33f31 0%, #d83b27 100%);
}
.react-spinner-loader-swing div:nth-of-type(7) {
  background: -webkit-linear-gradient(left, #da3b26 0%, #db412c 100%);
  background: linear-gradient(to right, #da3b26 0%, #db412c 100%);
}
.react-spinner-loader-shadow {
  clear: left;
  padding-top: 1.5em;
}
.react-spinner-loader-shadow div {
  -webkit-filter: blur(1px);
  filter: blur(1px);
  float: left;
  width: 1em;
  height: .25em;
  border-radius: 50%;
  background: #e3dbd2;
}
.react-spinner-loader-shadow .react-spinner-loader-shadow-l {
  background: #d5d8d6;
}
.react-spinner-loader-shadow .react-spinner-loader-shadow-r {
  background: #eed3ca;
}
@-webkit-keyframes ball-l {
  0%, 50% {
    -webkit-transform: rotate(0) translateX(0);
    transform: rotate(0) translateX(0);
  }
  100% {
    -webkit-transform: rotate(50deg) translateX(-2.5em);
    transform: rotate(50deg) translateX(-2.5em);
  }
}
@keyframes ball-l {
  0%, 50% {
    -webkit-transform: rotate(0) translate(0);
    transform: rotate(0) translateX(0);
  }
  100% {
    -webkit-transform: rotate(50deg) translateX(-2.5em);
    transform: rotate(50deg) translateX(-2.5em);
  }
}
@-webkit-keyframes ball-r {
  0% {
    -webkit-transform: rotate(-50deg) translateX(2.5em);
    transform: rotate(-50deg) translateX(2.5em);
  }
  50%,
  100% {
    -webkit-transform: rotate(0) translateX(0);
    transform: rotate(0) translateX(0);
  }
}
@keyframes ball-r {
  0% {
    -webkit-transform: rotate(-50deg) translateX(2.5em);
    transform: rotate(-50deg) translateX(2.5em);
  }
  50%,
  100% {
    -webkit-transform: rotate(0) translateX(0);
    transform: rotate(0) translateX(0)
  }
}
@-webkit-keyframes shadow-l-n {
  0%, 50% {
    opacity: .5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: .125;
    -webkit-transform: translateX(-1.57em);
    transform: translateX(-1.75em);
  }
}
@keyframes shadow-l-n {
  0%, 50% {
    opacity: .5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: .125;
    -webkit-transform: translateX(-1.75);
    transform: translateX(-1.75em);
  }
}
@-webkit-keyframes shadow-r-n {
  0% {
    opacity: .125;
    -webkit-transform: translateX(1.75em);
    transform: translateX(1.75em);
  }
  50%,
  100% {
    opacity: .5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes shadow-r-n {
  0% {
    opacity: .125;
    -webkit-transform: translateX(1.75em);
    transform: translateX(1.75em);
  }
  50%,
  100% {
    opacity: .5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.react-spinner-loader-swing-l {
  -webkit-animation: ball-l .425s ease-in-out infinite alternate;
  animation: ball-l .425s ease-in-out infinite alternate;
}
.react-spinner-loader-swing-r {
  -webkit-animation: ball-r .425s ease-in-out infinite alternate;
  animation: ball-r .425s ease-in-out infinite alternate;
}
.react-spinner-loader-shadow-l {
  -webkit-animation: shadow-l-n .425s ease-in-out infinite alternate;
  animation: shadow-l-n .425s ease-in-out infinite alternate;
}
.react-spinner-loader-shadow-r {
  -webkit-animation: shadow-r-n .425s ease-in-out infinite alternate;
  animation: shadow-r-n .425s ease-in-out infinite alternate;
}


.react-spinner-loader-svg-calLoader {
  width: 230px;
  height: 230px;
  transform-origin: 115px 115px;
  animation: 1.4s linear infinite loader-spin;
}

.react-spinner-loader-svg-cal-loader__path {

  animation: 1.4s ease-in-out infinite loader-path;
}

@keyframes loader-spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader-path {
  0% {
    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;
  }
  50% {
    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;
  }
  100% {
    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;
  }
}


.react-spinner-loader-svg svg {
  -webkit-transform-origin: 50% 65%;
          transform-origin: 50% 65%;
}

.react-spinner-loader-svg svg polygon {
  stroke-dasharray: 17;
  -webkit-animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
          animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
}

@-webkit-keyframes dash {
  to {
    stroke-dashoffset: 136;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 136;
  }
}
@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

/* react-loader-spinner styles end */

`;

export default GlobalStyles;
