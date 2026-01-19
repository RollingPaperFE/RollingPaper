import { useEffect, useState } from "react";
import { getRecipients } from "../../apis/recipientsListApi";

const LIMIT = 4;

export const useRecipient = ({ sort }) => {
  const [recipients, setRecipients] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async (options) => {
    let data;
    try {
      setIsLoading(true);
      data = await getRecipients(options);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { results, next, previous } = data;

    if (previous) {
      results[0].previous = previous;
    }
    if (next) {
      results[results.length - 1].next = next;
    }

    setRecipients(results);
  };

  const handleMovePrevious = () => {
    setOffset(offset - 1);
  };

  const handleMoveNext = () => {
    setOffset(offset + 1);
  };

  useEffect(() => {
    handleLoad({
      limit: LIMIT,
      offset,
      sort,
    });
  }, [offset, sort]);

  return {
    handleMovePrevious,
    handleMoveNext,
    recipients,
    isLoading,
    error,
  };
};
