import React from 'react'



const BookInfo = (props)=>{
    return(
        <>
            <div className="columns book-container-ft">
                <div className="column"> 
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>

                <div className="column" id={props.data.id}>
                    <section className="contentBook">

                        <h1>{props.data.title}</h1>
                        <span>{props.data.spanTitle}</span>
                        {/* <p>
                            {props.data.content}
                        </p> */}
                        <div className="content-body"
                            dangerouslySetInnerHTML={{__html: `${props.data.content}`}} />
                    </section>

                    <section className="fullSection">
                        <nav className="booklinkBlocks">
                            <span>Ebook :</span>

                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.amazon}>Amazon</a></li>
                            { props.data.ebooks.stratton.length > 0 && (
                                <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.stratton}>Stratton Press</a></li>
                            )}
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.barnes}>Barnes & Noble</a></li>

                        </nav>

                        <nav className="booklinkBlocks">
                            <span>Paperback :</span>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.amazon}>Amazon</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.barnes}>Barnes & Noble </a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.booksamillion}>Books A Million</a></li>
                        </nav>
                    </section>
                </div>	
            </div>
        </>
    )
} 

export default BookInfo;