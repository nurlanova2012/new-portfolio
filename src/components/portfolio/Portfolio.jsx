import React, { useState, useEffect } from "react";
import { featured, webApps, reactApps } from "../../db";
import "./portfolio.scss";
import { PortfolioCats } from "../index";

function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "web apps":
        setData(webApps);
        break;
      case "react apps":
        setData(reactApps);
        break;
      default:
        setData(featured);
        break;
    }
  }, [selected]);

  const portfolioCats = [
    {
      id: 1,
      category: "featured",
      title: "Featured",
    },
    {
      id: 2,
      category: "web apps",
      title: "Web Apps",
    },
    {
      id: 3,
      category: "react apps",
      title: "React Apps",
    },
    {
      id: 4,
      category: "java apps",
      title: "  Java Apps",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul className="portfolio__cat">
        {portfolioCats.map((item) => (
          <PortfolioCats
            item={item.title}
            key={`${item.title}_${item.id}`}
            active={selected === item.category}
            setSelected={setSelected}
            category={item.category}
          />
        ))}
      </ul>
      <div className="portfolio__list">
        {data.map((dataItem, id) => (
          <div
            className="portfolio__item"
            key={`${dataItem.title}_${dataItem.id}`}
          >
            <img src={dataItem.img} alt={dataItem.title} />
            <h3>{dataItem.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
