const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('banner.png')]">
            <div className="hero-content">
                <div className="text-left">
                    <h1 className="text-5xl font-bold">
                        <span className="text-3xl text-[#FCA311]">
                            LET'S WORK TOGETHER TO
                        </span>
                        <br />
                        <span className="py-3 text-white">MAKE GREAT THINGS</span>
                        <br />
                        <span className="text-[#FCA311]">POSSIBLE</span>
                    </h1>
                    <p className="py-6 text-white">
                        Ready to transform big concepts into REALITY? Explore opportunities
                        to take<br /> challenges, find solutions, and make our world better.
                    </p>
                    <button className="btn btn-warning">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
