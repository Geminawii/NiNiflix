import { useEffect, useRef, useState } from "react";

export default function ScrollArea({ children }) {
  const scrollRef = useRef(null);
  const [hideScroll, setHideScroll] = useState(true);
  let timer = useRef();

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const showScroll = () => {
      setHideScroll(false);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setHideScroll(true), 10000); // 10s
    };

    scrollEl.addEventListener("scroll", showScroll);
    scrollEl.addEventListener("mouseenter", showScroll);

    return () => {
      scrollEl.removeEventListener("scroll", showScroll);
      scrollEl.removeEventListener("mouseenter", showScroll);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className={`scrollbar-container overflow-y-scroll h-64 ${
        hideScroll ? "hide-scrollbar" : ""
      }`}
    >
      {children}
    </div>
  );
}
