
export const GhostIcon = ({ minute, status = undefined }) => {
    return (
        <div>
            <div className="d-flex container  mt-4 p-0">
                <div className="row-auto gap-1 d-flex " >
                    <div className=" col-3 " >

                        <img src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264799/smallLogo_fmjzvk.jpg?_s=public-apps"
                            alt="Hamburger-icons" className="img-fluid" style={{ maxHeight: `4rem` }} />

                    </div>
                    <div className="col-auto lh-1 ">
                        <div className="d-flex flex-column justify-content-center h-100" >
                            <div className="text-dark ">
                                <small className="fw-bold ">Ghost</small>
                                
                            </div>

                            <div className="text-secondary"><small> 25 FEB 2024 . {minute} MIN {status ?? status} </small></div>
                            <div className="text-secondary"><small className="">{!status ? "READ" : ""} </small></div>
                            {/* <small className=" text-decoration-none">{!status ? "READ" : ""} </small> */}


                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}