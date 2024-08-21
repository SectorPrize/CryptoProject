function inputData() {
  const URL_API = "https://api.coincap.io/v2/assets";

  let responce = $.getJSON(URL_API, (data) => {
    for (let i = 0; i < data.data.length; i++) {
      //console.log(data.data[i]);
      if (typeof data.data[i] == "undefined") break; // Если информации нет, значит мы прошли все объекты API
      // card
      let tmp;
      tmp = document.getElementsByClassName("card")[i];
      tmp = tmp.querySelector(".card-title");
      //console.log(tmp);
      tmp.innerHTML = data.data[i].name;

      tmp = document
        .getElementsByClassName("card")
        [i].querySelector(".card-subtitle");
      tmp.innerHTML = data.data[i].symbol;

      tmp = document
        .getElementsByClassName("card")
        [i].querySelector(".card-text");
      tmp.innerHTML = data.data[i].symbol;
      let price_now = "";
      if (Number([data.data[i].priceUsd]) > 1)
        price_now = `Текущая цена: ${Number([data.data[i].priceUsd]).toFixed(
          3
        )} $`;
      else
        price_now = `Текущая цена: ${Number([data.data[i].priceUsd]).toFixed(
          5
        )} $`;
      tmp.innerHTML = price_now;

      tmp = document.getElementsByClassName("card")[i].querySelectorAll("p")[1];
      tmp.innerHTML = `Изменение за 24ч: ${Number([
        data.data[i].changePercent24Hr,
      ]).toFixed(2)} %`;

      tmp = document.getElementsByClassName("card")[i].querySelectorAll("p")[2];
      let linkProject = data.data[i].explorer;
      tmp.innerHTML =
        "<a href=" + linkProject + " target='_blank'>" + linkProject + "</a>";
    }
  });
}

function createCards(N) {
  const COUNT_COLUMN = 3;
  for (let j = 0; j < N / 3; j++) {
    // row
    let row = document.createElement("div");
    $(row).addClass("row mt-5 justify-content-around");
    document.body.getElementsByClassName("container")[0].appendChild(row);

    for (let i = 0; i < COUNT_COLUMN; i++) {
      let tmp;
      let card = document.createElement("div");
      card.setAttribute("id", `card${j * 3 + i}`);
      card.setAttribute(
        "data-anijs",
        `if: mouseover, on: #card${j * 3 + i}, do: pulse animated`
      );
      card.style.width = "25rem";
      card.classList.add("card");

      let card_body = document.createElement("div");
      card_body.classList.add("card-body");

      tmp = document.createElement("h5");
      tmp.classList.add("card-title");
      card_body.appendChild(tmp);

      tmp = document.createElement("h6");
      tmp.classList.add("card-subtitle");
      card_body.appendChild(tmp);

      tmp = document.createElement("p");
      tmp.classList.add("card-text");
      card_body.appendChild(tmp);

      tmp = document.createElement("p");
      card_body.appendChild(tmp);

      tmp = document.createElement("p");
      card_body.appendChild(tmp);

      card.appendChild(card_body);
      row.appendChild(card); // add element like child for element row
    }
  }
}
