'use client';
import { useEffect, useState } from "react";

export default function Lose() {
    const ApiKey = "06cade53bd56fb49abeb566fcf17ea99";
    const [search, setSearch] = useState("");
  const [data, setData] = useState<any>(null);
  useEffect(() =>{
    fetch(`http://api.coinlayer.com/live?access_key=${ApiKey}`)
    .then((response) => response.json())
    .then((jsonConverted)=>{
        console.log("JSON Converted Data :", jsonConverted)
        setData(jsonConverted);
    })
  },[]);
  return (
    <div className="ParentMarket3" id="Lose">
        <div className="ChildMarket3">
   <ul>
   <a href="#Hot"><li className="hot">Hot</li></a>
   <a href="#Gain"><li className="gainers">Gainers</li></a>
 <a href="#Lose"><li className="losers">Losers</li></a>
   <a href="#New"> <li className="new">New</li></a>
   </ul>
   <ul className="coins17">
<li className="coin17">ARDR</li>
<li className="dollar17">{data?.rates?.ARDR}</li>
<li className="pkr17">₨29,51.</li>
<li className="plus17">-2.83%</li>
   </ul>
   <ul className="coins18">
<li className="coin18">BCH</li>
<li className="dollar18">{data?.rates?.BCH}</li>
<li className="pkr18">₨120,781,14.</li>
<li className="plus18">-10.83%</li>
   </ul>
   
   <ul className="coins19">
<li className="coin19">ETH</li>
<li className="dollar19">{data?.rates?.ETH}</li>
<li className="pkr19">₨875,871,19.</li>
<li className="plus19">-3.83%</li>
   </ul>
     
   <ul className="coins20">
<li className="coin20">LTC</li>
<li className="dollar20">{data?.rates?.LTC}</li>
<li className="pkr20">₨21,336,71.</li>
<li className="plus20">-5.83%</li>
   </ul>
   
   <ul className="coins21">
<li className="coin21">LINK</li>
<li className="dollar21">{data?.rates?.LINK}</li>
<li className="pkr21">₨3,951,16.</li>
<li className="plus21">-3.83%</li>
   </ul>
   <ul className="coins22">
<li className="coin22">NMR</li>
<li className="dollar22">{data?.rates?.NMR}</li>
<li className="pkr22">₨4,698,52.</li>
<li className="plus22">-4.83%</li>
   </ul>
   <ul className="coins23">
<li className="coin23">MKR</li>
<li className="dollar23">{data?.rates?.MKR}</li>
<li className="pkr23">₨413,472,08.</li>
<li className="plus23">-2.83%</li>
   </ul>
   <ul className="coins24">
<li className="coin24">QTUM</li>
<li className="dollar24">{data?.rates?.QTUM}</li>
<li className="pkr24">₨772,66.</li>
<li className="plus24">-4.83%</li>
 </ul>
      </div>
    </div>
  );
}
