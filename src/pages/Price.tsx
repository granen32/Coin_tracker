import React from 'react'
import {
  coinIdProps,
  priceInfoData
} from "../../@types/global"; 
import { useQuery } from 'react-query';
import { priceUrl } from '../api';
import styled from 'styled-components';
const PriceCotainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 15px;
  background: rgba(0,0,0,0.5);
  justify-content: space-between;
  padding: 5px;
  flex-wrap: wrap;
  overflow: hidden;
`;
const PriceItem = styled.div`
  width: calc(50% - 20px);
  margin: 5px 10px;
  text-align: center;
  border-radius: 15px;
  padding: 30px 20px;
  background: rgba(0,0,0,0.2);
  span{
    display: block;
    margin-bottom: 5px;
    &:first-of-type{
      text-transform: uppercase;
      color: tomato;
      font-weight: 600;
      margin-bottom: 10px;
    }
    &:last-of-type{
      font-size: 24px;
      margin-bottom: 0;
    }
  }
`
const Price = ({coinId}:coinIdProps) => {
  const {isLoading:priceLoading, data:priceDatase }= useQuery<priceInfoData>(["price_chlv", coinId], () =>priceUrl(coinId));
  return (
    <>
    {priceLoading ? "loading 중 입니다" :     <PriceCotainer>
      <PriceItem>
        <span>percent change</span>
        <span>15분전</span>
        <span className="pointer">{priceDatase?.quotes.USD.percent_change_15m}</span>
      </PriceItem>
      <PriceItem>
        <span>percent change</span> 
        <span>30분전</span>
        <span className="pointer">{priceDatase?.quotes.USD.percent_change_30m}</span>
      </PriceItem>
      <PriceItem>
        <span>percent change</span> 
        <span>1시간전</span>
        <span className="pointer">{priceDatase?.quotes.USD.percent_change_1h}</span>
      </PriceItem>
      <PriceItem>
        <span>percent change</span> 
        <span>12시간전</span>
        <span className="pointer">{priceDatase?.quotes.USD.percent_change_12h}</span>
      </PriceItem>
      <PriceItem>
        <span>percent change</span> 
        <span>24시간전</span>
        <span className="pointer">{priceDatase?.quotes.USD.market_cap_change_24h}</span>
      </PriceItem>
      <PriceItem>
        <span>percent change</span> 
        <span>30일전</span>
        <span className="pointer">{priceDatase?.quotes.USD.percent_change_30d}</span>
      </PriceItem>
      <PriceItem>
        <span>percent change</span> 
        <span>1년전</span>
        <span className="pointer">{priceDatase?.quotes.USD.percent_change_1y}</span>
      </PriceItem>
    </PriceCotainer>}

    </>

  )
}

export default Price;