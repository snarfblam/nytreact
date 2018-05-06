import Axios from 'axios';

function getSavedArticles() {
    return Axios
        .get('/saved')
        .then(response => {
            return response.data;
        });
};

export { getSavedArticles };