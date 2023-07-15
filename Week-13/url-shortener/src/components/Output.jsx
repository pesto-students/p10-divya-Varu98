import React from "react";
import { toast } from "react-toastify";
import { usePostUrl } from "../context/UrlContext";
import Spinner from "./Spinner";

const Output = () => {
  const { loading, data, displayOutput } = usePostUrl();
  function copyToClipboard() {
    navigator.clipboard.writeText(data);
    toast.success("Link captured! Paste and conquer! ⚔️");
  }
  return loading ? (
    <div className="flex gap-4 justify-center items-center">
      <Spinner />
      <h3 className="font-bold text-blue-500">
        Hold tight! We're shrinking your link with our top-secret
        miniaturization technology.
      </h3>
    </div>
  ) : (
    displayOutput && (
      <div className="w-full md:max-w-[50vw] mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            value={data}
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shorten My Url, ASAP...!"
            required
          />
          <button
            onClick={copyToClipboard}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Copy
          </button>
        </div>
      </div>
    )
  );
};

export default Output;
