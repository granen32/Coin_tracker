// 이 함수는 json .data를 반환해줘야함 ->fetcher 함수는 promise여야함
import axios from "axios";
const BASE_URL = "https://api.coinpaprika.com/v1";
const PRICEURL = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=`;
// 이건 함수형으로 해줘야함
export const fetchCoins = async() =>{
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  const response = await axios.get(`${BASE_URL}/coins`).then(res => res.data);
  return response;
}
// coin 화면 api
export const coinUrl = async(coinId:string) =>{
  const response = await axios.get(`${BASE_URL}/coins/${coinId}`).then(res => res.data);
  return response;
}
export const priceUrl = async(coinId:string) =>{
  const response = await axios.get(`${BASE_URL}/tickers/${coinId}`).then(res => res.data);
  return response;
}
// 차트 화면
export const chartCoin =async (coinId:string) => {
  const response = await axios.get(`${PRICEURL}${coinId}`).then((res) => res.data);
  return response;
}