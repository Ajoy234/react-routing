import "./topbar.css"
import { Link } from "react-router-dom"

export default function Topbar() {
    return (
        <div className="topbar">
            <ul className="topbarList">

                <Link to="/">
                <li className="topbarListItem">Home</li>
                </Link>
                <Link to="/about">
                <li className="topbarListItem">About</li>
                </Link>
                <Link to="/skill">
                <li className="topbarListItem">Skill</li>
                </Link>

                
                
            </ul>
        </div>
    )
}
