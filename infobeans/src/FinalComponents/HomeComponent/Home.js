// import AboutImages from "./components/AboutImages";
import Founders from "./Founders";
// import Items from "./components/Items";
import Slide from "./Slide";
import Vid from "./Vid";
import Form from "./Form";
// import Placements from "./components/Placements"; 
// import ContentSlider from "./components/Contentslide";
import Studentdata from "./Studentdata";
import InfoAbout from "../../components/InfoAbout";
import Count from "./Count";
import Center from "./Center";
import Trainers from "./Trainers";
import Partners from "./Partners";
import Achivement from "./Achivement";
import Demo from "../../components/Demo";
import CourseSection from "./CourseDetail";
import Placements from "./Placements";
function Home() {
    return <>
        <div className="div-home container-fluid">
            <Slide />
            <CourseSection />
            <Vid />
            <Founders />
            <Partners />
            <Placements/>
            <Form />
            <Trainers />
            <Studentdata />
            <Count />
            <Center />
            <Achivement />
        </div>
    </>
}

export default Home;

