import { useEffect, useState } from "react";
import {
  getRecipientByReactions,
  postRecipientReaction,
} from "../apis/recipientId";

export const useRecipientByReactions = (id) => {
  const [reactions, setReactions] = useState([]);
  // const [error, setError] = useState(null);

  const handleLoad = async () => {
    try {
      const data = await getRecipientByReactions(id);
      setReactions(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateReactions = async (emoji) => {
    await postRecipientReaction(id, emoji);
    const newData = await getRecipientByReactions(id);
    setReactions(newData);
  };

  useEffect(() => {
    if (id) {
      handleLoad();
    }
  }, [id]);

  return { reactions, handleUpdateReactions };
};

export default useRecipientByReactions;
