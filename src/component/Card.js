import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

export const Card = ({course, likedCourses,setlikedCourses}) => {
    
    function clickHandler(){
        //logic 
        if(likedCourses.includes(course.id)){
            //pahle se like hua pada hai
            setlikedCourses((prev) =>prev.filter((cid)=>(cid!=course.id)));
            toast.warning("like removed");
        }
        else{
            //pahle se like nahi hai
            //insert karna hai ye course liked course me
            if(likedCourses.length==0){
                setlikedCourses([course.id]);
            }
            else{
                //non-empty pahle se
                setlikedCourses((prev)=>[...prev, course.id]);
            }
            toast.success("successfully liked");
        }

    }

  return (
     
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
                 <div className="relative">
                      <img src={course.image.url}></img>
                   <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(course.id)?(<FcLikePlaceholder fontsize="1.75rem"/>):( <FcLike fontsize ="1.75rem"/>)
                        }
                       
                    </button>
                   </div>
            </div> 
            <div className="p-4 text-white">
                <p className="font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-base mt-2">
                    { 
                  course.description.length>100?(course.description.substr(0,100)):(course.description)
                }....
                </p>
                </div> 
           </div>
       
   
  )
}
