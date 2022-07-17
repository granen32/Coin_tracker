// 이 함수는 json .data를 반환해줘야함 ->fetcher 함수는 promise여야함
import axios from "axios";
const BASE_URL =`https://api.coinpaprika.com/v1`;
const PRICEURL =`https://ohlcv-api.nomadcoders.workers.dev/?coinId=`;

const customAxios = axios.create({
  baseURL: ``, // 기본 서버 주소 입력
  timeout: 500,
});
// 이건 함수형으로 해줘야함
export const fetchCoins = () =>{
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  return customAxios.get(`${BASE_URL}/coins`).then((res) => res.data);
}
// coin 화면 api
export const coinUrl = (coinId:string) =>{
  return customAxios.get(`${BASE_URL}/coins/${coinId}`).then((res) => res.data);
  
}
export const priceUrl = (coinId:string) =>{
  return customAxios.get(`${BASE_URL}/tickers/${coinId}`).then((res) => res.data);;
}
// 차트 화면
export const chartCoin = (coinId:string) => {
  return customAxios.get(`${PRICEURL}${coinId}`).then((res) => res.data);
}