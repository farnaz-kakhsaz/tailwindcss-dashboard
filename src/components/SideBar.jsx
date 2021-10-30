import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => (
  <div
    className="fixed top-0 left-0 h-screen w-16 m-0 
              flex flex-col bg-gray-900 text-white shadow-xl
              dark:bg-gray-900 dark:text-white"
  >
    <SideBarIcon icon={<FaFire size="25" />} />
    <SideBarIcon icon={<BsPlus size="32" />} />
    <SideBarIcon icon={<BsFillLightningFill size="22" />} />
    <SideBarIcon icon={<FaPoo size="20" />} />
    <SideBarIcon icon={<BsGearFill size="20" />} />
  </div>
);

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
