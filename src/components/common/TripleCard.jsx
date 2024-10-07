import { GhostIcon } from "./GhostIcon"


export const TripleCard = () => {
    return (
        <>
            <div className="container">
                <div className=" bg-dark my-4 border border-dark "></div>
            </div>

            <div className="card-group container gap-2 mb-4">

                {/* card-1 */}
                <div className="card border-0">

                    <img src={"https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264797/ghostImage2_ken5hq.jpg?_s=public-apps"}
                        className="card-img-top rounded" alt="fl_preserve"
                    />

                    <div className="card-body p-0 mt-2  d-flex flex-column ">
                        <p className="text-primary m-0 " style={{ fontSize: "1.4em" }}>GETTING STARTED</p>

                        <h5 className="card-title fw-bold d-flex align-items-center gap-2">
                            Writing posts with Ghost
                            <img src="https://www.svgrepo.com/show/433977/writing-hand.svg" alt="hand" className="" style={{ maxHeight: "1.7rem" }} />
                        </h5>


                        <p className="card-text p-0">Discover familiar formatting options in a toolbar and the ability to add dynamic content seamlessly.</p>
                    </div>
                    <GhostIcon minute={3} />

                </div>

                {/* card-2 */}
                <div className="card border-0 ">
                    <img src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264797/ghostImage3_smh9dh.jpg?_s=public-apps"
                        className="card-img-top rounded"
                        alt="fl_preserve" />
                    <div className="card-body p-0 mt-2 d-flex flex-column ">
                        <p className="text-primary m-0 card-link" style={{ fontSize: "1.4em" }}>GETTING STARTED</p>
                        <h5 className="card-title fw-bold">Publishing options</h5>
                        <p className="card-text">The Ghost editior post settings menu has everything you need to fully optimize and distribute your content effectively.</p>
                    </div>
                    <GhostIcon minute={2} />
                </div>

                {/* card-3 */}
                <div className="card border-0">
                    <img src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264797/ghostImage4_fqf7yz.jpg?_s=public-apps"
                        className="card-img-top rounded" alt="fl_preserve" />
                    <div className="card-body p-0 mt-2 d-flex flex-column ">
                        <p className="text-primary m-0 card-link" style={{ fontSize: "1.4em" }}>GETTING STARTED</p>
                        <h5 className="card-title fw-bold">Managing Admin Setting</h5>
                        <p className="card-text">There are a couple of things to do next while you are getting set-up: making your site private and inviting your team.</p>
                        <GhostIcon minute={2} />

                    </div>
                </div>
            </div>


        </>
    )
}