import { useState } from "react";
import './../Styles/CommonStyles.css'
import { word } from "../types";

interface Props {
  items: word[];
  heading: string;
  onSelectItem: (item: word, index:number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="centered">{heading}</h1>
      
      <div className="button-container">
        {items.map((item, index) => (
          <button
            className={selectedIndex === index ? "kana-btn-selected" : "kana-btn"}
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

export default ListGroup;
