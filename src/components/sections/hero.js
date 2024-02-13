import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import batsGIF from '../../images/bats.gif';
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Serif;
    text-shadow: 0 0 1px #000;
  }

  .snowflakes{
    display:none;
  }
  .bat{
    display: inline-block;
	  transform: scale(1);
	  animation: pulse 1.5s infinite;    
    cursor: pointer;
  }
  .bat:hover ~ .snowflakes{
    display:inline-block;
    animation: none;

  }
 


@keyframes pulse {
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(2);
	}

	100% {
		transform: scale(1);
	}
}
  
  @-webkit-keyframes snowflakes-fall{
    0%{
        top:-10%
    }
    100%{
        top:100%
    }
  }

@-webkit-keyframes snowflakes-shake{
    0%{
        -webkit-transform:translateX(0px);
        transform:translateX(0px)
    }
    50%{
        -webkit-transform:translateX(80px);
        transform:translateX(80px)
    }
    100%{
        -webkit-transform:translateX(0px);
        transform:translateX(0px)
    }
}
@keyframes snowflakes-fall{
    0%{
        top:-10%
    }
    100%{
        top:100%
    }
}
@keyframes snowflakes-shake{
    0%{
        transform:translateX(0px)
    }
    50%{
        transform:translateX(80px)
    }
    100%{
        transform:translateX(0px)
    }
}
.snowflake{
    position:fixed;
    top:-5%;
    z-index:9999;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor:default;
    -webkit-animation-name:snowflakes-fall,snowflakes-shake;
    -webkit-animation-duration:10s,3s;
    -webkit-animation-timing-function:linear,ease-in-out;
    -webkit-animation-iteration-count:infinite,infinite;
    -webkit-animation-play-state:running,running;
    animation-name:snowflakes-fall,snowflakes-shake;
    animation-duration:10s,3s;
    animation-timing-function:linear,ease-in-out;
    animation-iteration-count:infinite,infinite;
    animation-play-state:running,running
}
.snowflake:nth-of-type(0){
    left:1%;
    -webkit-animation-delay:0s,0s;
    animation-delay:0s,0s
}
.snowflake:nth-of-type(1){
    left:10%;
    -webkit-animation-delay:1s,1s;
    animation-delay:1s,1s
}
.snowflake:nth-of-type(2){
    left:20%;
    -webkit-animation-delay:6s,.5s;
    animation-delay:6s,.5s
}
.snowflake:nth-of-type(3){
    left:30%;
    -webkit-animation-delay:4s,2s;
    animation-delay:4s,2s
}
.snowflake:nth-of-type(4){
    left:40%;
    -webkit-animation-delay:2s,2s;
    animation-delay:2s,2s
}
.snowflake:nth-of-type(5){
    left:50%;
    -webkit-animation-delay:8s,3s;
    animation-delay:8s,3s
}
.snowflake:nth-of-type(6){
    left:60%;
    -webkit-animation-delay:6s,2s;
    animation-delay:6s,2s
}
.snowflake:nth-of-type(7){
    left:70%;
    -webkit-animation-delay:2s,1s;
    animation-delay:2s,1s
}
.snowflake:nth-of-type(8){
    left:80%;
    -webkit-animation-delay:1s,0s;
    animation-delay:1s,0s
}
.snowflake:nth-of-type(9){
    left:90%;
    -webkit-animation-delay:3s,1s;
    animation delay:3s,1s;
}
.snowflake:nth-of-type(10){
    left:100%;
    -webkit-animation-delay:5s,3s;
    animation-delay:5s,3s;
}
  
  .snowflake img {
      height: 40px;
      bottom: 0;
      background-color: transparent;
      display: block;
  }
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Hossam Elbeialy.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <>
      <p>
        I'm a software engineer who loves creating awesome web and mobile apps using cutting-edge
        technologies and frameworks. I also have a knack for algorithms and problem-solving. Oh, and
        I'm Batman. <div className="bat">🦇</div>
        <div className="snowflakes">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <div className="snowflake" key={i}>
              <img alt="bat gif" src={batsGIF} />
            </div>
          ))}

          {/* <div className="snowflake">
            <img alt="bat gif" src={batsGIF} />
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div>
          <div className="snowflake">
            hi
            <img alt="bat gif" src={batsGIF} />{' '}
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div>
          <div className="snowflake">
            <img alt="bat gif" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
          </div> */}
        </div>
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
