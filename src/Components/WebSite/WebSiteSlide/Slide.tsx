"use client";
import React, { ReactNode } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
interface WebSiteSlide {
  children: ReactNode;
}

export default function WebSiteSlide({ children }: Readonly<WebSiteSlide>) {
  return (
    <div>
      <AliceCarousel
        disableButtonsControls
        disableDotsControls
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1500}
      >
        {children}
      </AliceCarousel>
    </div>
  );
}
