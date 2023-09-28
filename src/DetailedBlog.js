import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";
import BlogCard from "./BlogCard";

const DetailedBlog = () => {
  const navigate = useNavigate();
  const {articleIndex , blogs} = useContext(AppContext);

  return (
    <div>
      <button className="eachArticleBackButton" onClick={()=>{
        navigate(-1);
      }}>Back</button>
      <div className="content">
        <BlogCard fullArticle={true} blog={blogs[articleIndex]}></BlogCard>
        <br></br>
        <h1>Related Feed : </h1>
        <br></br>
        {
          blogs.map((blog,index)=>{
            return (
              index!==articleIndex && 
              <BlogCard blog={blog} index={index}></BlogCard>
            )
          })
        }
      </div>
    </div>
  )
};

export default DetailedBlog;
