import { useState } from "react";
import ListGroup from "../components/ListGroup";
import { hiragana, katakana } from "../constants";
import { word } from "../types";
import '.././Styles/CommonStyles.css'
import { ToggleGroup, useToggleGroup } from "@ark-ui/react";

const handleSelectItem = (item: word) => {
  let sound = new Audio(`src\\assets\\Audio\\${item.Translation}.mp3`);
  sound.play();
};

const KanaPage = () => {
  const kanaToggleGroup = useToggleGroup();
  const kanaTypes = ["Hiragana", "Katakana"];
  const [activeKana, setActiveKana] = useState(kanaTypes[0])
  
    if (kanaToggleGroup.value.length !== 0 && kanaToggleGroup.value[0] !== activeKana)
    {
        setActiveKana(kanaToggleGroup.value[0]);
    }

  return (
    <div className="wrapper">
      <ToggleGroup.RootProvider value={kanaToggleGroup}
      >
        {kanaTypes.map((kanaType) => (
          <ToggleGroup.Item className="my-radio" key={kanaType} value={kanaType}>
            {kanaType}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.RootProvider>

      {activeKana == "Hiragana" && (
        <ListGroup
          items={hiragana}
          heading="Hiragana"
          onSelectItem={handleSelectItem}
        />
      )}
      {activeKana == "Katakana" && (
        <ListGroup
          items={katakana}
          heading="Katakana"
          onSelectItem={handleSelectItem}
        />
      )}
    </div>
  );
};

export default KanaPage;