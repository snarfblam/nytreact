import Axios from 'axios';

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

function searchArticles(searchString, numRecords, startYear, endYear) {
    var url = queryURLBase + encodeURIComponent(searchString);
    if (startYear) url += "&begin_date=" + startYear + "0101";
    if (endYear) url += "&end_date=" + startYear + "0101";

    return Axios
        .get(url)
        .then(response => {
            return response.data.response.docs.slice(0, numRecords);
        });
}

export { searchArticles };