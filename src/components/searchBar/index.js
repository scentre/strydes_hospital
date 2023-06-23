import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="mb-3">
        <div className="relative mb-4 flex w-[350px] flex-wrap items-stretch rounded-3xl">
          <button
            className="relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-[#6B6C6F] shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg bg-slate-300 bg-opacity-30 rounded-tl-2xl rounded-bl-2xl"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none  dark:placeholder:text-neutral-200 dark:focus:border-primary bg-white bg-opacity-20 rounded-2xl border-slate-300"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            width="40px"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
