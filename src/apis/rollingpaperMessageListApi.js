import axios from "axios";

const instance = axios.create({
  baseURL: "https://rolling-api.vercel.app/17-2",
  timeout: 5000,
});

export const getRollingPaperMessage = async (params) => {
  const { id } = params;
  const res = await instance
    .get(`/recipients/${id}/messages/`)
    .catch(function (error) {
      if (error.response) {
        // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
        throw Error(error.response.data);
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        // node.js에서는 http.ClientRequest 인스턴스입니다.
        throw Error(error.request);
      } else {
        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        throw Error("Error", error.message);
      }
    });
  return res.data;
};
