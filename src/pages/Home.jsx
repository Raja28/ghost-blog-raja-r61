import { DoubleCard } from "../components/common/DoubleCard"
import { GhostIcon } from "../components/common/GhostIcon"
import { Header } from "../components/common/Header"
import { TripleCard } from "../components/common/TripleCard"

export const Home = () => {
    return (

        <>
            <div className="w-100 d-flex flex-column align-items-center justify-content-center text-light " style={{ background: "#2D2D2D", height: "22rem" }}>
                <div className="borde " style={{ height: "4.5rem" }}>
                    <img src="https://speckyboy.com/wp-content/uploads/2017/06/host-thumb.jpg"
                        alt="middleLogo" className="w-100 h-100 object-fit-cover" />
                    <div className="d-flex justify-content-center fs-5">
                        <p className="">Thoughts, Stories & ideas</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mt-3 d-lg-flex gap-4">
                    {/* left */}
                    <div className="" style={{ height: "22rem", minWidth: "60%" }}>
                        <img src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264798/ghostImage1_xt6wb5.jpg?_s=public-apps"
                            alt="ghostImage1_xt6wb5" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    {/* right */}
                    <div className=" d-flex flex-column justify-content-between align-items-lg-start align-items-center" style={{ minWidth: '35%', }}>
                        <div className="d-flex flex-column align-items-lg-start align-items-center">
                            <p className="text-primary m-0" style={{ fontSize: "1.4em" }}>GETTING STARTED</p>
                            <p className=" fw-bold m-0" style={{ fontSize: "1.8em" }}>Welcome to Ghost</p>
                        </div>
                        <div className="text-secondary  ">
                            <p className="" style={{ font: "1.5vw" }}>
                                Welcome, it's great to have you here.<br />
                                We know that first impressions are <br />
                                important, so we've populated your new <br />
                                site with some initial getting started <br />
                                posts that will help you get familiar with <br />
                                everything in no time.
                            </p>
                        </div>
                        <GhostIcon minute={3} />
                    </div>
                </div>
            </div>

            {/* section-2 */}
            <TripleCard min={3} />

            {/* section-3 */}
            <DoubleCard />
            
        </>



    )
}