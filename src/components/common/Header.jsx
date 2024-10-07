import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";

const linksObject = [
    { title: "HOME", link: "/" },
    { title: "TAG", link: "/tag" },
    { title: "AUTHOR", link: "/author" },
    { title: "HELP", link: "/help" },
]

const iconObject = [
    {
        icon: <FaFacebook />,
        link: "/facebook"
    },
    {
        icon: <FaXTwitter />,
        link: "/twitter"
    },
    {
        icon: <IoMoonSharp />,
        link: "no-route"
    }]

export const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-secondary " style={{height: "3.3rem", background: "#000814"}}>
                <div className="container-fluid">

                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-start text-bg-dark " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel" >BLOG</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>


                        <div className="offcanvas-body">
                            <ul className="navbar-nav d-flex  justify-content-between  align-items-lg-center w-100">
                                <div className="d-lg-flex flex-lg-row flex-sm-column">
                                    {
                                        linksObject.map(link => (
                                            <li className="nav-item" key={link.title}>
                                                <Link to={link.link} className="nav-link " >{link.title}</Link>
                                            </li>
                                        ))
                                    }
                                </div>
                                <div className="d-flex gap-4 fs-5 ">
                                    <div className="d-flex gap-3">
                                        {
                                            iconObject.map((icon, index) => (
                                                <li key={index}>
                                                    <Link to={icon.link} className="nav-link" >{icon.icon}</Link>
                                                </li>
                                            ))
                                        }
                                    </div>

                                    <button className="btn btn-dark border h-25 m-auto">Subscribe</button>

                                </div>

                            </ul>


                        </div>
                    </div>

                </div>

            </nav>
        </header>
    )
}