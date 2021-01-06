import _axios from "axios";

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL: baseURL || "http://localhost:3003",
    timeout: 1000,
  });
  return instance;
};

// 傳遞參數
export { axios };

export default axios();
