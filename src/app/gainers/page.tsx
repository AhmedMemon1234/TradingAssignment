'use client';
import { useEffect, useState } from "react";

interface Rates {
   [key: string]: number;
 }
 
 interface ApiResponse {
   rates: Rates;
 }
export default function Gain() {
    const ApiKey = "ee96952a5ee830a7198a0bc13b6c75fb";
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
    <div className="ParentMarket2" id="Gain">
        <div className="ChildMarket2">
        <ul>
   <a href="#Hot"><li className="hot">Hot</li></a>
   <a href="#Gain"><li className="gainers">Gainers</li></a>
 <a href="#Lose"><li className="losers">Losers</li></a>
   <a href="#New"> <li className="new">New</li></a>
   </ul>
   <ul className="coins9">
<li className="coin9">DASH</li>
<li className="dollar9">{data?.rates?.DASH}</li>
<li className="pkr9">₨7,230,32.</li>
<li className="plus9">+2.83%</li>
   </ul>
   <ul className="coins10">
<li className="coin10">DCR</li>
<li className="dollar10">{data?.rates?.DCR}</li>
<li className="pkr10">₨3,800,14.</li>
<li className="plus10">+10.83%</li>
   </ul>
   
   <ul className="coins11">
<li className="coin11">ETH</li>
<li className="dollar11">{data?.rates?.ETH}</li>
<li className="pkr11">₨875,871,19.</li>
<li className="plus11">+3.83%</li>
   </ul>
     
   <ul className="coins12">
<li className="coin12">ETC</li>
<li className="dollar12">{data?.rates?.ETC}</li>
<li className="pkr12">₨6,399,37.</li>
<li className="plus12">+5.83%</li>
   </ul>
   
   <ul className="coins13">
<li className="coin13">LINK</li>
<li className="dollar13">{data?.rates?.LINK}</li>
<li className="pkr13">₨3,951,16.</li>
<li className="plus13">+3.83%</li>
   </ul>
   <ul className="coins14">
<li className="coin14">NMR</li>
<li className="dollar14">{data?.rates?.NMR}</li>
<li className="pkr14">₨4,698,52.</li>
<li className="plus14">+4.83%</li>
   </ul>
   <ul className="coins15">
<li className="coin15">ADA</li>
<li className="dollar15">{data?.rates?.ADA}</li>
<li className="pkr15">₨162.26</li>
<li className="plus15">+2.83%</li>
   </ul>
   <ul className="coins16">
<li className="coin16">QTUM</li>
<li className="dollar16">{data?.rates?.QTUM}</li>
<li className="pkr16">₨772,66.</li>
<li className="plus16">+4.83%</li>
 </ul>
      </div>
    </div>
  );
}
