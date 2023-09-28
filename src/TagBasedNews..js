import React, { useContext , useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";
import BlogCard from "./BlogCard";

const TagBasedNews = () => {
    const navigate = useNavigate();
    const {currtag , blogs , loading} = useContext(AppContext);

    useEffect(() => {
        // Scroll to the top of the page when the route changes
        window.scrollTo(0, 0);
      }, [navigate]);

  return (
    <div>
      {
        loading ? (
          <div className="custom-loader"></div>
        ) : (
          <div>
            <button className="eachArticleBackButton" onClick={()=>
              navigate(-1)
            }>Back</button>
            <div className="content">
              <h1>News on the Topic : {currtag}</h1>
              <br></br>
              <br></br>
              {
                blogs.map((blog , index)=>{
                    return (
                        blog.tags.map((tag)=>{
                            return (
                                tag === currtag &&
                                <BlogCard blog={blog} index={index}></BlogCard>
                            )
                        })
                    )
                })
              }
            </div>
          </div>
        )
      }
    </div>
  )
};

export default TagBasedNews;
