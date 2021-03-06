import Axios from 'axios';

function getSavedArticles() {
    return Axios
        .get('/saved')
        .then(response => {
            return response.data;
        });
};

function saveArticle(article) {
    return Axios
        .post('/saved', article)
        .then(response => {
            // if (response.data.error) throw Error(response.data.error);
            return response.data;
        });
}

function removeArticle(id) {
    return Axios
        .delete('/saved/' + id)
        .then(response => {
            return response.data;
        })
}

export { getSavedArticles, saveArticle, removeArticle };