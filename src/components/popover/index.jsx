/* eslint-disable react/prop-types */
import { createContext, createElement, useState, useContext } from "react";

const PopoverContext = createContext();

export default function Popover({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    isOpen,
    toggle: () => setIsOpen((prev) => !prev),
  };

  const button = children.find((child) => child.type === Popover.Button);
  const panel = children.find((child) => child.type === Popover.Panel);

  return (
    <PopoverContext.Provider value={data}>
      {button}
      {isOpen && panel}
    </PopoverContext.Provider>
  );
}

function Button({ as = "button", children, ...props }) {
  const { toggle, isOpen } = useContext(PopoverContext);

  return createElement(
    as,
    {
      onClick: toggle,
      ...props,
    },
    typeof children === "function" ? children({ isOpen }) : children
  );
}

function Panel({ as = "div", children, ...props }) {
  return createElement(as, { ...props }, children);
}

Popover.Button = Button;
Popover.Panel = Panel;
