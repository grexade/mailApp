import React, { useEffect, useState } from "react";
import axios from "axios";
import TruncatedText from "./TruncatedText";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MessagePage() {
  const router = useRouter();
  const { query } = router;
  console.log("this is the query", query);

  const [data, setData] = useState();
  console.log("this is the data", data);
  function mydata() {
    axios.get("http://localhost:3001/api/v1/messages").then((response) => {
      const check = response.data.filter(
        (item) => item._id === query.subject
      );

      setData(check);
    });
  }

  useEffect(() => {
    if (data?.length === 0 || data === undefined) {
      mydata();
    }
  }, [data]);

  return (
    <div className="body-flex">

      
    
  

        

          {data?.map((item) => (
                <div className="message-flex">
                  <div>{item.subject}</div>
            <div
            style={{ textDecoration: "none" }}
            href={"/"}
            className="importMsg"
          >
            <div key={item.id} style={{ textDecoration: "none", color: "black" }}>
              <div>
                <div className={"subheaderread"}>{item.content}</div>
              </div>
            </div>
            </div>
            </div>
          ))}
        </div>
      

  );
}
