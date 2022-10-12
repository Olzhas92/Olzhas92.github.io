import { useState } from "react";

const MyForm = () => {
  const [myColor, setMyColor] = useState(true);

  const onClickHandler = () => {
    setMyColor(!myColor);
  };

  return (
    <div>
      <button
        onClick={onClickHandler}
        style={{ backgroundColor: myColor ? "red" : "blue" }}
      >
        Change Color
      </button>
    </div>
  );
};

export default MyForm;
