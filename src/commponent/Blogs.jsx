import { Link } from "react-router-dom";



const Blogs = ({blogs}) => {
    // console.log(blogs)
    const {estate_title,image,segment_name,date,id} = blogs
    return (
        <Link to={`/blogs/${id}`} >
        <div className="p-10">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h1>{estate_title}</h1>
                <h2 className="card-title ">
                
                <div className="pl-24">{date}</div>
                </h2>
                <p>{segment_name}</p>
                
            </div>
            </div>
        </div>
        </Link>
    );
};

export default Blogs;