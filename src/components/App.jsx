import '../styles/app.css'
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar" 
import Main from "./Main";
import Home from "./Home";

function App() {
    return (
        <>
            <NavBar />
            <Home />
            {/* <div id="main">
                <SideBar />
                <Main />
            </div> */}
        </>
    );
}

export default App;