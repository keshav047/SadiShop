import React from "react";

import Items from "../../Component/Launched/Items";

import Cate from "../../Component/ShopByCat/Cate";
import Hero from "../../Component/Hero/Hero";
import Offpercent from "../../Component/Offpercent/Offpercent";
import FiveCart from "../../Component/FiveCart/FiveCart";
import Customer from "../../Component/Customer/Customer";


function Home() {
  return (
    <>
      <Hero />
      <Cate />
      <Items />

      <FiveCart />
      <Offpercent />
      <Customer />
     
    </>
  );
}

export default Home;
