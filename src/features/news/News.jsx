import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { computedDescription, getData } from "../../utils/utils";
import { FaArrowRightLong } from "react-icons/fa6";
import Pagination from "../../components/Pagination";
import { LoadingScreen } from "../utils/utils";

function News({ type }) {
  const [data, setData] = useState(null);
  const [nextKey, setNextKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const uri =
    "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/StoreNewsImages";
  const headers = useMemo(() => {
    return { "x-type": "news" };
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getData(uri, {
        method: "GET",
        headers,
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
    fetchData();
  }, [headers]);

  if (type === "home") {
    return (
      <div className="px-10 sm:px-20">
        <div className="font-bold uppercase pb-5 flex justify-center">
          <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
            News
          </p>
        </div>
        <div className="grid-auto-fit justify-center gap-12">
          {data?.length &&
            data.slice(0, 6).map((n) => {
              return <NewsCard key={n.itemId} data={n} />;
            })}
        </div>
        <Link
          className="text-red-600 font-bold tracking-wider hover:underline cursor-pointer uppercase flex items-center justify-end mt-10 mr-4 sm:mr-18"
          to="/news"
        >
          MORE News <FaArrowRightLong />
        </Link>
      </div>
    );
  }
  return (
    <div className="px-10 sm:px-20">
      <div className="w-full h-25 font-extrabold tracking-wider text-5xl flex justify-center items-center text-amber-500">
        News
      </div>
      {isLoading && <LoadingScreen text="Loading news..." />}
      <div className="py-15 grid-auto-fit justify-center gap-12">
        {data?.length &&
          data.map((n) => {
            return <NewsCard key={n.itemId} data={n} />;
          })}
      </div>
      <Pagination
        uri={uri}
        setData={setData}
        setNextKey={setNextKey}
        nextKey={nextKey}
        headers={headers}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

function NewsCard({ data }) {
  return (
    <div
      key={data.publishedOn}
      className="border-none rounded-b-2xl px-2 py-2 flex flex-col justify-between bg-stone-300 hover:bg-amber-400 hover:scale-105 duration-300 cursor-pointer"
      onClick={() => {
        window.open(data.url, "_blank");
      }}
    >
      <img src={data.photo} alt={data.title} className="w-auto h-40 mb-2" />
      <p
        // href={n.link}
        // target="_blank"
        // rel="noopener noreferrer"
        className="mb-2 px-2 "
      >
        {computedDescription(data.title)}
      </p>
      <div className="flex justify-between px-2">
        <p className="capitalize font-bold text-[#942222]">{data.source}</p>
        <p>{data.publishedDate.split("#")[0]}</p>
      </div>
    </div>
  );
}

export default News;
