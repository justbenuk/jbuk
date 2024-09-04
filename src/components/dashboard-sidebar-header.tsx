import { FaBars } from "react-icons/fa";
import AvvatarDropdown from "./page-sections/avatar-dropdown";
interface MBProps {
  onMenuButtonClick(): void;
}
export default function DashboardSidebarHeader({ onMenuButtonClick }: MBProps) {
  return (
    <div className="flex flex-row gap-2 items-center justify-between p-2">
      <button onClick={onMenuButtonClick}>
        <FaBars className="text-lg" />
      </button>
      <div></div>
    </div>
  );
}
