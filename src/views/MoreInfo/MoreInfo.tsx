import React from "react";
import Linting, {LintingProps} from "../../components/global/Linting/Linting";
import Features from "./Features/Features";
import Header from "./Header/Header";
import ScrollContainer from "react-indiana-drag-scroll";

const items: LintingProps[] = [
  {
    id: 8546,
    title: "Flawless Transaction",
    content:
      "It connects fiat, cryptocurrency and digital assets to all and removes any middleman or centralized financial institution, thus providing much faster and secured transactions with very low fees.",
    thumb: "/images/Spring_Fat_Tall_L 1 (1).png",
    lists: [
      "Connectivity across payments networks",
      "Transactions done in seconds",
      "Low operational and liquidity costs",
    ],
  },
  {
    id: 5324,
    title: "Unmatched Speed",
    content:
      "Protect your financial information. Kaichain ensures your activity history and balances are private, a level of security you can count on. Transactions are instantly confirmed by validators.",
    thumb: "/images/Torus_3x_Knot_R Shadowless 1 (1).png",
    lists: [
      "Up to 1000x faster than Ethereum blockchain",
      "Traceable transactions yet private",
      "Inflation Proof",
    ],
  },
];

function MoreInfo() {
  return (
    <div>
      <Header />
      <div className="relative z-0">
        <div className="lg:mb-0 mb-10">
          <ScrollContainer>
            <Features />
          </ScrollContainer>
        </div>
        <Linting items={items} />
      </div>
    </div>
  );
}

export default MoreInfo;
