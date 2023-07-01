import React from "react";

export default function TruncatedText({ text }) {
  let truncatedText = text;
  const whitespaceindexes = [];
  let whitespaceCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      whitespaceindexes.push(i);
      whitespaceCount++;
    }
  }

  const lastWhitespaceIndex = whitespaceindexes[3];
  if (lastWhitespaceIndex > 3) {
    truncatedText = text.slice(0, lastWhitespaceIndex) + "...";
  }
  return <div className=""> {truncatedText}</div>;
}
