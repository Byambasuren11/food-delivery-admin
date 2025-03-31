"use client";

import { LayoutDashboardIcon, Settings, Truck } from "lucide-react";
import { useRouter } from "next/navigation";

const Menu = () => {
  const Router = useRouter();
  const Orders = () => {
    Router.push("/orders");
  };
  const foodMenu = () => {
    Router.push("/foodMenu");
  };
  return (
    <div className="flex flex-col gap-5 text-xs">
      <div className="flex gap-3" onClick={foodMenu}>
        <LayoutDashboardIcon size={18} />
        <p>Food menu</p>
      </div>
      <div className="flex gap-3" onClick={Orders}>
        <Truck size={18} />
        <p>Orders</p>
      </div>
      <div className="flex gap-3">
        <Settings size={18} />
        <p>Settings</p>
      </div>
    </div>
  );
};
export default Menu;
