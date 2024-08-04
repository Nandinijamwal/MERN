const Footer = ()=>{
    return(
    <div className="App">
      <footer className="footer">
        <div>
            <div>
                <h5 
                style={{
                    fontWeight:"400",
                    fontSize:"20px"
                }}>
                    Our Students are placed at:
                </h5>
            </div>
            <div>
                <img id="companies_img" src="/IMAGES/companies_logo.png"  alt="Companies"/>
            </div>
        </div>
        <div>
            <div className="black_f">
                <div>
                    <h1>Our Impact</h1>
                </div>

                <div>
                    <div>
                        <h1>16 LPA+</h1>
                    </div>
                    <div>
                        Avg CTC
                    </div>
                </div>

                <div>
                    <div>
                        <h1>300%</h1>
                    </div>
                    <div>
                    Avg Increment
                    </div>
                </div>

                <div>
                    <div>
                        <h1> 20,000+ </h1>
                    </div>
                    <div>
                        Student Taught
                    </div>
                </div>

                <div>
                    <img src="./IMAGES/rating.png"/>
                </div>
            </div>
        </div>
      </footer>
    </div>
    );
};

export default Footer;