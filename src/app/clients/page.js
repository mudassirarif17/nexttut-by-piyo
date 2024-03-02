import Link from 'next/link';
import React from 'react'

const page = async (props) => {
    const fetchData = async () =>{
        //console.log("A Task is going On server");
        let data = await fetch("https://dummyjson.com/users");
        data = await data.json();
        // console.log(data.users);
        return data.users;
    }

    let data = await fetchData();
    
  return (
    <div>
        {
            data.map((data , index)=> <Link href={`/clients/${data.id}`}><div>{data.firstName}</div></Link>)
        }
    </div>
  )
}



export default page;