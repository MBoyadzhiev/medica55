"use client";

import { useState, useEffect, useRef } from "react";

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
      className={`fixed top-0 left-0 w-full bg-transparent z-50 px-4 py-3 transition-opacity duration-300 ${
        show
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Main navbar content */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src="/Whittier_bg.png" alt="Logo" className="h-20" />
          <span className="text-white text-2xl font-bold">
            Whittier Club WPF{" "}
          </span>
        </div>

        {/* Desktop nav */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-bold text-white dark:text-sky-200">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="/contacts">Contact Us</a>
            </li>
          </ul>
          {/* Instagram icon - only show on md and up */}
          <a
            href="https://www.instagram.com/whittierclubwpf/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-white hover:text-pink-400 transition-colors hidden md:inline-flex"
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
        <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-black/90 shadow-lg rounded-b-2xl flex flex-col items-center py-4 md:hidden animate-fade-in z-40">
          <a
            href="#"
            className="py-2 w-full text-center text-sky-900 dark:text-sky-200 font-medium hover:bg-sky-100 dark:hover:bg-sky-800"
          >
            Home
          </a>
          <a
            href="#"
            className="py-2 w-full text-center text-sky-900 dark:text-sky-200 font-medium hover:bg-sky-100 dark:hover:bg-sky-800"
          >
            Partners
          </a>
          <a
            href="#"
            className="py-2 w-full text-center text-sky-900 dark:text-sky-200 font-medium hover:bg-sky-100 dark:hover:bg-sky-800"
          >
            About Us
          </a>
          <a
            href="#"
            className="py-2 w-full text-center text-sky-900 dark:text-sky-200 font-medium hover:bg-sky-100 dark:hover:bg-sky-800"
          >
            Schedule
          </a>
          <a
            href="#"
            className="py-2 w-full text-center text-sky-900 dark:text-sky-200 font-medium hover:bg-sky-100 dark:hover:bg-sky-800"
          >
            Contact Us
          </a>
          {/* Instagram icon for mobile */}
          <a
            href="https://www.instagram.com/whittierclubwpf/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sky-900 dark:text-sky-200 hover:text-pink-400 transition-colors"
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
          </a>
        </div>
      )}
    </nav>
  );
}
