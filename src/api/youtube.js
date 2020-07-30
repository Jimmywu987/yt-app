import axios from "axios";

const KEY = "AIzaSyDQ_l7Psy2UEQ_jGloUM56octgRyl6rAkA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
