

import Editor from "./components/Editor";
import Fluid from "./components/Fluid";

import Hero from "./components/Hero";
import Vita from "./components/Vita";
import Product from './components/Product'
import FeaturePost from "./components/FeaturePost";
// import Cart from "./components/Cart/Cart         ";

export default function Home() {
  return (
   <div>
 
    <Hero/>
    <Editor/>
    <Product/>
    <Vita/>
    <Fluid/>
    <FeaturePost/>
    
   </div>
  );
}
