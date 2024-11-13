'use client';
import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";

interface Rates {
   [key: string]: number;
 }
 
 interface ApiResponse {
   rates: Rates;
 }
export default function Market() {
  const ApiKey = "06cade53bd56fb49abeb566fcf17ea99";
  const [search, setSearch] = useState("");
  const [data, setData] = useState<ApiResponse | null>(null);
  useEffect(() =>{
    fetch(`https://api.coinlayer.com/live?access_key=${ApiKey}`)
    .then((response) => response.json())
    .then((jsonConverted)=>{
        console.log("JSON Converted Data :", jsonConverted)
        setData(jsonConverted);
    })
  },[]);
  return (
    <div className="ParentMarket" id="Hot">
        <div className="ChildMarket">
            <MdSearch className="icon"/>
      <input
        type="text"
        placeholder="Search For A Coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
     className="input1" />
    <ul>
   <a href="#Hot"><li className="hot">Hot</li></a>
   <a href="#Gain"><li className="gainers">Gainers</li></a>
 <a href="#Lose"><li className="losers">Losers</li></a>
   <a href="#New"> <li className="new">New</li></a>
   </ul>
   <ul className="coins">
<li className="coin1">BTC</li>
<li className="dollar1">{data?.rates?.BTC}</li>
<li className="pkr1">₨21,974,562.</li>
<li className="plus1">+2.83%</li>
   </ul>
   <ul className="coins2">
<li className="coin2">BNB</li>
<li className="dollar2">{data?.rates?.BNB}</li>
<li className="pkr2">₨172,335,19.</li>
<li className="plus2">-2.83%</li>
   </ul>
   
   <ul className="coins3">
<li className="coin3">ETH</li>
<li className="dollar3">{data?.rates?.ETH}</li>
<li className="pkr3">₨875,871,19.</li>
<li className="plus3">+3.83%</li>
   </ul>
     
   <ul className="coins4">
<li className="coin4">DOGE</li>
<li className="dollar4">{data?.rates?.DOGE}</li>
<li className="pkr4">₨77.15</li>
<li className="plus4">-5.83%</li>
   </ul>
   
   <ul className="coins5">
<li className="coin5">SOL</li>
<li className="dollar5">{data?.rates?.SOL}</li>
<li className="pkr5">₨58,654.51</li>
<li className="plus5">+1.83%</li>
   </ul>
   <ul className="coins6">
<li className="coin6">THETA</li>
<li className="dollar6">{data?.rates?.THETA}</li>
<li className="pkr6">₨405.52</li>
<li className="plus6">-4.83%</li>
   </ul>
   <ul className="coins7">
<li className="coin7">ADA</li>
<li className="dollar7">{data?.rates?.ADA}</li>
<li className="pkr7">₨162.26</li>
<li className="plus7">+2.83%</li>
   </ul>
   <ul className="coins8">
<li className="coin8">ARDR</li>
<li className="dollar8">{data?.rates?.ARDR}</li>
<li className="pkr8">₨28.45</li>
<li className="plus8">-4.83%</li>
 </ul>
      </div>
    </div>
  );
}
