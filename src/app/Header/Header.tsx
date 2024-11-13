import { BiLogoBitcoin } from "react-icons/bi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
export default function Header(){
    return(
        <div className="ParentHeader">
<div className="ChildHeader">
    <h1 className="bitahmed">Bit<span>Ahmed</span></h1>
    <ul>
    <a href="/"><li className="home">Home</li></a>
       <a href="#Hot"><li className="market">Market</li></a>
      <a href="#Gain"><li className="coins">Coins</li></a>
   <a href="#New"> <li className="search">New Listing</li></a>
        <button><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqQstWwrqWkzqlPwqdrNrfpfRcSPtMSTMRVsNXSCjNfDMHMsJdqdFvnnRzHpxFjqdQPL">Hire Me</a></button>
    </ul>
    <BiLogoBitcoin className="bitcoinlogo"/>
</div>
<BsFillMenuButtonWideFill className="menu"/>
        </div>
    )
}