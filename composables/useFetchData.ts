interface Payload {
  url: string;
  method: string;
  body?: object;
  params?: object;
  headers?: any;
}
export const useFetchData = async (payload: Payload) => {
  const config = useRuntimeConfig();
  if (!payload.hasOwnProperty("headers")) {
    Object.assign(payload, {
      "Content-Type": "application/json",
      Authorization: "Token " + "2b3ee518aa7c00bbb7dbbf85fa34032fd138e059",
    });
  }
  const data = await $fetch(
    config.public.apiBaseUrl + payload.url,
    payload
  ).catch((error) => {
    console.log(error.response.status);
  });
  return data;
};
