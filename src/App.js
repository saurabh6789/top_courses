import React, { useEffect, useState } from "react";
import { Navbar } from "./component/Navbar";
import Filter from "./component/Filter";
import { filterData, apiUrl } from "./data";
import { Cards } from "./component/Cards";
import {toast} from "react-toastify";
import { Spinner } from "./component/Spinner";
 

const App = () => {
  const [courses, setcourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  useEffect(()=>{
   async function fetchData(){
    setLoading(true);
      try{

        const res = await fetch(apiUrl);
        const output = await res.json();
  
        //save data into variable 
        // console.log(output);

        setcourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false);
    }
    
    fetchData();

  },[])
  
 
  return (
    <div className="min-h-screen flex flex-col">
      <div>

      <Navbar/>
      </div>

     <div className="bg-bgDark2 min-h-screen">
      <div>

      <Filter filterData = {filterData}
        category ={category}
        setCategory ={setCategory}
      />
     </div>
     <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
      {
        loading? (<Spinner/>):(<Cards courses ={courses } category={category}/>)
      }
     
     </div>
      </div>

      
    </div>
  )
};

export default App;
