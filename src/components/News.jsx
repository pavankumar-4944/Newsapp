import React, { Component, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import { useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
const News = (props)=> {
  const [articles,setarticles]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);

  const capitalizeFirstLetter=(val)=> {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
 
  const updateNews = async ()=>{
    props.setProgress(10);
 const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf4922edd4684ff58de0d7f8da132bb9&page=1&pageSize=${props.pageSize}`;
  
    setloading(true);
    let data = await fetch(url);
        props.setProgress(30);         
    console.log(data);
    let parsedata = await data.json();
        props.setProgress(70);
        setarticles(parsedata.articles)
        settotalResults(parsedata.totalResults)
        setloading(false)

    console.log(parsedata);
   
     props.setProgress(100);
  }
  useEffect(()=>{
    document.title=`${capitalizeFirstLetter(props.category)} - News`;
    updateNews();
  },[])
 
 const onPrevious = async () => {
 setpage(page-1);
  updateNews();
  };
  const onNext = async () => {
    setpage(page+1);                                                          cxxxxxx
    updateNews();
  };
  const fetchMoreData= async ()=>{ 
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf4922edd4684ff58de0d7f8da132bb9&page=${page+1}&pageSize=${props.pageSize}`;
     setpage(page+1);
    let data = await fetch(url);
    console.log(data);
    let parsedata = await data.json();
    console.log(parsedata);
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
  }
 
    return (
      <>
        <h1 className="text-center" style={{margin:"35px 0px", marginTop:"90px"}}>News - Top  {capitalizeFirstLetter(props.category)}  Headlines </h1>
         <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length!==totalResults}
    loader={<Spinner/>}>
      <div className="container">
        <div className="row">
          { articles.map((ele, idx) => {
              return (
                <div key={idx} className="col-md-4">
                  <Newsitem
                    title={ele.title}
                    description={ele.description}
                    imageurl={ele.urlToImage}
                    newsurl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    src={ele.source.name}
                  />
                </div>
              )
            })}
          </div>
         </div>
          </InfiniteScroll>

      </>
      
    );

}

 News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: "business",
  };
  News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

export default News;
