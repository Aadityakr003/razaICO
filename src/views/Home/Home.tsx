import React from "react";
import Header from "./Header/Header";
import Linting, {LintingProps} from "../../components/global/Linting/Linting";
import Statusbar from "./Statusbar/Statusbar";
import BuildFor from "./BuildFor/BuildFor";
import Technology from "./Technology/Technology";

const items: LintingProps[] = [
  {
    id: 5324,
    title: "Kaichain",
    subtitle: "The Sustainable Solution",
    content:
      "Blockchain adoption, though increasing rapidly, is still in its infancy. With less than 5% of the global population using cryptos and even a lesser amount in GameFi, the stresses and load on even the most advanced blockchain ecosystems are being felt. Kaichain will help sustain those loads.",
    thumb: "/images/Spring_Fat_Tall_L 1.png",
  },
  {
    id: 8567,
    title: "Built To Last",
    content:
      "Blockchain adoption, though increasing rapidly, is still in its infancy. With less than 5% of the global population using cryptos and even a lesser amount in GameFi, the stresses and load on even the most advanced blockchain ecosystems are being felt. Kaichain will help sustain those loads.",
    thumb: "/images/Torus_3x_Knot_R Shadowless 1.png",
  },
];

function Home() {
  return (
    <div>
      <Statusbar />
      <Header />
      <Linting items={items} />
      <BuildFor />
      <Technology />
    </div>
  );
}

export default Home;
