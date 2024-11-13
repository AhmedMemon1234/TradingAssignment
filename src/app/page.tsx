import Image from "next/image";
import Market from "./market/page";
import Gain from "./gainers/page";
import Lose from "./Losers/page";
import New from "./New/page";
import Footer from "./Footer/Footer";
export default function Home(){
  return(
    <div className="Parent">
      <div className="Child">
      <Image src={"/bitcoin.jpg"} alt="Ahmed" width={400} height={100} className="bitcoinimg"/>
     <h1 className="headingmain">Big Level <br /><span>Crypto</span> Markets <br /> For Trade<span> On Binance</span></h1>
      <p className="paragraph">Trading is the act of buying and selling financial assets such as stocks or cryptocurrencies to profit from market price fluctuations.</p>
      <button className="Explore"><a href="#Hot">Explore Market</a></button>
      <Image src={"/mobile.png"} alt="Ahmed" width={300} height={100} className="mobileimg"/>
      </div>
      <Market/>
      <Gain/>
      <Lose/>
      <New/>
      <Footer/>
    </div>
  )
}