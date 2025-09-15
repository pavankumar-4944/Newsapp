import React, { Component } from 'react'

class Newsitem extends Component{
  render(){
        const {title,description,imageurl,newsurl,author,date,src}=this.props;
    return (
      <div className="my-3">
      <div className="card">
        <div>
          <span className=" badge rounded-pill bg-danger" style={{justifyContent:'flex-end',position:'absolute',display:'flex',right:'0'} }>
    {src}</span>

        </div>
  <img src={!imageurl?"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2025-06/0197ad16-3594-7998-b1de-5b68709533c2":imageurl} className="card-img-top "  alt="none"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

      </div>
    )
  }
}


export default Newsitem
