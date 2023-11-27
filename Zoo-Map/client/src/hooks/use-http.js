import { useCallback } from "react";

const useHttp = () => {
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(requestConfig.url);
      const data = await response.json();
      applyData(data);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return {
    sendRequest,
  };
};

export default useHttp;
