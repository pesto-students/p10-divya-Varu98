import React from "react";
import { usePostUrl } from "../context/UrlContext";

const Input = () => {
  const { data, setData, shortenUrl } = usePostUrl();

  const onChangeHandler = (e) => {
    setData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    shortenUrl(data);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full mt-8 md:max-w-[50vw] mx-auto mb-8"
    >
      <label
        htmlFor="url"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Link
      </label>
      <div className="relative">
        <div className="absolute max-sm:bottom-12 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="url"
          name="url"
          id="url"
          onChange={onChangeHandler}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="https://example.com"
          pattern="https://.*"
          size="30"
          required
        />
        {/* max-sm:top-20 max-sm:left-20 */}
        <button
          type="submit"
          className="text-white max-sm:mt-4 max-sm:ml-16 md:absolute md:right-2.5 md:bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Shorten My Url, ASAP!!
        </button>
      </div>
    </form>
  );
};

export default Input;
