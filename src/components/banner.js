import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/book.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span id="color-o">
                                                Working with weight
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span>
                                             overcoming obesity
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                    This book addresses in a comprehensive and understandable manner for the lay public the causes of weight gain and its treatment. Americans spend forty million dollars per year on weight-reducing products and techniques....
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner} alt="book"/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;