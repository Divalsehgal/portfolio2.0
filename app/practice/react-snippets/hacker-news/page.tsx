"use client";
import { useEffect, useRef, useState } from "react";
type HackerNewsData = {
  by: string;
  id: number;
  score: number;
  title: string;
  time: string;
  type: string;
};

export default function Page() {
  const [total, setTotal] = useState<[]>([]);
  const [data, setData] = useState<HackerNewsData[]>([]);
  const [isFetching, setIsFetching] = useState<Boolean>(false);
  let content:any;
  if (typeof document !== "undefined") {
    content = document.querySelector(".main-content");
  }
  const itemsPerPage = 10;

  const lastRef = useRef<null | HTMLDivElement>(null);
  const fetchHackerStoriesCount = async () => {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    const result = await res.json();
    setTotal(result);
  };

  const fetHackerStories = async () => {
    const temp: Promise<Response>[] = [];
    // slicing the from total to only load firstsetof itemsPerPage
    total.slice(0, itemsPerPage).forEach((m) => {
      temp.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${m}.json`));
    });
    const res = await Promise.all(temp);
    const result = await Promise.all(res.map(async (m) => await m.json()));
    setData(result);
  };
  const loadMoreStories = () => {
    let timer:any = 0;
    clearTimeout(timer);
    const startIndex = data.length;
    let endIndex = startIndex + itemsPerPage;
    if (!isFetching && endIndex <= total.length) {
      setIsFetching(true);
      timer = setTimeout(async () => {
        const temp: Promise<Response>[] = [];

        total.slice(startIndex, endIndex).forEach((m) => {
          temp.push(
            fetch(`https://hacker-news.firebaseio.com/v0/item/${m}.json`)
          );
        });

        const res = await Promise.all(temp);
        const newData = await Promise.all(res.map(async (m) => await m.json()));
        setData((prevData) => [...prevData, ...newData]); // Append new data to previous results

        setIsFetching(false);
      }, 1000);
    } else {
      return;
    }
  };

  // To find out total number of stories
  useEffect(() => {
    fetchHackerStoriesCount();
  }, []);

  // To fetch first set of itemsPerpage
  useEffect(() => {
    fetHackerStories();
  }, [total]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        lastRef.current &&
        lastRef.current?.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        loadMoreStories();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreStories();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (lastRef.current) {
      observer.observe(lastRef.current);
    }

    content?.addEventListener("scroll", handleScroll);
    return () => {
      content?.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isFetching, content]);

  return (
    <div className="text-tertiary-light dark:text-tertiary-dark">
      <p>Hacker News</p>
      {data.length == 0 ? (
        <div className="text-tertiary-light dark:text-tertiary-dark">
          wait for sometime we are here only ...
        </div>
      ) : (
        <div
          className="main-content"
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            height: "100vh",
          }}
        >
          {data?.map(({ id, title }, index) => {
            return (
              <div
                key={id}
                ref={index === data.length - 1 ? lastRef : null}
                style={{
                  display: "flex",
                  padding: "1rem",
                  flexGrow: 1,
                  backgroundColor: "gray",
                }}
              >
                {title}
              </div>
            );
          })}
          <div>{isFetching ? "loading..." : ""}</div>
        </div>
      )}
    </div>
  );
}
