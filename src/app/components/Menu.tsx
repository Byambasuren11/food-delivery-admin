import { LayoutDashboardIcon, Settings, Truck } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex flex-col gap-5 text-xs">
      <div className="flex gap-3 ">
        <LayoutDashboardIcon size={18} />
        <p>Food menu</p>
      </div>
      <div className="flex gap-3">
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
