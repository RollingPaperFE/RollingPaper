import axios from "axios";

const instance = axios.create({
  baseURL: "https://rolling-api.vercel.app/17-2",
  timeout: 5000,
});

export const getRecipientById = async (id) => {
  const res = await instance.get(`/recipients/${id}/`);
  return res.data;
};

export const getRecipientByReactions = async (id) => {
  const res = await instance.get(`/recipients/${id}/reactions/`);
  return res.data;
};

export const postRecipientReaction = async (id, reaction) => {
  console.log({ reaction });
  const res = await instance.post(`/recipients/${id}/reactions/`, {
    emoji: reaction,
    type: "increase",
  });
  return res.data;
};
