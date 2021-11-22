import "./topbar.scss"
import { Mail, LinkedIn } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">Poorva.</a>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span><a href="https://www.linkedin.com/in/poorva-pisal/" className="log">poorva-pisal</a></span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>poorva.pisal@research.iiit.ac.in</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
