import React from "react";
// import { useNavigate } from "react-router-dom";
import ComputerCart from "../components/ComputerCard";
import GameCart from "../components/GameCard";
import PhoneCard from "../components/PhoneCard";

function Home() {
  // const navigate = useNavigate();

  return (
    <div class="flex flex-wrap flex-col gap-6 mt-16">
      <ComputerCart />
      <GameCart />
      <PhoneCard />
    </div>
  );
}

export default Home;
