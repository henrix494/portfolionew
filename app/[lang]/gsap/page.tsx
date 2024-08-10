"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function page() {
  const perent = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline();
    }, perent);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={perent} className="flex justify-center mt-10">
      <div className="w-[400px] h-[400px] bg-[red] square opacity-0"></div>
    </div>
  );
}
