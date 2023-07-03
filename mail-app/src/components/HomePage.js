import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function HomePage() {
  const [number, setNumber] = useState();
  const [unread, setUnread] = useState();

function getData() { 
  console.log("getdata");

  try{

    const data = axios.get("http://localhost:3001/api/v1/messages").then((response) => {
      setNumber(response.data.length);
  
      const countunread = response.data.filter((item) => item.is_read === false);
      setUnread(countunread.length);
  
      console.log(response.data);
    });
  }

  catch(err){
    console.log("error ", err)
  }

}

useEffect(() => {
if (number === undefined) { getData();}
}, [])

  
  return (
    <div className="body-flex">
      <div className="body-form">
        <div>Hello Jim</div>
        <div>
          {" "}
          You have {unread} unread messages out of {number} total
        </div>
        <div>
          <Link href={"/inbox"} className="mybutton">
            {" "}
            View Messages
          </Link>
        </div>
      </div>
    </div>
  );
}
