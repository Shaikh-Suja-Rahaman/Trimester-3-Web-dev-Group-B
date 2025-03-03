import React, { useEffect, useState } from "react";

function GetData() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [id , setId] = useState(1)

  function increment() {
    setCount(count + 1);
  }

  // implemenet the decrement function

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function fn() {
    async function fetchData() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const user = await data.json();
      console.log(user);
     setData(user)
     setId(id)
    }
    fetchData();
  }

  useEffect(fn, [id]);

  return (
    <>
      {data == null ? <h1>Loading Data...</h1> : <h2>Name :{data.name}</h2>}

      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>

      <button onClick={()=>setId(id+1)}>ChangeID</button>
      <h1>{id}</h1>
    </>
  );
}

export default GetData;
