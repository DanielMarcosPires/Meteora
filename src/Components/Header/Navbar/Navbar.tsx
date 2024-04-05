"use client";
import { Menu, X } from "lucide-react";
import React, { ComponentProps, useEffect, useState } from "react";

export default function Navbar({ children, ...props }: ComponentProps<"nav">) {
  const [flipflop, setFlipflop] = useState(false);
  let [windowSize, setWindowSize] = useState(0);

  const resize = () => {
    setWindowSize(screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", () => resize);
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
              className="absolute z-50 top-0 left-0 w-screen h-screen bg-black/40"
            >
              <nav className="bg-[#343a40] p-1 right-0  absolute w-48">
                <header className="flex justify-end">
                  <button onClick={() => setFlipflop(!flipflop)}>
                    <X size={40} color="#daff01" />
                  </button>
                </header>
                <div className="p-4  flex flex-col">{children}</div>
              </nav>
            </div>
          )}
        </div>
      </>
    );
  }
  return <nav {...props}>{children}</nav>;
}
