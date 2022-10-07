import React from 'react'
import ExerciseOneDataBooks from "./ExerciseOne.json"
import "./exerciseOne.css"

function ExerciseOne() {
    console.log(ExerciseOneDataBooks);
  return (
    <div>
        {
            ExerciseOneDataBooks.map((book)=>
            <article className='wrapper'> 
                <img src={`${book.imgUrl}`} className="image"/>
                <p className='author'><strong>Author:</strong> {`${book.author}`}</p>
                <span className='publishDate'><strong>Published Date:</strong> {`${book.publishDate}`}</span>
            </article>)
        }
    </div>
  )
}

export default ExerciseOne