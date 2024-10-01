import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Promotion } from "./components/Promotion";
import { Banner } from "./components/Banner"
import { Section } from "./components/Section";
import { Product } from "./components/Product"
import { Texts } from "./components/Texts"
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Promotion />
    <Banner/>
    <Section title="Flash Sales" subtitle="Today's"  days="03" hours="23" minutes="19" seconds="56"/>
    <Product url="https://th.bing.com/th/id/OIP.57l3_C7USNFrOIfxs0_dLAHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
    <Texts title="Browse By Category" subtitle="Categories"></Texts>
  </StrictMode>
);