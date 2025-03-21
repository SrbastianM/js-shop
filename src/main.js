import "./style.css";
import { routes } from "/src/routes/routes";
import Carousel from "./Presentation/organism/carousel";
import Footer from "./Presentation/atoms/footer";
import Router from "/src/routes/router.js";

const router = new Router(routes);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const path = event.target.getAttribute("href");
      router.navigateTo(path);
    });
  });
});

// const carouselContainer = document.getElementById("content");
// carouselContainer.innerText = Carousel();

const footerContainer = document.getElementById("js-footer-container");
footerContainer.innerHTML = Footer();
