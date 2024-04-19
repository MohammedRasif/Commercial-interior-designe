
import { useEffect, useState } from "react";

import Blogs from "./Blogs";
const Blog = () => {
    const [blog , setblog] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setblog(data))
    },[])
    
    return (
        <div className="text-center mt-20 ">
            <h1 className="text-2xl">O U R - B L O G</h1>
            <h1 className="text-6xl font-bold">Latest News</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 m-10 pl-52 ">
                {
                    blog.map(blogs => <Blogs key={blogs.id} blogs={blogs} ></Blogs>)
                }
                
            </div>
        </div>
    );
};

export default Blog;