import ListGroup from "./components/ListGroup";
import './Styles/CommonStyles.css'
import { word } from "./types";
import { hiragana } from "./constants";

const handleSelectItem = (item: word) => {
  let sound = new Audio(`src\\assets\\Audio\\${item.Translation}.mp3`);
  sound.play()
}

function App()
{
  return <div className="wrapper"><ListGroup items={hiragana} heading="Hiragana" onSelectItem={handleSelectItem}/></div>
}

export default App;