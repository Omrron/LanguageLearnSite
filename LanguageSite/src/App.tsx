import ListGroup from "./components/ListGroup";
import soundA from "./assets/Audio/JapaneseA.mp3";

const hiragana = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "や",
  "",
  "ゆ",
  "",
  "よ",
  "わ",
  "",
  "",
  "",
  "を",
  "ん",
  "",
  "",
  "",
  ""
];

const handleSelectItem = (item: string, index:number) => {
  console.log(item)
  let sound = new Audio(soundA);
  sound.currentTime = index;
  sound.play()
  setTimeout(() => {sound.pause()}, 1000);
}

function App()
{
  return <div><ListGroup items={hiragana} heading="Hiragana" onSelectItem={handleSelectItem}/></div>
}

export default App;