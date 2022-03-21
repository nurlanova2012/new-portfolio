import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { KeyboardArrowDown } from "@material-ui/icons";

function Intro() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 3000,
      backSpeed: 60,
      strings: ["I am an independent creative web developer from Bishkek, Kyrgyzstan."],
    });
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            alt="intro"
          />
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__right-inner">
          <h1>Hi, my name is Aizirek</h1>
          <h2>
            <span ref={animatedTextRef}>
            </span>
          </h2>
          <a href="#portfolio">
            <KeyboardArrowDown className="intro__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
