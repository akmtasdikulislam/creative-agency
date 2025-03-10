import fallbackAvatar from "@/assets/images/customers/fallbackAvatar.png";
import { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link } from "react-router";

const UserDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageError = (e) => {
    e.target.src = fallbackAvatar;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-accent-100 duration-400 flex cursor-pointer items-center gap-2 rounded-full p-1 transition-all"
      >
        <img
          src={user?.profilePicture || fallbackAvatar}
          alt={user?.name || "User"}
          className="h-8 w-8 rounded-full object-cover"
          onError={handleImageError}
          loading="lazy"
        />
        <span className="hidden font-medium md:block">
          {user?.name || "Tom Cook"}
        </span>
        <HiOutlineChevronDown
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="border-1 border-accent-200 absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
          <Link
            to="/dashboard"
            className="hover:bg-accent-100 block cursor-pointer px-4 py-2 text-sm text-gray-700 no-underline"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/settings"
            className="hover:bg-accent-100 block cursor-pointer px-4 py-2 text-sm text-gray-700 no-underline"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <button
            className="hover:bg-accent-100 block w-full cursor-pointer px-4 py-2 text-left text-sm text-gray-700"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
