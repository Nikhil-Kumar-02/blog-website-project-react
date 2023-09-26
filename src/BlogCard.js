import React from "react"

const BlogCard = (props) => {
    let blog = props.blog;
    const id = blog.id;

  return (
    <div>
        <h3 className="content-newsHeading">{blog.title}</h3>
        <p>by {blog.author} on <span className="content-category">{blog.category}</span></p>
        <p>{blog.date}</p>
        <br></br>
        <p>{`${blog.content.substring(0,150)}  .... `}</p>
        <br></br>
        <div>
        {
            blog.tags.map( (tag,index) => {
                return <span key={index} className="content-tag">#{tag} </span>
            })
        }
        </div>
        <br></br>
        <br></br>
    </div>
  )
};

export default BlogCard;
