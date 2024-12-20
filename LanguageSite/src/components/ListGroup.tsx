import { useState } from "react";
import './../Styles/CommonStyles.css'

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string, index:number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="centered">{heading}</h1>
      
      <div className="wrapper">
        {items.map((item, index) => (
          <button
            className={selectedIndex === index ? "my-btn-selected" : "my-btn"}
            disabled = {!item}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default ListGroup;
