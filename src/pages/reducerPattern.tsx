import { useState } from "react";

interface IAction {
  type: string;
  payload: {
    value: number;
  };
}

export const ReducerPattern = () => {
  const [num, setNum] = useState<number>(0);

  const dispatch = (action: IAction) => {
    const { type, payload } = action;
    if (type === "Increment") {
      setNum((prev) => {
        return prev + payload.value;
      });
    } else {
      return num;
    }
  };

  const action = {
    type: "Increment",
    payload: {
      value: 1,
    },
  };

  return (
    <div>
      {num}
      <button
        onClick={() => {
          dispatch(action);
        }}
      >
        dispatch
      </button>
    </div>
  );
};
