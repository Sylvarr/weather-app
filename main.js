import { locationSubmit, title, footer, date } from "./elements";
import { dataFetch } from "./weather";
import moment from "moment";

locationSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  dataFetch();
});

title.addEventListener("click", () => {
  location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
  let footerYear = moment().format("YYYY");
  let currentDate = moment().format("dddd, MMMM Do YYYY");
  date.textContent = currentDate;
  footer.textContent = footer.textContent = `${footerYear} Weather App`;
});
