import ListGroup from "../components/ListGroup";
import { hiragana, katakana } from "../constants";
import { word } from "../types";
import ".././Styles/CommonStyles.css";
import { Tabs } from "@ark-ui/react";

const handleSelectItem = (item: word) => {
  let sound = new Audio(`src\\assets\\Audio\\${item.Translation}.mp3`);
  sound.play();
};

const KanaPage = () => {
  const kanaTypes : { [id:string] : word[]} = {"Hiragana":hiragana, "Katakana":katakana};
  return (
    <div className="wrapper">
      <Tabs.Root defaultValue={Object.keys(kanaTypes)[0]}>
        <Tabs.List>
          {Object.keys(kanaTypes).map((kanaType) => (
            <Tabs.Trigger key={kanaType} value={kanaType}>
              {kanaType}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.keys(kanaTypes).map((kanaType) => (
          <Tabs.Content key={kanaType} value={kanaType}>
            <ListGroup
              items={kanaTypes[kanaType]}
              heading={kanaType}
              onSelectItem={handleSelectItem}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default KanaPage;
