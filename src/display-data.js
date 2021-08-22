const displayData = (data) => {
  document.querySelector(".title").textContent = data.title;
  document.querySelector(".date").textContent = data.date;
  document.querySelector(".picture").src = data.url;
  document.querySelector(".explanation").textContent = data.explanation;
};

export { displayData };
