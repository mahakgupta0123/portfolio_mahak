
const apiUrl = 'https://api.thecatapi.com/v1/images/search';
let h1=document.querySelector("h1");

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data[0].url);
    let img=document.createElement("img");
    img.src=data[0].url;
    h1.appendChild(img);
  })
  .catch(error => {
    console.error('Error:', error);
  });