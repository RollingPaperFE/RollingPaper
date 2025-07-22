import { useEffect, useState } from "react";
import { getRecipientById } from "../api/recipientsListApi.js";

export const useRecipientById = (id) => {
  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    try {
      const data = await getRecipientById(id);
      setRecipients(data);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    if (id) {
      handleLoad();
    }
  }, [id]);

  return { recipients, error };
};
