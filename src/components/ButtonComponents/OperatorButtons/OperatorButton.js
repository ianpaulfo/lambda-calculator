import React from "react";

const OperatorButton = props => {
  return (
    <>
    <button
       className="operator-button"
       onClick={() => props.addOperator(props.operatorText.value)}
     ></button>
      {props.operatorText.value}
     
     </button>
  );
};
export default OperatorButton;