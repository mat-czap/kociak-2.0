"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ReserveButton } from "./ReserveButton";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#menu", label: "Menu" },
  { href: "#galeria", label: "Galeria" },
  { href: "#rezerwacja", label: "Rezerwacja" },
];

/**
 * Fixed navbar — transparent over the hero, cream once scrolled past it.
 * On narrow viewports (< md) the horizontal nav collapses into a hamburger
 * drawer; desktop layout is unchanged.
 */
export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Flip to solid cream as soon as the user starts scrolling. 24px is the
    // smallest threshold that still feels intentional (not a twitch) while
    // matching "after a bit of scroll" — the bar no longer waits for the
    // whole hero to pass.
    const THRESHOLD = 24;
    const check = () => setScrolled(window.scrollY > THRESHOLD);

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  // ESC closes the drawer; resize to md+ auto-closes so it can't get stuck.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // While the drawer is open, force cream mode so the logo, hamburger and
  // bar background stay legible against the opaque panel — even over hero.
  const onDark = !scrolled && !menuOpen;
  const solidBg = scrolled || menuOpen;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solidBg
          ? "bg-cream shadow-[0_1px_0_0_rgba(29,26,23,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:gap-8 lg:px-10 lg:py-5">
        <Link
          href="#top"
          aria-label="Kultowa Bistro — Rogoźno"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream shadow-[0_10px_24px_-12px_rgba(0,0,0,0.45)] sm:h-11 sm:w-11">
            <Image
              src="/logo.png"
              alt=""
              width={96}
              height={96}
              priority
              quality={95}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-base font-semibold transition-colors duration-300 sm:text-lg ${
                onDark ? "text-white" : "text-ink"
              }`}
            >
              Kultowa Bistro
            </span>
            <span
              className={`text-[11px] font-medium tracking-wide transition-colors duration-300 sm:text-xs ${
                onDark ? "text-white/75" : "text-ink-soft/75"
              }`}
            >
              Rogoźno
            </span>
          </span>
        </Link>

        {/* Matching outline-on-hover treatment to the Rezerwuj pill: each link
            reserves its 1px border as transparent so the layout doesn't shift
            on hover; the same mode-aware colour (white on hero, burgundy on
            cream) then animates in as a pill outline + hairline bg tint. */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 lg:px-5 lg:text-base ${
                onDark
                  ? "border-transparent text-white/85 hover:border-white/50 hover:bg-white/5 hover:text-white"
                  : "border-transparent text-ink-soft hover:border-burgundy/30 hover:bg-burgundy/5 hover:text-burgundy"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Outlined-on-hover: fill drops out, a matching-colour pill border
            appears, text flips to the fill colour. border-transparent in the
            base state reserves the 1px so the button doesn't jitter on
            hover. transition-colors animates bg / text / border together. */}
        <ReserveButton
          className={`hidden items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-200 md:inline-flex lg:px-7 lg:py-3 lg:text-base ${
            onDark
              ? "border-transparent bg-white text-ink hover:border-white hover:bg-transparent hover:text-white"
              : "border-transparent bg-burgundy text-white hover:border-burgundy hover:bg-transparent hover:text-burgundy"
          }`}
        >
          Rezerwuj stolik
        </ReserveButton>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
            onDark
              ? "text-white hover:bg-white/10"
              : "text-ink hover:bg-ink/5"
          }`}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile drawer — slides from under the nav row, fades together */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`absolute left-0 right-0 top-full border-t border-line bg-cream/95 shadow-[0_18px_40px_-24px_rgba(29,26,23,0.25)] backdrop-blur-md transition-[opacity,transform] duration-300 ease-out md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-4 text-base font-medium text-ink-soft transition-colors hover:bg-cream-2 hover:text-burgundy"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-line pt-4">
            <ReserveButton
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-full bg-burgundy px-5 py-3 text-base font-medium text-white transition-colors hover:bg-burgundy-hover"
            >
              Rezerwuj stolik
            </ReserveButton>
          </div>
        </nav>
      </div>
    </header>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block h-4 w-5">
      <span
        className={`absolute left-0 right-0 top-0 h-0.5 origin-center rounded-full bg-current transition-transform duration-300 ease-out ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-150 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 right-0 h-0.5 origin-center rounded-full bg-current transition-transform duration-300 ease-out ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}
