/**const settings = {
  async: true,
  crossDomain: true,
  url: "https://api.coincap.io/v2/assets",
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
function getData() {
  const URL_API = "https://api.coincap.io/v2/assets";
  $.getJSON(URL_API, function (data) {
    console.log(data);
   let cardBody = cards[0].firstElementChild;
    });
  } 

function getData() {
  const URL_API = "https://api.coincap.io/v2/assets";
  let cards = document.getElementByClassName("card");
  $.getJSON(URL_API, function (data) {
    let cardBody = cards[0].firstElementChild;
    cardBody.getElementByClassName("card-title")[0].innerHTML = data[0].name;
    console.log(data);
  });
}

function takeFirstDataFromApi(url_API) {
  let responce = $.getJSON(url_API, (data) => console.log(data));
  // let cards = document.getElementByClassName("card");
  //  let cardBody = cards[0].firstElementChild;
  //   cardBody.getElementByClassName("card-title")[0].innerHTML = data[0].name;
}
takeFirstDataFromApi("https://api.coincap.io/v2/assets");

takeFirstDataFromApi(url_API);
**/

function takeDataFromAPI(url_API) {
  let cards = document.getElementsByClassName("card");
  // let cardBody = cards[0].firstElementChild;
  let responce = $.getJSON(
    url_API,
    (data) => {
      cards[0].getElementsByClassName("card-title")[0].innerHTML =
        data.data[0].name;
      document.getElementById("price").innerHTML = data.data[0].priceUsd;
    }
    //   (cardBody.getElementsByClassName("card-title")[0].innerHTML =
    //     data.data[0].name)
  );
}
