function getData() {
  const URL_API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=CG-gRg9stc8QJamGxZDJ2Y25jEr";
  $.getJSON(URL_API, function (data) {
    console.log(data);

    let html =
      "<table>" +
      "<tr>" +
      "<th>Название</th>" +
      "<th>Цена</th>" +
      "<th>Изменение за 24 часа</th>" +
      "<th>Максимум за 24 часа</th>" +
      "<th>Минимум за 24 часа</th>" +
      "<th>Логотип</th>" +
      "</tr>";

    for (i = 0; i < data.length; i++) {
      html =
        html +
        "<tr>" +
        "<td>" +
        data[0]["name"] +
        "</td>" +
        "<td>" +
        data[0]["current_price"] +
        "</td>" +
        "<td>" +
        data[0]["price_change_24h"] +
        "</td>" +
        "<td>" +
        data[0]["high_24h"] +
        "</td>" +
        "<td>" +
        data[0]["low_24h"] +
        "</td>" +
        "<td>" +
        "<img width='50' height='50' src=" +
        data[0]["image"] +
        ">" +
        "</td>" +
        "</tr>";
    }

    html = html + "</table>";
    document.getElementById("BTC").innerHTML = html;
  });
}
