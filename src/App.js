import './App.css';
import Nav from "./Nav";
import Hero from "./Hero";
import Content from "./Content";
import Middle from "./Middle";
import MiddleBelow from "./MiddleBelow";
import MiddleBelowBelow from "./MiddleBelowBelow";
import MiddleBelowBelowBelow from "./MiddleBelowBelowBelow";
import SvgPhoto from "./SvgPhoto";
import Footer from "./Footer";

function App() {
    return (
        <>
            <Nav/>
            <Hero/>
            <Content/>
            <Middle />
            <MiddleBelow />
            <MiddleBelowBelow />
            <MiddleBelowBelowBelow />
            <SvgPhoto />
            <Footer />
        </>
    );
}

export default App;
