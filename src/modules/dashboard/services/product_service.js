import axios from "axios";

export const FetchProducts = () => {
  return axios.get("https://world.openfoodfacts.org/api/v0/product/737628064502.json");
};
