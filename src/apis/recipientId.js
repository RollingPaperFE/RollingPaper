import axios from "axios";

const instance = axios.create({
  baseURL: "https://rolling-api.vercel.app/17-2",
  timeout: 5000,
});

export const getRecipientById = async (id) => {
  // const res = await instance.get(`/recipients/?id=${id}`);
  const res = await instance.get(`/recipients/${id}/`);
  return res.data;
};
