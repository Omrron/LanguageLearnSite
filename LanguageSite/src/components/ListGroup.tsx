function ListGroup() {

  const hiragana = [ "あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ",
     "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ",
      "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を",];

      
      return (
        <>
      <h1>Heading</h1>
      <ul className="list-group">
        {hiragana.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;
