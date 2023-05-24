import classes from "./styles.module.scss";
import GoogleCalendarIcon from "../../assets/google-calendar.png";
import GoogleKeepIcon from "../../assets/google-keeps.png";
import GoogleTasksIcon from "../../assets/google-tasks.png";
import GoogleContactsIcon from "../../assets/google-contacts.png";
import GoogleMapsIcon from "../../assets/google-maps.png";
import GoogleAddIcon from "../../assets/google-add.png";
import ProfileIcon from "../../assets/user-profile.png";
import Tooltip from "../ToolTip";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 w-[95%] absolute">{children}</div>
      <div
        className={`${classes.sidebar} fixed right-0 flex pt-4 flex-col items-center gap-10 w-16 h-screen z-[100]`}
      >
        <div>
          <Tooltip content="User Profile">
            <img
              src={ProfileIcon}
              alt="User Profile"
              width={35}
              height={35}
              className="cursor-pointer bg-[#F1F3F4] rounded-full p-1"
            />
          </Tooltip>
        </div>
        <div className="flex flex-col items-center gap-10">
          <Tooltip content="Calendar">
            <a
              href="https://calendar.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GoogleCalendarIcon}
                alt="Google Calendar"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Tooltip>
          <Tooltip content="Keep">
            <a href="https://keep.google.com/" target="_blank" rel="noreferrer">
              <img
                src={GoogleKeepIcon}
                alt="Google Keep"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Tooltip>
          <Tooltip content="Tasks">
            <a
              href="https://tasks.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GoogleTasksIcon}
                alt="Google Tasks"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Tooltip>
          <Tooltip content="Contacts">
            <a
              href="https://contacts.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GoogleContactsIcon}
                alt="Google Contacts"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Tooltip>
          <Tooltip content="Maps">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GoogleMapsIcon}
                alt="Google Maps"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Tooltip>
          <hr className="w-6 h-2" />
          <Tooltip content="Google Add-ons">
            <a
              href="https://workspace.google.com/marketplace"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GoogleAddIcon}
                alt="Google Add-ons"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
