import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./work.scss";


const sliderData = [
  {
    id: 1,
    title: "Work Titel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Repellat voluptatum nisi saepe fuga illo voluptate mollitiainventore laboriosam, iusto dolores officiis vitae molestiae cumque repellendus possimus beatae dolore nam facere!",
    img: "https://images.unsplash.com/photo-1567722681579-c671cabd2810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 2,
    title: "Work Titel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Repellat voluptatum nisi saepe fuga illo voluptate mollitiainventore laboriosam, iusto dolores officiis vitae molestiae cumque repellendus possimus beatae dolore nam facere!",
    img: "https://images.unsplash.com/photo-1567308268904-285993ebbd32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },

  {
    id: 3,
    title: "Work Titel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Repellat voluptatum nisi saepe fuga illo voluptate mollitiainventore laboriosam, iusto dolores officiis vitae molestiae cumque repellendus possimus beatae dolore nam facere!",
    img: "https://images.unsplash.com/photo-1560633000-fe7230e33194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];

function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "prev") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
    } else if (direction === "next") {
      setCurrentSlide(
        currentSlide < sliderData.length - 1 ? currentSlide + 1 : currentSlide
      );
    }
  };

  return (
    <section className="work" id="work">
      <div className="work__slider"
        style = {{ transform: `translateX(-${currentSlide * 100}vw)` }} >
        {sliderData.map((sliderItem) => (
          <div className="work__slider-inner">
            <div className="work__slider-item">
              <div className="work__slider-left">
                <div className="work__slider-container">
                  <h2>{sliderItem.title} </h2>
                  <p>{sliderItem.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="work__slider-right">
                <img src={sliderItem.img} alt={sliderItem.title} />
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <button className="work__slider-btn work__slider-btn-prev">
        <ArrowBackIosIcon
          className="work__slider-arrow"
          onClick={() => handleClick("prev")}
        />
      </button>
      <button className="work__slider-btn work__slider-btn-next">
        <ArrowForwardIosIcon
          className="work__slider-arrow"
          onClick={() => handleClick("next")}
        />
      </button>
    </section>
  );
}

export default Work;
