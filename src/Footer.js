import { useContext } from "react";
import { AppContext } from "./Context";

const Footer = (props) => {
  const {movetoNewPage,currPage,totalPage} = useContext(AppContext);

  return (
    <div className="footer">
      <div>
        {
          currPage < totalPage && 
          <button onClick={() => {
            movetoNewPage(currPage+1);
          }}>Next Page</button>
        }
        {
          currPage > 1 && 
          <button onClick={()=>{
            movetoNewPage(currPage-1);
          }}>Previous Page</button>
        }
      </div>
      <div>{currPage} OF {totalPage}</div>
    </div>
  );
};

export default Footer;
