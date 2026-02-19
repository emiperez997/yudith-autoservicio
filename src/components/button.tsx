import React from "react";

type ButtonProps = {
  variation?: keyof typeof variationType;
  color?: keyof typeof colorType;
  children?: React.ReactNode;
  onClick?: () => void;
};

const variationType = {
  outline:
    "border-2 border-black-500 text-black bg-transparent hover:bg-gray-800 hover:text-white",
} as const;

const colorType = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
  black: "bg-gray-800 text-white hover:bg-black border-2 border-black",
  default: "bg-transparent text-black",
} as const;

export const Button: React.FC<ButtonProps> = ({
  variation,
  color = "default",
  children,
  onClick,
}) => {
  const variationClass = variation ? variationType[variation] : "";
  const colorClass = colorType[color] ?? colorType.default;

  return (
    <button
      onClick={onClick}
      className={`text-sm md:text-lg cursor-pointer gap-4 px-4 py-2 rounded-xl font-semibold transition flex items-center justify-center ${variationClass} ${colorClass}`}
    >
      {children ?? "Button"}
    </button>
  );
};
