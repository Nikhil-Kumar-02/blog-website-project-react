import React, { useContext , useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";

const BlogCard = (props) => {
    let blog = props.blog;
    const index = props.index;
    const fullArticle = props.fullArticle;

    const navigate = useNavigate();
    const {setArticleId,setTag} = useContext(AppContext);

    useEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo(0, 0);
    }, [navigate]);

  return (
    <div>
        <h3 onClick={()=>{
          setArticleId(index);
          console.log(index);
          navigate('/expand_blog');
        }} className="content-newsHeading">{blog.title}</h3>
        <p>by {blog.author} on <span className="content-category" onClick={(e)=>{
          setTag(e.target.innerHTML);
          navigate("/tag");
        }}>{blog.category}</span></p>
        <p>{blog.date}</p>
        <br></br>
        <div>{fullArticle ? (blog.content) : (`${blog.content.substring(0,150)}  .... `)}</div>
        <br></br>
        <div>
        {
            blog.tags.map( (tag,index) => {
                return <span onClick={(e)=>{
                  console.log(tag);
                  setTag(tag);
                  navigate("/tag");
                }} key={index} className="content-tag">#{tag} </span>
            })
        }
        </div>
        <br></br>
        <br></br>
    </div>
  )
};

export default BlogCard;
