import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import logo from "../asset/logo-dark.png";
import {
  SignedIn,
  SignedOut,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import Avatar from "./Avatar";

const Header = () => {
  const [showSignIn, setSignIn] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const {user} = useUser();

  useEffect(() => {
    console.log(searchParam.get("sign-in"));
    if (searchParam.get("sign-in")) setSignIn(true);
  }, [searchParam]);

  function handleOverlay(e) {
    if (e.target === e.currentTarget) {
      setSignIn(false);
      setSearchParam({});
    }
  }

  return (
    <div className="flex justify-between items-center w-full p-4 shadow-md">
      {/* Logo Section */}
      <Link to="/">
        <img src={logo} alt="Logo not found" className="h-14 ml-8" />
      </Link>

      {/* Auth Buttons Section */}
      <div className="flex items-center mr-12">
        {/* Signed Out - Show Sign In Button */}
        <SignedOut>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4"
            onClick={() => setSignIn(true)}
          >
            Sign In
          </button>
        </SignedOut>

        {/* Signed In - Show User Button and Sign Out Button */}
        <SignedIn>
         <Avatar/>
          {
            user?.unsafeMetadata?.role === "recruiter" && <button className="px-4 py-2 bg-red-500 text-white rounded-md ml-4 flex items-center justify-center font-bold text-lg">
            <svg
              class="h-8 w-8 text-red-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <span className="pl-1">Post Job</span>
          </button>
          }
        </SignedIn>
      </div>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={handleOverlay}
        >
          <SignIn
            forceRedirectUrl={"onboarding"}
            fallbackRedirectUrl={"onboarding"}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
