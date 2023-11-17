import { AddCircleOutlineOutlined, ExploreOutlined, HomeOutlined, MoreHorizOutlined, VideocamOutlined } from "@mui/icons-material";
import "./MobileNav.css"
import { toggleModal } from "../../utils/actions";
import { useDispatch } from "react-redux";

const MobileNav = () => {
    const dispatch = useDispatch()
    return (
        <div className="mobileNav-container">
            <HomeOutlined/>
            <ExploreOutlined/>
            <VideocamOutlined/>
            <AddCircleOutlineOutlined onClick={(e) =>{dispatch(toggleModal())}}/>
            <MoreHorizOutlined/>
        </div>
    )
}

export default MobileNav;