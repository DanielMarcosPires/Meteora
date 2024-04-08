"use client";
import { Menu, X } from "lucide-react";
import React, { ComponentProps, useEffect, useState } from "react";

export default function Navbar({ children, ...props }: ComponentProps<"nav">) {
  const [flipflop, setFlipflop] = useState(false);
  let [windowSize, setWindowSize] = useState(1);
  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  console.log(windowSize);

  if (windowSize < 768) {
    return (
      <>
        <div className="inline-flex">
          <button onClick={() => setFlipflop(!flipflop)}>
            <Menu color="#daff01" size={30} />
          </button>
          {flipflop && (
            <div
              onClickCapture={() => setFlipflop(!flipflop)}
              className="absolute left-0 top-0 z-50 h-screen w-screen bg-black/40"
            >
              <nav className="absolute right-0 w-48  bg-[#343a40] p-1">
                <header className="flex justify-end">
                  <button onClick={() => setFlipflop(!flipflop)}>
                    <X size={40} color="#daff01" />
                  </button>
                </header>
                <div className="flex  flex-col p-4">{children}</div>
              </nav>
            </div>
          )}
        </div>
      </>
    );
  }
  return <nav {...props}>{children}</nav>;
}
