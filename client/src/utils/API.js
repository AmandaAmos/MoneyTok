import axios from "axios";

export default {
    //getNewAriticles
    getNewArticles: function(title) {
        return axios.get(`${(NEWYORKTIMESKEY)}`)
    }
}