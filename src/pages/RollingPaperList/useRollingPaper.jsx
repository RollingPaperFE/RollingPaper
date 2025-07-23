import { useCallback, useEffect, useState } from "react";
import { getRollingPaperMessage } from "../../apis/rollingpaperMessageListApi";

export const useRollingPaper = (id) => {
  const [rollingPaper, setRollingPaper] = useState([]);
  const [error, setError] = useState(null);

  const handleLoad = useCallback(async () => {
    try {
      const data = await getRollingPaperMessage({ id });
      setRollingPaper(data);
    } catch (error) {
      setError(error);
    }
  }, [id]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    rollingPaper,
    error,
  };
};
