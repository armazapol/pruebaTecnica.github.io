import React, { useState, useEffect } from "react";

const Button = ({ text, stateCards, info, ...props }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (Object.keys(stateCards).length > 0) {
      const transformedString = info.toString().replace(".", "_");
      if (!stateCards[`state_${transformedString}`]) {
        setState(true);
      }
    }
  }, [stateCards]);

  return !state ? (
    <div
      className={`bg-[#5b9bd5] border-[#548ec3] border-2 w-full py-3 rounded-full cursor-pointer`}
      {...props}
    >
      <p className="text-white font-semibold ">{text} </p>
    </div>
  ) : null;
};

export default Button;
