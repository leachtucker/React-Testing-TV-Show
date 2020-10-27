import axios from "axios";

const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
      .then(resp => {
        return resp;
      });
};

export default fetchShow;