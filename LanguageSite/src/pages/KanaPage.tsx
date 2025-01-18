import { hiragana, katakana } from "../constants";
import { word } from "../types";
import ".././Styles/CommonStyles.css";
import { Tabs } from "@ark-ui/react";
import { useState } from "react";
import { ListGroup } from "../components/ListGroup";

const WIDTH = 50;
const kanaTypes : { [id:string] : word[]} = {"Hiragana":hiragana, "Katakana":katakana};

const handleSelectItem = (item: word) => {
  let sound = new Audio(`src\\assets\\Audio\\${item.Translation}.mp3`);
  sound.play();
};

const KanaPage = () => {
  const [bgOffset, setBgOffset] = useState(0);

  return (
    <div className="wrapper">
      <Tabs.Root defaultValue={Object.keys(kanaTypes)[0]}>
        <Tabs.List className="centered tabs" style={{'--bg-offset':`${bgOffset}%`}}>
          {Object.keys(kanaTypes).map((kanaType, index) => (
            <Tabs.Trigger className="tab" key={kanaType} value={kanaType} onClick={() => setBgOffset(WIDTH * index)}>
              {kanaType}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.keys(kanaTypes).map((kanaType) => (
          <Tabs.Content key={kanaType} value={kanaType}>
            <ListGroup
              items={kanaTypes[kanaType]}
              heading={kanaType}
              btnClassName="kana-btn"
              onSelectItem={handleSelectItem}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default KanaPage;
