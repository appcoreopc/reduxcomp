import React, { Component, PropTypes } from 'react'

export default class InfoBox extends Component {

  constructor(props) {
    super(props)

  }
  
componentDidMount()
{
}


// figcaptionText, imageSrc, width, height, text, url, urltext 

render() {

    const { figcaptionText, imageSrc, width, height, text, url, urltext  } = this.props

    return (
      <article className="photo active exposed masonry-brick">
        
        <div className="post-wrapper clearfix">
         <section> 
     
            <figure className="post-content high-res with-caption"> 
                <div className="photo-wrapper-inner">
                  <img className='picturePerfect' src={imageSrc} />
                </div>
            </figure> 

            <figcaption className="caption"> 
               {figcaptionText}
            </figcaption> 

            <div className="captionText">
              {text}
            </div>
     
            <section className="inline-meta post-extra">
           </section>
     
         </section>

         <section className="panel">
        
          <footer className="post-footer">
                <section className="inline-meta date-notes">
                  <div className="date-note-wrapper">
                     <a href={url} className="meta-item post-notes">{urltext}</a>
                   </div>
                </section>

                <section className="post-controls">
                  <div className="control-wrapper">
                    <div className="control share-control">
                        <nav className="pop">
                          <ul>
                             <li> 
                                <img src='fav.png' className="imageNav"/>
                                <img src='fav.png' className="imageNav"/>
                             </li> 
                          </ul>
                        </nav>
                     </div>
                  </div>
                </section>
              </footer>
         </section>
         </div>
     </article>
    )
  }
}