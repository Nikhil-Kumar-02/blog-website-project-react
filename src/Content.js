import React, { useContext } from "react"
import { AppContext } from "./Context";

const Content = (props) => {
  
    const {blogs , loading} = useContext(AppContext);

    return (
        <div className="content"> 
            {
                loading ? (
            <div className="custom-loader"></div>
        ) : (
            blogs.map( (blog) => {
                return (
                    <div>
                        <h3>{blog.title}</h3>
                        <p>by {blog.author} on {blog.category}</p>
                        <p>{blog.date}</p>
                        <p>{blog.content}</p>
                        <div>
                        {
                            blog.tags.map( (tag) => {
                                return <span>#{tag} </span>
                            })
                        }
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                )
            })
        )
            }
        </div>
    );

};

export default Content;
