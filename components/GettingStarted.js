import React, { Component, PropTypes } from 'react'

export default class GettingStarted extends Component {

constructor(props) {
  super(props)
  this.state = {
     imageIdx : 0
  }
}

handleKey(e) 
{

    var idx = this.state.imageIdx
    
    if (idx < this.props.images.length)
    { 
      let imgLink = this.props.images[idx]
      var img = this.refs.imagebox 
      img.src = imgLink;

      let idxVal = 0

      if (idx == this.props.images.length - 1)
        idxVal = 0
      else 
        idxVal = idx + 1

      this.setState({ 
        imageIdx : idxVal
      })
    }
    
}

// figcaptionText, imageSrc, width, height, text, url, urltext 
render() {

    const { figcaptionText, imageSrc, width, height, text, url, urltext, images } = this.props

    return (
      <article className="photo active exposed masonry-brick">
        
        <div className="post-wrapper clearfix" onClick={(e) => {this.handleKey(e)}}>
         <section> 
     
            <figure className="post-content high-res with-caption"> 
                <div className="photo-wrapper-inner">
                  <img className='picturePerfect' src={imageSrc} ref='imagebox' />
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