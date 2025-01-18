import { useState } from "react";
import './../Styles/CommonStyles.css'
import { word } from "../types";

interface Props {
  items: word[];
  heading: string;
  btnClassName: string
  selectedClassName?: string
  onSelectItem: (item: word, index:number) => void;
}

export function ListGroup({ items, heading, btnClassName, onSelectItem, selectedClassName}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  selectedClassName = selectedClassName ? selectedClassName : btnClassName;

  return (
    <>
      <h1 className="centered">{heading}</h1>
      
      <div className="button-container">
        {items.map((item, index) => (
          <button
            className={selectedIndex === index ? selectedClassName : btnClassName}
            disabled = {!item.Origin}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            <div>
              <h4>{item.Origin}</h4>
              <p>{item.Translation}</p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
