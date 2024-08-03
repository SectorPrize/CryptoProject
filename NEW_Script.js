function takeInfoHP() {
  const URL_API = "https://api.coincap.io/v2/assets";

  const COUNT_COLUMN = 3;

  let responce = $.getJSON(URL_API, (data) => {
    let N = data.data.length / COUNT_COLUMN;
    for (let j = 0; j < N; j++) {
      // row
      let row = document.createElement("div");
      $(row).addClass("row row-cols-3 row-cols-md-2 g-4");
      document.body.getElementsByClassName("container")[0].appendChild(row);

      for (let i = 0; i < COUNT_COLUMN; i++) {
        if (typeof data.data[j * 3 + i] == "undefined") break; // Если информации нет, значит мы прошли все объекты API
        // card
        let card = document.createElement("div");

        // Tip: avoid this ton of code using AniJS ;)

        let element = $(".card");

        // when mouseover execute the animation
        element.mouseover(function () {
          // the animation starts
          element.toggleClass("pulse animated");

          // do something when animation ends
          element.one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function (e) {
              // trick to execute the animation again
              $(e.target).removeClass("pulse animated");
            }
          );
        });

        card.setAttribute("data-anijs", "if: mouseover, do: pulse animated");
        $(card).addClass("card"); // add css class for element

        card.style.width = "25rem"; // add style property width
        row.appendChild(card); // add element like child for element row
        // cardBody
        let cardBody = document.createElement("div");
        $(cardBody).addClass("card-body");
        card.appendChild(cardBody);
        // name
        let cardTitle = document.createElement("h5");
        $(cardTitle).addClass("card-title");
        cardBody.appendChild(cardTitle);
        cardTitle.innerHTML = data.data[j * 3 + i].name;
        // house
        let cardSubTitle = document.createElement("h6");
        $(cardSubTitle).addClass("card-subtitle");
        cardBody.appendChild(cardSubTitle);
        cardSubTitle.innerHTML = data.data[j * 3 + i].symbol;
        // gender

        if (Number([data.data[j * 3 + i].priceUsd]) > 1) {
          let price_now = `Текущая цена: ${Number([
            data.data[j * 3 + i].priceUsd,
          ]).toFixed(3)} $`;
          let priceElement = document.createElement("p");
          cardBody.appendChild(priceElement);
          priceElement.innerHTML = price_now;
        } else {
          let price_now = `Текущая цена: ${Number([
            data.data[j * 3 + i].priceUsd,
          ]).toFixed(5)} $`;
          let priceElement = document.createElement("p");
          cardBody.appendChild(priceElement);
          priceElement.innerHTML = price_now;
        }
        /**   if value.priceElement.innerHTML > 1{price_now.toFixed(3)}
          else
          {price_now.toFixed(5)}
*/
        //date-birth
        let percentElement = document.createElement("p");
        cardBody.appendChild(percentElement);
        percentElement.innerHTML = `Изменение за 24ч: ${[
          data.data[j * 3 + i].changePercent24Hr,
        ]} %`;

        let expElement = document.createElement("p");
        cardBody.appendChild(expElement);
        let linkProject = data.data[j * 3 + i].explorer;
        expElement.innerHTML =
          "<a href=" + linkProject + " target='_blank'>" + linkProject + "</a>";

        //let linkText = document.createTextNode(linkProject);
        // a.appendChild(linkText);

        // wizard-or-not
        /** let pElement = document.createElement("p");
                if (data[j * 3 + i].wizard)
                {
                    pElement.style.color = "green";
                    pElement.style.fontWeight = "bolder";
                    pElement.innerHTML = "Волшебник";
                    $(card).addClass("text-bg-info");
                }
                else
                {
                    pElement.style.color = "brown";
                    pElement.style.fontWeight = "italic";
                    pElement.innerHTML = "Магл";
                    $(card).addClass("text-bg-secondary");
                }
                cardBody.appendChild(pElement);
                //eye
                if (typeof(data[j * 3 + i].eyeColour) != undefined && data[j * 3 + i].eyeColour != "")
                {
                    let eyeElement = document.createElement("p");
                    eyeElement.innerHTML = `Цвет глаз: ${DICT_COLOR[data[j * 3 + i].eyeColour]}`;
                    eyeElement.style.color = data[j * 3 + i].eyeColour;
                    eyeElement.style.textAlign = "center";
                    cardBody.appendChild(eyeElement);  
                }
                 //hair
                if (typeof(data[j * 3 + i].eyeColour) != undefined && data[j * 3 + i].hairColour != "")
                {
                    let hairElement = document.createElement("p");
                    hairElement.innerHTML = `Цвет волос: ${DICT_COLOR[data[j * 3 + i].hairColour]}`;
                    hairElement.style.color = data[j * 3 + i].hairColour;
                    hairElement.style.textAlign = "center";
                    cardBody.appendChild(hairElement);
                }
                */
      }
    }
  });
}
