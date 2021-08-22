const url = "https://api.nasa.gov/planetary/apod?api_key=";

const apiKey = config.NASA_API_KEY;

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${apiKey}`);
    const data = await response.json();
    console.log("NASA APOD data", data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data) => {
  document.querySelector(".title").textContent = data.title;
  document.querySelector(".date").textContent = data.date;
  document.querySelector(".picture").src = data.url;
  document.querySelector(".explanation").textContent = data.explanation;
};

fetchNASAData();
