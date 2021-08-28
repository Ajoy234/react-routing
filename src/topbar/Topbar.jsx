import "./topbar.css"
import { Link } from "react-router-dom"

export default function Topbar() {
    return (
        <div className="topbar">
            
            <div className="topbarItemLeft">

                <ul className="topbarListMenu">

                    <Link className="abc" to="/">
                    <li className="topbarList">Home</li>
                    </Link>
                    <Link className="abc" to="/about">
                    <li className="topbarList">About</li>
                    </Link>
                    <Link className="abc" to="/skill">
                    <li className="topbarList">Skill</li>
                    </Link>
                </ul>
            </div>
            
            
            
        </div>
    )
}
