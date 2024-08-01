import axios from "axios";

const baseURL = "cap_api_dest_cesco/odata/v4/car";
const baseURL2 = "cap_api_dest_cesco2/odata/v4/car";

const instance = axios.create({
  baseURL,
});

export const getTableData = async (params = { $top: 20, $skip: 0 }) => {
  const { data } = await instance.get("/TB_CAR_BuyInfo", {
    params,
  });

  return data.d?.results || data.d || data.value;
};
