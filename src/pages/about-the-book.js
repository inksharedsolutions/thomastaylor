import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'thomas-taylor-m-d',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Thomas Taylor, M.D."/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Working with weight`,
                                    spanTitle: 'overcoming obesity',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>This book addresses in a comprehensive and understandable manner for the lay public the causes of weight gain and its treatment. Americans spend forty million dollars per year on weight-reducing products and techniques, but few understand the fundamental nature of the problem or the relative strategies that are available to achieve optimal health and weight.</p>
                                    <p>The issues underlying energy intake and expenditure are described, and the efficacy of the most widely used diets are compared and contrasted. The psychological and physical issues relating to weight control are described, and socioeconomic factors are evaluated. Information is also provided about the pros and cons of surgical procedures and the most effective outcomes. The technological revolution of the past fifty years has led to Americans leading a more sedentary lifestyle, which has resulted in a new pattern of diseases that are now, for the first time, threatening to reduce life expectation.</p>
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/working-with-weight-md-thomas-taylor/1139421658?ean=9781648954016',
                                        amazon :'https://www.amazon.com/Working-Weight-M-D-Thomas-Taylor-ebook/dp/B094BX6Q3F/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1621273600&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Working-Weight-Overcoming-Thomas-Taylor/dp/1648954006/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1621273600&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/working-with-weight-md-thomas-taylor/1139421658?ean=9781648954009',
                                        booksamillion:'https://www.booksamillion.com/p/Working-Weight/Thomas-Taylor/9781648954009?id=8238323095674&_ga=2.229256159.2127409932.1624656705-1205166702.1623175305',
                                    },
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;