import React from "react";

const InputField = ({onSet}) => {
  return (
    <form className="w-full h-fit p-10 flex justify-center">
      <input
        type="text"
        placeholder="Enter search query"
        className="bg-slate-200 px-4 py-2 rounded-md w-80 text-center"
        onChange={(e) => {
          onSet(e.target.value);
        }}
      />
    </form>
  );
};

export default InputField;
