import React, { useState } from 'react'
import { Card } from './Card';

export const Cards = ({courses,category}) => {
  const [likedCourses , setlikedCourses] = useState([]);
  
  
  
  const getCourses =()=>{
    if(category=="All"){
      
      let allcourses = [];
            console.log("printing courses");
            console.log( courses);
          Object.values(courses).forEach((courseCategory)=>{
              courseCategory.forEach((course)=>{
                  allcourses.push(course);
              })
          })
           return allcourses;
    }
    else{
      return courses[category];
    }
    }

 



  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
        !courses?(<div>  
            <p>No Data Found</p> </div>):( getCourses().map((course)=>{
        return  ( <Card key = {course.id}course={course} likedCourses={likedCourses} 
        setlikedCourses = {setlikedCourses}/> )
        }))
        }
        

    </div>
  )
}

