import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT ThinhNC.Pizza</h1>
        <p>
          Pizza, an abbreviation for ThinhNC.Pizza, stands as an iconic and beloved fast-food chain worldwide. Founded in 1952 by Colonel Harland Sanders, this restaurant has left an indelible mark on the culinary landscape. With a humble beginning at a small roadside eatery in Corbin, Kentucky, Colonel Sanders perfected his secret recipe of 11 herbs and spices, which remains at the heart of KFC's success.

          This secret blend, paired with their signature cooking technique, results in crispy, golden-brown, and finger-lickin' good fried chicken that has captured the hearts of millions. The taste remains consistent across the globe, creating a sense of familiarity for customers regardless of their location.

          Colonel Sanders, with his distinctive appearance and warm personality, became the face of KFC, embodying the brand's values of quality and passion for great food. His image remains synonymous with the company's commitment to delivering exceptional taste and service.

          Over the years, Pizza has expanded its menu to include a variety of chicken-based offerings, such as sandwiches, wraps, and salads, catering to diverse tastes while keeping its fried chicken as the centerpiece.

          With thousands of restaurants spread across continents, KFC continues to attract food enthusiasts seeking a scrumptious and satisfying fast-food experience. As it carries forward its legacy of mouthwatering chicken and cherished traditions, KFC remains a symbol of comfort and delight for people of all ages.
        </p>
      </div>
    </div>
  );
}

export default About;
