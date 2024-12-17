import CalenderIcon from "../../../public/icons/calender-icon";
import DropDownIcon from "../../../public/icons/drop-down-icon";
import MessageIcon from "../../../public/icons/message-icon";
import NotificationIcon from "../../../public/icons/notification-icon";
import SearchIcon from "../../../public/icons/search-icon";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
          {/* search icon & input */}
        <div className="flex justify-start items-center gap-1.5">
          <SearchIcon />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>

        <div className="flex justify-end items-center gap-7">
          <CalenderIcon />
          <NotificationIcon />
          <MessageIcon />
          <div className="w-7 h-7 rounded-full bg-[#E0E2E7]"></div>

          <div className="flex justify-center items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#E0E2E7]"></div>
              <div className="p-0.5 bg-white absolute right-0 bottom-0 rounded-full">
                <div className="bg-[#22CAAD] w-2.5 h-2.5 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-sm font-medium">Jenil Patel</h1>
              <p className="text-xs">Manager</p>
            </div>
            <div className="ml-1">
              <DropDownIcon />
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Header;
