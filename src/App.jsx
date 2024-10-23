
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setRedingTime] = useState(0);

  const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks);
  }

  const handleMarkAsRead = (time,id) =>{
    console.log(id)
    const newReadingTime = readingTime+time;
    setRedingTime(newReadingTime);
    const remainBookMarks = bookmarks.filter(bookmark => bookmark.id != id);
    setBookmarks(remainBookMarks);


    
  }
  return (
    <>
     
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto mt-7 gap-4'>
         <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
         <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
     
    </>
  )
}

export default App
