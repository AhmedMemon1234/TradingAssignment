'use client';
import { useEffect, useState } from "react";

interface Rates {
   [key: string]: number;
 }
 
 interface ApiResponse {
   rates: Rates;
 }
export default function New() {
    const ApiKey = "512fe58c239bbb5cf6a45146a5fe0487";
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
    <div className="ParentMarket4" id="New">
        <div className="ChildMarket4">
        <ul>
   <a href="#Hot"><li className="hot">Hot</li></a>
   <a href="#Gain"><li className="gainers">Gainers</li></a>
 <a href="#Lose"><li className="losers">Losers</li></a>
   <a href="#New"> <li className="new">New</li></a>
   </ul>
   <ul className="coins25">
<li className="coin25">ARDR</li>
<li className="dollar25">{data?.rates?.ARDR}</li>
<li className="pkr25">₨29,51.</li>
<li className="plus25">+2.83%</li>
   </ul>
   <ul className="coins26">
<li className="coin26">BCH</li>
<li className="dollar26">{data?.rates?.BCH}</li>
<li className="pkr26">₨120,781,14.</li>
<li className="plus26">+10.83%</li>
   </ul>
   
   <ul className="coins27">
<li className="coin27">ETH</li>
<li className="dollar27">{data?.rates?.ETH}</li>
<li className="pkr27">₨875,871,19.</li>
<li className="plus27">-3.83%</li>
   </ul>
     
   <ul className="coins28">
<li className="coin28">LTC</li>
<li className="dollar28">{data?.rates?.LTC}</li>
<li className="pkr28">₨21,336,71.</li>
<li className="plus28">-5.83%</li>
   </ul>
   
   <ul className="coins29">
<li className="coin29">LINK</li>
<li className="dollar29">{data?.rates?.LINK}</li>
<li className="pkr29">₨3,951,16.</li>
<li className="plus29">+3.83%</li>
   </ul>
   <ul className="coins30">
<li className="coin30">NMR</li>
<li className="dollar30">{data?.rates?.NMR}</li>
<li className="pkr30">₨4,698,52.</li>
<li className="plus30">-4.83%</li>
   </ul>
   <ul className="coins31">
<li className="coin31">MKR</li>
<li className="dollar31">{data?.rates?.MKR}</li>
<li className="pkr31">₨413,472,08.</li>
<li className="plus31">-2.83%</li>
   </ul>
   <ul className="coins32">
<li className="coin32">QTUM</li>
<li className="dollar32">{data?.rates?.QTUM}</li>
<li className="pkr32">₨772,66.</li>
<li className="plus32">+4.83%</li>
 </ul>
 <ul className="coins33">
<li className="coin33">ACT</li>
<li className="dollar33">{data?.rates?.ACT}</li>
<li className="pkr33">₨115,6.</li>
<li className="plus33">-5.83%</li>
 </ul>
      </div>
    </div>
  );
}
