import React,{useState} from "react";
import NavbarCustom from "../../Components/Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Cards from "../Cards/Cards";
import Betting from "../Betting/Betting"

import Footer from "../Footer/Footer";


function Home() {

  const [Card_props, setCard_props] = useState([])

  return (

    <div>
           <NavbarCustom />
          <Welcome />
          <Cards setCard_props={setCard_props} />
          <Betting Card_props={Card_props} setCard_props={setCard_props}/>
          
          
          <Footer />


    </div>
  );
}

export default Home;
