import { useCallback, useEffect, useState } from "react";
import { getRollingPaperMessage } from "../../apis/rollingpaperMessageListApi";
import { useInView } from "react-intersection-observer";

export const useRollingPaper = (id) => {
  const [rollingPaper, setRollingPaper] = useState([]);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
  });
  const [hasMoreRollingPaper, setHasMoreRollingPaper] = useState(true);

  const handleLoad = useCallback(async () => {
    try {
      const { results, next } = await getRollingPaperMessage({ id, offset });
      if (!next && offset !== 0) setHasMoreRollingPaper(false);

      if (offset === 0) {
        setRollingPaper(results);
      } else {
        setRollingPaper((prevResults) => [...prevResults, ...results]);
      }

      if (next) setOffset((prevOffset) => prevOffset + 8);
    } catch (error) {
      setError(error);
    }
  }, [id, offset]);

  useEffect(() => {
    if (!inView || !hasMoreRollingPaper) return;

    handleLoad();
  }, [inView, handleLoad, hasMoreRollingPaper]);

  return {
    rollingPaper,
    error,
    ref,
  };
};
