import React from 'react';
import Image2 from "../template/image/me2.png";
function Home() {
                    return (
                      <>
                        {/* <div className="main_content"> */}
                        <header className="w3-container  ">
                          <div className="content">
                            {" "}
                            <h1 className="w3-jumbo">
                              <span className="w3-hide-small">I'm</span> LALEJ
                              Mehdi.
                            </h1>
                           
                            <h3>UX/UI Designer and Web Developer.</h3>
                          </div>
                          
                          <img
                            src={Image2}
                            alt="boy"
                            className="w3-image"
                            style={{ width: 900, height: 900 , }}
                            // width={992}
                            // height={500}
                          />
                        </header>
                      </>
                      // </div>
                    );
}

export default Home;
