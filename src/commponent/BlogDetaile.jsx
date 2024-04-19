import { useLoaderData, useParams } from "react-router-dom";

const BlogDetaile = () => {
    const blogs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const blog = blogs.find(blog => blog.id === idInt);
    // console.log(id)
    return (
        <div>
            <div className="text-center items-center">
           <div className="ml-56 my-10" >
            <img className="h-96 w-80 ml-96"  src={blog.image} alt="" />
           </div>
           <div>
            <h1 className="text-5xl font-bold">{blog.estate_title}</h1>
            <h1 className=" mx-96 py-3">{blog.description}</h1>
           </div>
        </div>
        <div className="ml-96 pl-80 font-bold pb-10">
            <p>Price: {blog.price}</p>
            <p>Status: {blog.status}</p>
            <p>Area: {blog.area}</p>
            <p>Location: {blog.location}</p>
            </div>
        </div>
    );
};

export default BlogDetaile;