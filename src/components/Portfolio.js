import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Albums from './Albums';

export default function Portfolio() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setData(res.data));

  },[])


  return (
    <div className="w3-container">
      <ul>
        {data.map((albums) => (
          
        <Albums albums={albums} key={albums.id}/>
        ))}
      </ul>
    </div>
  );
}
