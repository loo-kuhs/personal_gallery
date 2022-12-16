function fetchData() {
  fetch("http://localhost:3000/images/")
    .then((response) => response.json())
    .then((json) => takeData(json))
    .catch((err) => console.error(err));
}

function takeData(res) {
  let image = document.querySelector(".gallery");
  const sortedIds = res.sort((a, b) =>
    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
  );

  sortedIds.forEach((img) => {
    let card = document.createElement("div");
    let imgElement = document.createElement("img");
    let contextMetadata = document.createElement("p");
    let name = document.createElement("h3");

    contextMetadata.classList.add("description");
    card.classList.add("image-card");

    imgElement.src = img.url;
    name.textContent = `ID: ${img.id}`;
    contextMetadata.textContent = img.metadata;

    image.appendChild(imgElement);
    image.appendChild(name);

    card.appendChild(imgElement);
    card.appendChild(name);
    card.appendChild(contextMetadata);
    image.appendChild(card);
  });
}

fetchData();

/*
function loadImages() {
  let image = document.querySelector(".gallery");

  let imagePaths = getImagePaths();

  for (let i = 0; i < imagePaths.length; i++) {
    let img = document.createElement("img");
    img.src = imagePaths[i];
    image.appendChild(img);
  }
}
*/

function showPage(pageNumber) {
  let images = document.querySelectorAll(".gallery img");

  let startIndex = (pageNumber - 1) * 9;
  let endIndex = startIndex + 9 - 1;

  for (let i = 0; i < images.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
}
