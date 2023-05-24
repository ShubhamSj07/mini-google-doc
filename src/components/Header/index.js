import { useState } from "react";
import GoogleDocIcon from "../../assets/google-docs.svg";
import StarDocIcon from "../../assets/star.svg";
import StarFilledDocIcon from "../../assets/star-filled.svg";
import MsgIcon from "../../assets/message.png";
import ShareIcon from "../../assets/share.svg";
import { Modal } from "../Modal";

const headerOptionsList = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Tools",
  "Extensions",
  "Help",
];

export const Header = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [docTitle, setDocTitle] = useState("Untitled Document");
  const [openShareModal, setOpenShareModal] = useState(false);

  return (
    <>
      {openShareModal && (
        <Modal
          docTitle={docTitle}
          closeModal={() => setOpenShareModal(false)}
        />
      )}
      <nav className="sticky top-0 flex justify-between items-center py-2 px-4">
        <div className="flex items-center gap-2">
          <div className="block">
            <img
              src={GoogleDocIcon}
              alt="Mini Google Doc"
              width={40}
              height={40}
            />
          </div>
          <div>
            <div className="flex items-center">
              <input
                type="text"
                className="text-lg font-medium text-[#535555] pl-2 min-w-[60px] focus:outline-[#2684FC] rounded-md"
                value={docTitle}
                defaultValue="Untitled Document"
                onChange={e =>
                  setDocTitle(e.target.value || "Untitled Document")
                }
              />
              <img
                src={isBookmarked ? StarFilledDocIcon : StarDocIcon}
                alt="Bookmark Document"
                width={20}
                height={20}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-4">
              {headerOptionsList.map(option => (
                <div key={option}>
                  <button className="optionButton">{option}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <img
            src={MsgIcon}
            alt="Message"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <button
            className="flex gap-2 items-center border border-transparent rounded-full box-border cursor-pointer font-google-sans font-semibold text-sm h-10 leading-5 px-4 whitespace-nowrap bg-[#C2E7FF] text-[#001d35]"
            onClick={() => setOpenShareModal(true)}
          >
            <img src={ShareIcon} alt="Share Document" width={18} height={18} />
            Share
          </button>
        </div>
      </nav>
    </>
  );
};
