import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[]);
    return (
        <div className="md:w-2/3">
           
            {
                blogs.map(blog => <Blog 
                    handleAddToBookMark={handleAddToBookMark}
                    handleMarkAsRead={handleMarkAsRead}
                    key={blog.id} 
                    blog={blog}>
                </Blog>)
            }
        </div>

    );
};
Blogs.propTypes={
    blog : PropTypes.object,
    handleAddToBookMark : PropTypes.func,
    handleMarkAsRead : PropTypes.func

}
export default Blogs;