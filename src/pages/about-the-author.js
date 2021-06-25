import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Thomas Taylor, M.D."/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                {/* “Sounds a lot like God to me”.  */}
                                </h4>
                                
                                <span className="ata-span-fx">
                                {/* "Our bodies are like used cars that we can't trade in." */}
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" id="author">

                            <p>
                            Tom Taylor grew up in England, attended the universities of Edinburgh and Manchester, trained as a surgeon, and practiced surgery and surgical research in Manchester and Houston, Texas. He has written ten books, including Surgical Gastroenterology, Upper Digestive Surgery, Case Studies in General Surgery, Pelvic Pouch Procedures, and Lifestyle and Longevity. He also wrote four monographs on individual operative surgical procedures and has written over two hundred scientific papers and ten US patents. 
                            </p>


                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Thomas Taylor, M.D.
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;