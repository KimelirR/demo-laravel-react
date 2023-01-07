import React, { useState, useEffect } from "react";

function Booklist() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const makeArray = (items) => {
       let checkArray = Array.isArray(items);
       if(checkArray){
          return items;
       }
       else{
          return items.data;
       }
  };

  const list = makeArray(items).map(({ title, price }, index) => {
    return (
      <li class="list-group-item" key={index}>
           Title = {title} and <br/> Price = {price}
      </li>
    );
  });

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
    return (
      <ul className="list-group">
        {list}
      </ul>
    );
  }
}

  export default Booklist;