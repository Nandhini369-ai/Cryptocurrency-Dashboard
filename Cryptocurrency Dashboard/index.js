let data = [];
let cardContainer = document.getElementById("card-container");

document.addEventListener("DOMContentLoaded", async function (event) {
  try {
    // Fetch the data from the API
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    
    // Parse the response JSON
    data = await res.json();
    console.log(data);

    // Loop through the data and populate the card container
    for (let i = 0; i < data.length; i++) {
      cardContainer.innerHTML += `<div class="card">
        <div class="image">
          <img class="img" src=${data[i].image} /> 
        </div>

        <div class="details">
          <div class="row">
            <span class="name">${data[i].name}</span>
            <span class="price">${data[i].current_price}</span>
          </div>

          <div class="row">
            <span class="symbol">${data[i].symbol}</span>
            <span class="percent">${data[i].market_cap_change_percentage_24h}%</span>
          </div>
        </div>
      </div>`;
    }
  } catch (error) {
    // Handle any errors that occur during the fetch or JSON parsing
    console.error("Error fetching or processing data: ", error);
  }
});

