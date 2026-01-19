import { useEffect, useState, useCallback } from "react";
import { getRecipients } from "../../apis/recipientsListApi";

const LIMIT = 4;

export const useAllRecipients = () => {
  const [bestData, setBestData] = useState({ recipients: [], offset: 0, isLoading: false });
  const [newestData, setNewestData] = useState({ recipients: [], offset: 0, isLoading: false });
  const [error, setError] = useState(null);

  // 개별 데이터를 로드하는 함수
  const loadData = useCallback(async (sort, offset, setter) => {
    try {
      setter((prev) => ({ ...prev, isLoading: true }));
      const data = await getRecipients({ limit: LIMIT, offset, sort });
      
      const { results, next, previous } = data;
      // 기존 코드의 next/previous 로직 유지
      if (previous && results.length > 0) results[0].previous = previous;
      if (next && results.length > 0) results[results.length - 1].next = next;

      setter((prev) => ({ ...prev, recipients: results, isLoading: false }));
    } catch (err) {
      setError(err);
      setter((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  // 초기 로딩 (병렬 처리)
  useEffect(() => {
    // Promise.all을 사용해 두 요청을 동시에 시작
    Promise.all([
      loadData("like", bestData.offset, setBestData),
      loadData("", newestData.offset, setNewestData)
    ]);
  }, []);

  // 오프셋 변경 감지 (페이지네이션)
  useEffect(() => {
    loadData("like", bestData.offset, setBestData);
  }, [bestData.offset, loadData]);

  useEffect(() => {
    loadData("", newestData.offset, setNewestData);
  }, [newestData.offset, loadData]);

  // 핸들러 함수들
  const handleMoveBest = (direction) => {
    setBestData(prev => ({ ...prev, offset: direction === 'next' ? prev.offset + 1 : prev.offset - 1 }));
  };

  const handleMoveNewest = (direction) => {
    setNewestData(prev => ({ ...prev, offset: direction === 'next' ? prev.offset + 1 : prev.offset - 1 }));
  };

  return {
    bestData,
    newestData,
    error,
    handleMoveBest,
    handleMoveNewest
  };
};