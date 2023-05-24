import React from "react";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CardItem = ({ text, stateCards }) => {
  const navigate = useNavigate();

  // console.log(stateCards)
  const showAlert = () => {
    const transformedString = text.toString().replace(".", "_");
    if (transformedString === "1") return navigate("/homework/" + text);
    else if (stateCards.state_1)  return toast.error("Debe terminar la tarea #1 primero.");
    else if (transformedString === "3_2" && stateCards.state_3_1) return toast.error("Debe terminar la tarea #3.1 primero.");
    else if (transformedString === "4_1" && stateCards.state_3_2) return toast.error("Debe terminar la tarea #3.2 primero.");
    else if (transformedString === "5_2" && stateCards.state_5_1) return toast.error("Debe terminar la tarea #5.1 primero.");
    else return navigate("/homework/" + text);
  };

  return (
    <div className="w-full">
      <Toaster />
      <Button
        text={`Hacer tarea #${text} `}
        onClick={showAlert}
        stateCards={stateCards}
        info={text}
      />
    </div>
  );
};

export default CardItem;
