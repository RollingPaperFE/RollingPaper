import { useEffect, useState } from "react";
import { getRecipientByReactions } from "../apis/recipientId";

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

  useEffect(() => {
    if (id) {
      handleLoad();
    }
  }, [id]);

  return { reactions };
};

export default useRecipientByReactions;
