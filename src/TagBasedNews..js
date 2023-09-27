import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";
import BlogCard from "./BlogCard";

const TagBasedNews = (props) => {
    const navigate = useNavigate();
    const {currtag , blogs} = useContext(AppContext);
  return (
    <div>
      <button onClick={()=>
        navigate(-1)
      }>Back</button>
      <div>
        <h1>news on the clicked feild</h1>
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
};

export default TagBasedNews;
