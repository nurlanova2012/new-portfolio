import React from "react";
import "./testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Iven Smidt",
      position: "CEO of HTTP",
      img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae minima dignissimos ipsa culpa! Necessitatibus nam deserunt, est excepturi delectus tempora consequatur distinctio? Nemo accusamus aperiam quam dolore eum officiis!",
      featured: true,
    },
    {
      id: 2,
      name: "Iven Smidt",
      position: "CEO of TP",
      img: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae minima dignissimos ipsa culpa! Necessitatibus nam deserunt, est excepturi delectus tempora consequatur distinctio? Nemo accusamus aperiam quam dolore eum officiis!",
    },
    {
      id: 3,
      name: "Iven Smidt",
      position: "CEO of MTTP",
      img: "https://images.unsplash.com/photo-1624823221364-8313c83ad314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae minima dignissimos ipsa culpa! Necessitatibus nam deserunt, est excepturi delectus tempora consequatur distinctio? Nemo accusamus aperiam quam dolore eum officiis!",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials__container">
        {data.map((testimonials) => (
          <div
            className={
              testimonials.featured
                ? "testimonials__card testimonials__card--featured"
                : "testimonials__card"
            }
            key={`${testimonials.name}_${testimonials.id}`}
          >
            <div className="testimonials__top">
              <img src={testimonials.img} alt="" />
            </div>
            <div className="testimonials__main">
              <p>{testimonials.descr.slice(0, 100) + "..."}</p>
            </div>
            <div className="testimonials__bottom">
              <h3>{testimonials.name}</h3>
              <h4>{testimonials.position}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
