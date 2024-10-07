import { GhostIcon } from "./GhostIcon"

export const DoubleCard = () => {

    return (
        <>
            <div className="container">
                <div className=" bg-dark my-4 border border-dark "></div>
            </div>

            <div className="card-group container gap-2 mb-4" >
                <div className="card border-0">
                    <img
                        src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264798/ghostImage5_mgxrty.jpg?_s=public-apps"
                        className="card-img-top img-fluid rounded"
                        alt="ghostImage5"
                    />
                    <div className="card-body p-0 mt-2 d-flex flex-column align-items-start  ">
                        <p className="text-primary m-0 card-link" style={{ fontSize: "1.4em" }}>GETTING STARTED</p>

                        <h5 className="card-title fw-bold d-flex align-items-center gap-2" style={{ height: "2rem" }} >
                            Writing posts with Ghost
                            <img src="https://www.svgrepo.com/show/433977/writing-hand.svg" alt="hand" className="h-100" />
                        </h5>
                        <p className="card-text p-0">Discover familiar formatting options in a toolbar and the ability to add dynamic content seamlessly.</p>
                    </div>
                    <GhostIcon minute={3} status={"READ"} />
                </div>
                <div className="card border-0">
                    <img
                        src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264798/ghostImage6_ezgbwj.jpg?_s=public-apps"
                        className="card-img-top img-fluid rounded"
                        alt="ghostImage6"
                    />
                    <div className="card-body p-0 mt-2 d-flex flex-column align-items-start">
                        <p className="text-primary m-0 card-link" style={{ fontSize: "1.4em" }}>GETTING STARTED</p>

                        <h5 className="card-title fw-bold">Publishing options</h5>
                        <p className="card-text p-0">The Ghost editor post setting menu has everything you need to fully optimize and distribute your content effectively.</p>
                    </div>
                    <GhostIcon minute={2} status={"READ"} />
                </div>

            </div>


        </>
    )
}