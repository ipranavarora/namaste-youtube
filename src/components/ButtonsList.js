import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Music",
  "Cars",
  "Movies",
  "News",
  "Cricket",
  "Gaming",
  "Gadgets",
  "Unboxing"
];

const ButtonsList = () => {
  return (
    <div className="flex">
      {list.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};

export default ButtonsList;
