import React, { useEffect, useState } from "react";
import axios from "axios";
import TruncatedText from "./TruncatedText";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MessagePage() {
  const [data, setData] = useState();
  const router = useRouter();

  function mydata() {
    axios.get("data/mydata.json").then((response) => {
      const sortedData = response.data.sort((a, b) => {
        if (a.isRead && !b.isRead) return 1;
        if (!a.isRead && b.isRead) return -1;
        return 0;
      });
      setData(sortedData);

      console.log(sortedData, "is it sorted");
    });
  }

  useEffect(() => {
    mydata();
  }, []);

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
            <div
              onClick={() =>
                //TODO make a post to server saying it is read
                //get the id clicked on and send it to the server
                //then change the isRead to true

                router.push({
                  pathname: "/inbox/1",
                  query: { subject: item.subject },
                })
              }
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <div className={item.isRead ? "subheaderread" : "subheader"}>
                  {item.subject}
                </div>
                <TruncatedText text={item.content} />
                <hr></hr>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
