import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
         
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
           
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};
Bookmark.propTypes={
    blog : PropTypes.object.isRequired,
    handleAddToBookMark : PropTypes.func,
    bookmark : PropTypes.object,
   


}
export default Bookmark;