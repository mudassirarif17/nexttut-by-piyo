import React from 'react'

const page = async ({params}) => {
    const fetchData = async () =>{
        //console.log("A Task is going On server");
        let data = await fetch(`https://dummyjson.com/users/${params.id}`);
        data = await data.json();
        // console.log(data);
        return data;
    }
    let data = await fetchData();
  return (
    <div>
        {/* <h1>{params.id}</h1> */}
        <h1>{data.firstName}</h1>
    </div>
  )
}

export default page