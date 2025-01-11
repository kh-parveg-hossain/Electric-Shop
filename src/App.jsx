import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insta from "./components/Insta";
import ProducrGrid from "./components/ProducrGrid";
import Review from "./components/Review";
import Services from "./components/Services";
import Types from "./components/Types";



export default function App() {
  return (
    <>
    <Header/>
    <Hero/> 
    <Category/> 
   <Types/>
    <Services/>
    <ProducrGrid/>
    <Banner/>
    <Review/>
    <Insta/>
    <Footer/>
    </>
  )
}