import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function HomePage() {
  const [number, setNumber] = useState();
  const [unread, setUnread] = useState();

  const data = axios.get("data/mydata.json").then((response) => {
    setNumber(response.data.length);

    const countunread = response.data.filter((item) => item.isRead === false);
    setUnread(countunread.length);

    console.log(response.data);
  });

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
