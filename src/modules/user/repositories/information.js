import axios from "axios";

export const FetchPersonalInformation = () => {
  return axios.get("https://randomuser.me/api/");
};
