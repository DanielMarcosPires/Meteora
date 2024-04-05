"use client";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div key={0} className="item" data-value="1">
    1
  </div>,
  <div key={1} className="item" data-value="2">
    2
  </div>,
  <div key={2} className="item" data-value="3">
    3
  </div>,
  <div key={3} className="item" data-value="4">
    4
  </div>,
  <div key={4} className="item" data-value="5">
    5
  </div>,
];

export default function Slide() {
  return <AliceCarousel responsive={responsive} autoHeight infinite items={items} />;
}
