import "./style.css";
import { routes } from "/src/routes/routes";
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
