import { useState,useEffect } from "react";
import config from '../../environments/main';
import React from 'react';
import './Article.css'

export default function Article() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token")

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(config.baseUrl+'api/v1/article',{
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`
      }
  }).then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (items.length == 0){
      return (
        <div>
          <p>No article avaliable</p>
        </div>
      );
    }
    else{
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.title} 
              {item.content}
            </li>
          ))}
        </ul>
      );
    }
    
  }
}

