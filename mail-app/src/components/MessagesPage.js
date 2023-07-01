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
    axios.get("/data/mydata.json").then((response) => {
      const check = response.data.filter(
        (item) => item.subject === query.subject
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
      <div className="message-flex">
        <div className="header">Messages</div>
        <div></div>

        <div
          style={{ textDecoration: "none" }}
          href={"/"}
          className="importMsg"
        >
          {data?.map((item) => (
            <div style={{ textDecoration: "none", color: "black" }}>
              <div>
                <div className={"subheaderread"}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
