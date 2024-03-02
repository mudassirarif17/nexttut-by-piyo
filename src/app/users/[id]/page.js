'use client';
import React, { useEffect , useState } from 'react';
// import { useRouter } from 'next/navigation';


const Page = ({params}) => {
  const [info , setInfo] = useState([{}]);
    

    const getData = async () =>{
      let data = await fetch(`https://dummyjson.com/users/${params.id}`);
      data = await data.json();
      setInfo(data)
    }
    
    useEffect(()=>{
      getData()
    } , []);

  return (
    <div>
        <h1>UserName : {info?.firstName}</h1>
        <h1>email : {info?.email}</h1>
    </div>
  )
}

export default Page