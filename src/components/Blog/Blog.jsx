import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddToBookMark,handleMarkAsRead}) => {
    const {title,cover,reading_time,author,author_img,posted_date,hashtags,id} = blog;
    
    return (
        <div className='mb-20 border-b-2 pb-8 space-y-4'>
            <img className='w-full mb-4 rounded-xl' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>


                    </div>

                </div>
                <div className='flex justify-between items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookMark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>



                </div>
            </div>
            <h1 className='text-4xl mb-4'> {title}</h1>
            <p>{hashtags.map((hash,idx) => <span key={idx}><a  href="">#{hash}</a></span>)}</p>
            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-green-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog : PropTypes.object.isRequired,
    handleAddToBookMark : PropTypes.func,
    handleMarkAsRead : PropTypes.func,
    id : PropTypes.number

}
export default Blog;