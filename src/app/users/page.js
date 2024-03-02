'use client'
import React , {useState , useEffect} from 'react';
import Link from 'next/link';

const page = () => {
    const [user , setUser] = useState([]);
    
    useEffect(()=>{
        async function fetchData(){
            const data =  await ((await fetch("https://dummyjson.com/users")).json());
            // console.log(data.users);
            setUser(data.users);
        }
        fetchData();
    } , [])


  return (
    <div>
        <h1>Users</h1>
        {
            user && user.map((data , index)=><Link href={`/users/${data.id}`} key={data.id}><div>{data.firstName}</div></Link>)
        }
    </div>
  )
}

export default page