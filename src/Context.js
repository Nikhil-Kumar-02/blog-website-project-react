import React, { createContext, useEffect, useState } from "react"
import {baseUrl} from './url';

export const AppContext = createContext();

function AppContextProvider({children}) {

    const [currPage , setCurrPage] = useState(1);
    const [totalPage , setTotalPage] = useState(null);
    const [blogs , setBlogs] = useState([]);
    const [loading , setLoading] = useState(true);
    const [articleIndex , setArticleIndex] = useState(0);
    const [currtag , setTag] = useState("Nothing");

    function movetoNewPage(newPage){
        setCurrPage(newPage);
    }

    async function getuniqueBlog(){
        try {
            setLoading(true);
            const newUrl = `${baseUrl}?page=${currPage}`
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

    async function getallBlogs(){
        try {
            let array = [];
            setLoading(true);
            for(let page=1;page<=totalPage;page++){
                const newUrl = `${baseUrl}?page=${page}`
                let response = await fetch(newUrl);
                response = await response.json();
                array = array.concat(response.posts);
            }
            setBlogs(array);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setCurrPage(1);
            setTotalPage(null);
            setBlogs([]);
            setLoading(false);
        }
    }

    useEffect( ()=>{
        getuniqueBlog();
    } , [currPage] );

    useEffect( ()=>{
        getallBlogs();
    },[currtag])

    const alldata = {
        currPage,
        movetoNewPage,
        totalPage,
        loading,
        blogs,
        articleIndex,
        setArticleIndex,
        setTag,
        currtag
    }

    return <AppContext.Provider value={alldata}>{children}</AppContext.Provider>

};

export default AppContextProvider;
