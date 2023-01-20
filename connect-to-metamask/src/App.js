import './App.css';
import { useState } from 'react';
import bgImage from './video/background-img.mp4'

function App() {

const [walletaddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log('Requesting account....');

    if(window.ethereum) {
      console.log('detected');
    
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      } 

      catch (error){
        console.log('Error connecting...');
     } 
  }

     else{ 
      alert('Meta Mask not detected');
     }
    }

  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgImage} type= "video/mp4" />
         </video>
        <header className="App-header">
        
        
        <h1><center>Metamask Connect Ethereum Blockchain</center></h1>
        <h2> <center>ReactJs</center></h2>
        <h3><center>Wallet Address:{walletaddress}</center></h3>



      
      <footer><center>Razor Sujith Developer</center> </footer>
      <h4><center><button
          onClick={requestAccount}

        >Connect Wallet </button> Click me</center> </h4>
        </header>
    </div>
      

  );
}

export default App;
