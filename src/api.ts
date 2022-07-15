// 이 함수는 json .data를 반환해줘야함 ->fetcher 함수는 promise여야함
import axios from "axios";
const BaseUrl = "https://api.coinpaprika.com/v1";
const PRICEURL = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=`;
// 이건 함수형으로 해줘야함
export const fetchCoins = async() =>{
  // // 데이터 얻는법
  // // axios.get(url).then(res => console.log(res.data))
  // return await axios.get(`https://api.coinpaprika.com/v1/coins`).then(
  //   (res) =>{
  //     return (
  //       res.data
  //     )
  //   }
  // )
  const response  = await (await fetch(`${BaseUrl}/coins`)).json();
  // return await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(
  //   (res) =>{
  //     return (
  //       res.data
  //     )
  //   }
  // )
  return response;
}
// coin 화면 api
export const coinUrl = async(coinId:string) =>{
  return await axios.get(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(
    (res) =>{
      return (
        res.data
      )
    }
  )
}
export const priceUrl = async(coinId:string) =>{
  const response  = await (await fetch(`${BaseUrl}/coins`)).json();
  // return await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(
  //   (res) =>{
  //     return (
  //       res.data
  //     )
  //   }
  // )
  return response;
}
// 차트 화면
export const chartCoin =async (coinId:string) => {
  return await axios.get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`).then(
    (res) =>{
      return (
        res.data
      )
    }
  )
}