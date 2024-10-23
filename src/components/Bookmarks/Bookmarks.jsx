import Bookmark from '../../Bookmark/Bookmark';
import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks,readingTime}) => {

    return (
        <div className='md:w-1/3 space-y-3'>
            <div className='bg-[#6047EC1A] py-3 rounded-xl border-4 border-[#6047EC1A]'>
                <h2 className='text-center'>Spent time on read : {readingTime} min</h2>
            </div>
            <div className=" bg-gray-100 rounded-sm  pb-7 h-full">
                  <h2 className="text-2xl font-bold p-2 text-center">Bookmarked Blogs : {bookmarks.length}</h2>
            
                 {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>)
                 }

            </div>
        

        </div>
    );
};
Bookmarks.propTypes={
  
    bookmarks : PropTypes.object,
    readingTime : PropTypes.number


}
export default Bookmarks;