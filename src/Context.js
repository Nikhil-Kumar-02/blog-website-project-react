import React, { createContext, useEffect, useState } from "react"
import {baseUrl} from './url';

export const AppContext = createContext();

function AppContextProvider({children}) {

    const [currPage , setCurrPage] = useState(1);
    const [totalPage , setTotalPage] = useState(null);
    const [blogs , setBlogs] = useState([]);
    const [loading , setLoading] = useState(true);
    const [articleId , setArticleId] = useState(0);
    const [currtag , setTag] = useState("AI");

    async function getAllBlogs(){
        
        try {
            setLoading(true);

            const newUrl = `${baseUrl}?page=${currPage}`
            console.log(newUrl);

            //now get the data
            let response = await fetch(newUrl);
            response = await response.json();
            console.log(response);

            setCurrPage(response.page);
            setTotalPage(response.totalPages);
            setBlogs(response.posts);

            
            setLoading(false);
        } catch (error) {
            console.log(error);
            setCurrPage(1);
            setTotalPage(null);
            setBlogs([]);
            setLoading(false);
        }
        
    }

    function movetoNewPage(newPage){
        setCurrPage(newPage);
    }

    useEffect( ()=>{
        getAllBlogs();
    } , [currPage] );

    const alldata = {
        currPage,
        movetoNewPage,
        totalPage,
        loading,
        blogs,
        articleId,
        setArticleId,
        setTag,
        currtag
    }

    return <AppContext.Provider value={alldata}>{children}</AppContext.Provider>

};

export default AppContextProvider;
