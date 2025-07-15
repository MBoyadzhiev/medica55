"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const videoRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the video section by id or tag
    const videoSection = document.getElementById("video-hero-section");
    videoRef.current = videoSection;
    if (!videoSection) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(videoSection);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white/80 z-50 px-4 py-3 transition-opacity duration-300 backdrop-blur-md ${
        show
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Main navbar content */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.PNG"
            alt="Logo"
            className="h-20"
            width={80}
            height={80}
          />
          <span className="text-black text-2xl font-bold">
            МЦ &quot;Медика 55&quot;{" "}
          </span>
        </div>

        {/* Desktop nav */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-bold text-black">
            <li>
              <Link href="/">За Нас</Link>
            </li>
            <li>
              <Link href="/team">Екип</Link>
            </li>
            <li>
              <Link href="/procedures">Дейонсти</Link>
            </li>
            <li>
              <Link href="/appointments">Запази час</Link>
            </li>
            <li>
              <Link href="/gallery">Галерия</Link>
            </li>
            <li>
              <Link href="/contacts">Контакти</Link>
            </li>
          </ul>
          {/* Instagram icon - only show on md and up */}
          <a
            href="https://www.instagram.com/whittierclubwpf/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-black hover:text-pink-400 transition-colors hidden md:inline-flex"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </a>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-sky-800 mb-1 transition-all ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-sky-800 mb-1 transition-all ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-sky-800 transition-all ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white/90 shadow-lg rounded-b-2xl flex flex-col items-center py-4 md:hidden animate-fade-in z-40">
          <Link
            href="/"
            className="py-2 w-full text-center text-black font-medium hover:bg-sky-100"
          >
            За Нас
          </Link>
          <Link
            href="/team"
            className="py-2 w-full text-center text-black font-medium hover:bg-sky-100"
          >
            Екип
          </Link>
          <Link
            href="/procedures"
            className="py-2 w-full text-center text-black font-medium hover:bg-sky-100"
          >
            Дейонсти
          </Link>
          <Link
            href="/appointments"
            className="py-2 w-full text-center text-black font-medium hover:bg-sky-100"
          >
            Запази час
          </Link>
          <Link
            href="/gallery"
            className="py-2 w-full text-center text-black font-medium hover:bg-sky-100"
          >
            Галерия
          </Link>
          {/* Instagram icon for mobile */}
          <Link
            href="https://www.instagram.com/whittierclubwpf/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-black hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 mx-auto"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
}
