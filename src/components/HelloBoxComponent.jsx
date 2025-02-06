import styles from "./HelloBoxComponent.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function HelloBoxComponent({ personName, onButtonClick, ...props }) {
  const [clickedButtonResponse, setClickedButtonResponse] = useState();

  const handleButtonClick = (buttonNum) => {
    const response =
      buttonNum === 1
        ? "First button clicked"
        : buttonNum === 2
          ? "Second button clicked"
          : "something else clicked";

    setClickedButtonResponse(response);

    onButtonClick?.(buttonNum);
  };

  return (
    <>
      <h1>
        Hello {personName}
        {props.secondPersonName ? ` and ${props.secondPersonName}` : ""}!
      </h1>
      {onButtonClick && (
        <div className="flex flex-row">
          <button
            className={styles.button}
            onClick={() => handleButtonClick(1)}
          >
            Click Me!
          </button>
          <button
            className={styles.button}
            onClick={() => handleButtonClick(2)}
          >
            Click Me Too!
          </button>
        </div>
      )}
      {clickedButtonResponse && (
        <span>clicked button response: {clickedButtonResponse}</span>
      )}
    </>
  );
}

// needed for ESLint rule
HelloBoxComponent.propTypes = {
  personName: PropTypes.string.isRequired,
  secondPersonName: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default HelloBoxComponent;
