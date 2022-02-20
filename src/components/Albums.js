import React from "react";

export default function Albums(props) {
  const { albums } = props;

  return (
    <div>
      <li>
        <img src={albums.thumbnailUrl} alt="logo" />
      </li>
      <li>{albums.title}</li>
    </div>
  );
}
