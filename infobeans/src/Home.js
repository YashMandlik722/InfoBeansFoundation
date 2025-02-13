// import AboutImages from "./components/AboutImages";
import Founders from "./components/Founders";
// import Items from "./components/Items";
import Slide from "./components/Slide";
import Vid from "./components/Vid";
import Form from "./components/Form";
// import Placements from "./components/Placements"; 
// import ContentSlider from "./components/Contentslide";
import Studentdata from "./components/Studentdata";
import InfoAbout from "./components/InfoAbout";
import Count from "./components/Count";
import Center from "./components/Center";
import Trainers from "./components/Trainers";
import Partners from "./components/Partners";
import Achivement from "./components/Achivement";
// import Demo from "./components/Demo";
function Home(){
    return <div className="div-home container-fluid">
  
    {/* <ContentSlider/> */}
    <Slide />
    {/* <Demo/> */}
    <Vid />
    <InfoAbout />
    {/* <Placements/> */}
    <Founders />
    <Partners />
    <Form />
    <Trainers />
    <Studentdata />
    <Count/>
    <Center />
    <Achivement />
    </div>
}

export default Home ;

