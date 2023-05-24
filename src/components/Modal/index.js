import { useState } from "react";
import CopyLinkIcon from "../../assets/link.svg";

export const Modal = ({ docTitle, closeModal }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center z-[10000]"
        aria-labelledby="modal-title"
        role="dialog"
      >
        <div className="fixed inset-0 bg-[#646465] bg-opacity-75 transition-opacity"></div>
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          onClick={closeModal}
        >
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex flex-col gap-3 text-left">
                  <h1 className="text-2xl font-medium text-gray-900">
                    Share "{docTitle}"
                  </h1>
                  <input
                    required
                    type="email"
                    className="text-sm font-medium text-[#535555] border border-[#5355555] px-4 py-3 w-full focus:outline-[#2684FC] rounded-md"
                    placeholder="Add people and groups"
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 pt-0 flex justify-between items-center sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-fit justify-center items-center gap-3 border border-[#5355555] bg-transparent px-4 py-3 text-sm font-semibold text-[#0B57D0] rounded-3xl"
                  onClick={e => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(window.location.href);
                    setIsCopied(true);
                  }}
                >
                  <img
                    src={CopyLinkIcon}
                    alt="Copy Document Link"
                    width={18}
                    height={18}
                  />
                  {isCopied ? "Link Copied" : "Copy Link"}
                </button>
                <button
                  type="submit"
                  className="mt-3 inline-flex w-fit justify-center bg-[#0B57D0] px-5 py-3 text-sm font-semibold text-white rounded-3xl"
                  onClick={closeModal}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
