import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon, IconNames } from "../../component/Icon";
import { navigation } from "./config";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentScreen, setCurrentScreen] = React.useState("/");

  return (
    <nav className="fixed px-[6px] text-white bottom-2 left-4 right-4 rounded-lg bg-[#17288E] flex justify-around items-center h-[76px] z-50">
      {navigation.map(({ href, iconName, name }) => (
        <div
          key={name}
          className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${
            currentScreen === href ? "bg-[#464E8A]" : "bg-[#17288E] "
          }`}
        >
          <div className="flex flex-col items-center justify-center fill-amber-50">
            <Icon name={iconName} className="fill-amber-50 w-7 h-7" />
            <p className="text-xs text-center">{name}</p>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
