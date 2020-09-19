$("#search").on("click", function () {
  var searchTerm = $("#Search-Term").val();
  var noRecords = $("#Number-of-Records-to-Retrieve").val();
  var startD = $("#Start-Year").val().toString();
  var endD = $("#End-Year").val().toString();
  var queryUrl =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerm +
    "&begin_date=" +
    startD +
    "&end_date=" +
    endD +
    "&api-key=nUmHpNlAyIYYEcFchHLjAlGFoAhmZ633&limit=" +
    noRecords;
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < response.response.docs.length; i++) {
      var pEl = $("<p>");
      pEl.text(response.response.docs[i].abstract);
      $("#topArticles").append(pEl);
    }
  });
});
