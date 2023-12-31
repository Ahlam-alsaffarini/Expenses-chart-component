import data from "../data.json" assert { type: "json" };

setTimeout(() => {
  document.querySelector("body").style.opacity = "1";
}, 500);

let chartItem = document.querySelectorAll(".chart-item");

chartItem.forEach((item, index) => {
  //first lets give cyen color for current day
  let d = new Date();
  let day = d.getDay() == 0 ? 6 : d.getDay() - 1;
  console.log(day);
  if (item.querySelector("div").className === `${data[day].day}`) {
    item.querySelector(`.${data[day].day} span`).style.backgroundColor =
      "var(--Cyan)";
  }

  //then for before content

  let span = item.querySelector("div span");
  span.setAttribute("data-before", `$${data[index].amount}`);

  // third .... given height for each chart item
  item.querySelector("div span").style.height = `0px`;

  //when load page the chart item start from zero to certain height
  setTimeout(() => {
    let H = Math.trunc((140 * data[index].amount) / 52);
    span.style.height = `${H}px`;
  }, 500);
});
