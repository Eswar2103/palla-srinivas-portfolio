import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { getData } from "../utils/utils";

function Pagination({
  uri,
  setData,
  setNextKey,
  nextKey,
  headers = {},
  setIsLoading,
}) {
  const [prevKey, setPrevKey] = useState([]);

  async function handlePrev() {
    if (!prevKey.length) return;
    // fetch data with prevKey
    setIsLoading(true);
    const newPrevKeys = [...prevKey];
    newPrevKeys.splice(-1, 1);
    const lastKey = newPrevKeys[newPrevKeys.length - 1];
    const requestHeaders = lastKey
      ? { lastevaluatedkey: JSON.stringify(lastKey), ...headers }
      : { ...headers };

    const response = await getData(uri, {
      headers: requestHeaders,
      method: "GET",
    });
    if (response?.Items && response.Items.length > 0) {
      setData(response.Items);
      setPrevKey(newPrevKeys);
    }
    if (response.LastEvaluatedKey) {
      setNextKey(response.LastEvaluatedKey);
    } else {
      setNextKey(null);
    }
    setIsLoading(false);
  }

  async function handleNext() {
    if (!nextKey) return;
    setIsLoading(true);
    setPrevKey((prev) => [...prev, nextKey]);
    // fetch data with nextKey
    const requestHeaders = {
      lastevaluatedkey: JSON.stringify(nextKey),
      ...headers,
    };
    const response = await getData(uri, {
      headers: requestHeaders,
      method: "GET",
    });
    if (response?.Items && response.Items.length > 0) {
      setData(response.Items);
    }
    if (response.LastEvaluatedKey) {
      setNextKey(response.LastEvaluatedKey);
    } else {
      setNextKey(null);
    }
    setIsLoading(false);
  }

  return (
    <div className="flex justify-center gap-x-20 mb-5 text-md">
      <button
        onClick={handlePrev}
        className="flex justify-center items-center gap-2 border border-none rounded-3xl bg-stone-400 px-2 py-1 hover:bg-amber-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={prevKey.length === 0}
      >
        <FaArrowLeftLong /> Prev
      </button>
      <button
        onClick={handleNext}
        className="flex justify-center items-center gap-2 border border-none rounded-3xl bg-stone-400 px-2 py-1 hover:bg-amber-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={!nextKey}
      >
        Next <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Pagination;
