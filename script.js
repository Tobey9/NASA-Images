const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("searchInput");
const imageContainer = document.querySelector(".image-container");

let img;

function removeImages() {
  if (imageContainer.hasChildNodes()) {
    imageContainer.innerHTML = "";
  }
}

function displayImage(images) {
  images.forEach((image, index) => {
    if (image.links) {
      img = document.createElement("img");

      console.log(image.links[0].href);
      img.src = image.links[0].href;
      img.className = "images";
      imageContainer.appendChild(img);
    }
  });
}

async function getUrl(e) {
  e.preventDefault();
  removeImages();
  const queries = input.value;
  console.log(queries);
  // const config = { params: { q: queries } };
  const url = `https://images-api.nasa.gov/search?q=${queries}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.collection.items[0].links[0]);
    // console.log(data.collection.items);
    displayImage(data.collection.items);
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", getUrl);
