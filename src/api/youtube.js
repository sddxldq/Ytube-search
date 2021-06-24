import axios from "axios";

const KEY = "AIzaSyCZCbeW6oDQu0OLv9eopOgMX1z1S9yeKiA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 25,
    key: KEY,
  },
});
