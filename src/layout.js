// create main container
const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

// create header
const header = document.createElement("div");
header.className = "header";
container.appendChild(header);

// create h1 as header
const h1 = document.createElement("h1");
h1.innerText = "Astronomy Picture of the Day";
header.appendChild(h1);

// create h2 tag for title
const h2 = document.createElement("h2");
h2.className = "title";
header.appendChild(h2);

// create p tag for date
const pDate = document.createElement("p");
pDate.className = "date";
header.appendChild(pDate);

// create data section
const dataDiv = document.createElement("div");
dataDiv.className = "data";
container.appendChild(dataDiv);

// create img tag for data
const img = document.createElement("img");
img.src = "";
img.className = "picture";
img.alt = "Image by NASA";
dataDiv.appendChild(img);

// create p tag for data
const pData = document.createElement("p");
pData.className = "explanation";
dataDiv.appendChild(pData);
