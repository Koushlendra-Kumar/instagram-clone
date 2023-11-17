import Suggestion from "../../Components/Suggestion/Suggestions"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Main from "../../Components/Main/Main"
import "./Home.css"
import MobileNav from "../../Components/MobileNav/MobileNav"

const Home = () =>{
    return (
        <div className="home">
            <Sidebar />
            <Main/>
            <MobileNav/>
            <Suggestion/>
        </div>
    )
}

export default Home;