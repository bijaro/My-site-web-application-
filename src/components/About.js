import React from 'react';
import cV from '../template/image/cv.png'
import cV2 from '../template/image/cV2.png'
import cV3 from '../template/image/cv3.png'

export default function About() {

                    return (<div className="about">
                      <>
                        <img src={cV3} alt='cv' style={{height:200,width:900}} />
                        <img src={cV} alt='cv'
                          style={{ height:900, width:900 }}
                        />
                        <img src = {cV2} alt ='cv2'
                         style={{ height:900, width:900 }} />
                      </>
  </div>)
}
