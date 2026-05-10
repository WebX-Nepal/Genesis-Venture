"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const cur = document.getElementById("cur");
    const cur2 = document.getElementById("cur2");
    if (!cur || !cur2) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let rafId = 0;

    const handleMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      cur2.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      rafId = window.requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", handleMove);
    rafId = window.requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cur" aria-hidden="true" />
      <div id="cur2" aria-hidden="true" />
    </>
  );
}
