import { useState } from "react";

type Props = {
  onToggle: () => void;
  isChecked: boolean;
};

export const BooleanSlide = ({ onToggle, isChecked }: Props) => {
  return (
    <div className="py-2">
      <div
        onClick={onToggle}
        className="cursor-pointer relative w-14 h-8 border border-border grid grid-cols-2 rounded-full p-1 hover:opacity-50 transition-all duration-150 bg-background"
      >
        <span
          className={`relative bg-card border border-border flex items-center justify-center rounded-full duration-150 transition-all ${
            isChecked ? "left-0 bg-green-600" : "left-full bg-stone-600"
          }`}
        ></span>
      </div>
    </div>
  );
};
