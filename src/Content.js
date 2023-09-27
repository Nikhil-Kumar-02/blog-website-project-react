import React, { useContext } from "react"
import { AppContext } from "./Context";
import BlogCard from "./BlogCard";

const Content = (props) => {
  
    const {blogs , loading} = useContext(AppContext);

    return (
        <div className="content"> 
            {
                loading ? (
            <div className="custom-loader"></div>
        ) : (
            blogs.map( (blog,index) => {
                return (
                    <BlogCard key={blog.id} blog={blog} index={index}></BlogCard>
                )
            })
        )
            }
        </div>
    );

};

export default Content;
