"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Tab = "Wnętrze" | "Potrawy";

type Tile = { src: string; alt: string; position?: string };

/** Real photos from current-page/images — 2×2 grid matching the design. */
const INTERIOR: Tile[] = [
  { src: "/photos/2_alone_image2.png", alt: "Welurowa ława z roślinami", position: "50% 55%" },
  { src: "/photos/image-2.png", alt: "Detal stołu i naczyń", position: "50% 60%" },
  { src: "/photos/image-3.png", alt: "Sala przy oknach — ciepłe światło", position: "50% 55%" },
  { src: "/photos/image-4.png", alt: "Kieliszki i kwiaty na stole", position: "50% 55%" },
];

type Dish = {
  label: string;
  caption: string;
  /** CSS background gradient behind the plate */
  bg: string;
  svg: React.ReactNode;
};

/** Four stylised "dishes" rendered with inline SVG — placeholders until
 *  real food photography is available. */
const DISHES: Dish[] = [
  {
    label: "Pizza Kultowa",
    caption: "Sos pomidorowy, bazylia, mozzarella",
    bg: "radial-gradient(120% 120% at 30% 30%, #f7e8c9 0%, #e0c287 55%, #a57a3a 100%)",
    svg: <PizzaIcon />,
  },
  {
    label: "Makaron z pomidorami",
    caption: "Pappardelle, sos pomidorowy, parmezan",
    bg: "radial-gradient(120% 120% at 30% 30%, #f5ecd6 0%, #d9bb82 55%, #8f6a31 100%)",
    svg: <PastaIcon />,
  },
  {
    label: "Żurek",
    caption: "Biała kiełbasa, jajko, majeranek",
    bg: "radial-gradient(120% 120% at 30% 30%, #efe2c6 0%, #c7a86d 55%, #7a5a2b 100%)",
    svg: <SoupIcon />,
  },
  {
    label: "Sernik babci",
    caption: "Na tłustym twarogu, z owocami sezonu",
    bg: "radial-gradient(120% 120% at 30% 30%, #fbeecd 0%, #e5c382 55%, #a87b35 100%)",
    svg: <CakeIcon />,
  },
];

export function GallerySection() {
  const [tab, setTab] = useState<Tab>("Wnętrze");
  const [openIndex, setOpenIndex] = useState(-1);

  const slides = INTERIOR.map((t) => ({ src: t.src, alt: t.alt }));

  return (
    <section id="galeria" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-center sm:text-left" data-reveal>Galeria</p>
        <h2
          className="font-display mt-3 text-center text-4xl font-semibold leading-tight sm:text-left sm:text-5xl"
          data-reveal
          data-reveal-step="2"
        >
          Światło, welur i detal
        </h2>
        <p
          className="text-ink-soft mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed sm:mx-0 sm:text-left"
          data-reveal
          data-reveal-step="3"
        >
          Prawdziwe wnętrze Kultowa Bistro — ciepłe, przestronne i stworzone do
          spotkań.
        </p>

        <div className="mt-10 flex justify-center" data-reveal data-reveal-step="4">
          <div className="inline-flex items-center gap-1 rounded-full bg-white p-1.5 shadow-[0_2px_10px_-6px_rgba(0,0,0,0.15)]">
            {(["Wnętrze", "Potrawy"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  tab === t
                    ? "bg-burgundy text-white"
                    : "text-ink-soft hover:text-burgundy"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {tab === "Wnętrze"
            ? INTERIOR.map((tile, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Powiększ: ${tile.alt}`}
                  className="group relative block h-[360px] w-full cursor-zoom-in overflow-hidden rounded-2xl sm:h-[420px]"
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: tile.position ?? "center" }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
                  />
                </button>
              ))
            : DISHES.map((dish, i) => (
                <article
                  key={i}
                  className="relative flex h-[360px] flex-col items-center justify-center overflow-hidden rounded-2xl p-8 sm:h-[420px]"
                  style={{ background: dish.bg }}
                >
                  {/* subtle vignette for depth */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 70% 80%, transparent 40%, rgba(0,0,0,0.25) 100%)",
                    }}
                  />
                  <div className="relative flex flex-col items-center text-center">
                    {dish.svg}
                    <p className="font-display mt-6 text-2xl font-semibold text-ink">
                      {dish.label}
                    </p>
                    <p className="text-ink-soft mt-1 text-sm">{dish.caption}</p>
                  </div>
                </article>
              ))}
        </div>
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        slides={slides}
        index={openIndex >= 0 ? openIndex : 0}
      />
    </section>
  );
}

/* ----------------------------- dish SVGs ----------------------------- */

function PizzaIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-36 w-36 drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]" aria-hidden>
      <circle cx="100" cy="100" r="88" fill="#f5ead3" />
      <circle cx="100" cy="100" r="82" fill="#e8b778" />
      <circle cx="100" cy="100" r="74" fill="#d4753a" />
      <circle cx="100" cy="100" r="70" fill="#c8562a" />
      {/* cheese splotches */}
      <ellipse cx="82" cy="80" rx="9" ry="7" fill="#f5d76e" opacity="0.9" />
      <ellipse cx="120" cy="92" rx="8" ry="6" fill="#f5d76e" opacity="0.9" />
      <ellipse cx="98" cy="120" rx="10" ry="7" fill="#f5d76e" opacity="0.9" />
      <ellipse cx="70" cy="115" rx="7" ry="5" fill="#f5d76e" opacity="0.9" />
      {/* tomato dots */}
      <circle cx="75" cy="92" r="4" fill="#a92232" />
      <circle cx="128" cy="78" r="4" fill="#a92232" />
      <circle cx="110" cy="110" r="4" fill="#a92232" />
      <circle cx="88" cy="132" r="4" fill="#a92232" />
      {/* basil */}
      <ellipse cx="95" cy="95" rx="5" ry="9" fill="#2f5d2a" transform="rotate(25 95 95)" />
      <ellipse cx="118" cy="118" rx="4" ry="7" fill="#2f5d2a" transform="rotate(-15 118 118)" />
    </svg>
  );
}

function PastaIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-36 w-36 drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]" aria-hidden>
      <circle cx="100" cy="100" r="88" fill="#fbf3df" />
      <circle cx="100" cy="100" r="78" fill="#f0e3c0" />
      <circle cx="100" cy="100" r="72" fill="#ead9a6" />
      {/* noodles curls */}
      <g fill="none" stroke="#e4b856" strokeWidth="5" strokeLinecap="round" opacity="0.95">
        <path d="M50 95 Q70 82 95 92 Q120 102 150 90" />
        <path d="M55 108 Q78 96 102 104 Q130 114 148 105" />
        <path d="M58 122 Q82 112 108 118 Q132 126 150 120" />
        <path d="M60 135 Q85 128 112 132 Q135 136 148 132" />
      </g>
      {/* tomato sauce dollops */}
      <ellipse cx="88" cy="102" rx="10" ry="6" fill="#a92232" opacity="0.9" />
      <ellipse cx="124" cy="118" rx="8" ry="5" fill="#a92232" opacity="0.9" />
      {/* basil */}
      <ellipse cx="108" cy="96" rx="5" ry="8" fill="#2f5d2a" transform="rotate(30 108 96)" />
      {/* parmesan flakes */}
      <rect x="70" y="90" width="5" height="3" fill="#f2e3b4" transform="rotate(20 72 92)" />
      <rect x="130" y="100" width="5" height="3" fill="#f2e3b4" transform="rotate(-15 132 102)" />
    </svg>
  );
}

function SoupIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-36 w-36 drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]" aria-hidden>
      {/* bowl shadow */}
      <ellipse cx="100" cy="160" rx="75" ry="8" fill="#000" opacity="0.12" />
      {/* bowl */}
      <path
        d="M22 112 Q100 168 178 112 L170 132 Q100 178 30 132 Z"
        fill="#c9b388"
      />
      <ellipse cx="100" cy="112" rx="78" ry="16" fill="#e0ceaa" />
      {/* soup surface */}
      <ellipse cx="100" cy="111" rx="70" ry="12" fill="#ead5a5" />
      {/* egg half */}
      <ellipse cx="112" cy="108" rx="11" ry="7" fill="#ffffff" />
      <circle cx="112" cy="106" r="4" fill="#f5c542" />
      {/* sausage slices */}
      <ellipse cx="82" cy="114" rx="9" ry="3" fill="#c98157" />
      <circle cx="82" cy="113" r="2.5" fill="#e8b39a" />
      <ellipse cx="130" cy="118" rx="7" ry="2.5" fill="#c98157" />
      <circle cx="130" cy="117" r="2" fill="#e8b39a" />
      {/* parsley */}
      <circle cx="92" cy="102" r="2" fill="#2f5d2a" />
      <circle cx="118" cy="122" r="2" fill="#2f5d2a" />
      <circle cx="100" cy="116" r="1.5" fill="#2f5d2a" />
      {/* steam */}
      <g fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
        <path d="M80 88 Q85 78 80 68" />
        <path d="M100 85 Q106 73 100 62" />
        <path d="M122 90 Q127 80 122 70" />
      </g>
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-36 w-36 drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]" aria-hidden>
      {/* plate */}
      <ellipse cx="100" cy="148" rx="82" ry="12" fill="#f5ead3" />
      <ellipse cx="100" cy="144" rx="72" ry="9" fill="#ebdcbc" />
      {/* cake slice body */}
      <path d="M72 96 L132 96 L120 146 L84 146 Z" fill="#f3d894" />
      {/* top layer */}
      <path d="M72 96 L132 96 L128 102 L76 102 Z" fill="#e3bf6c" />
      {/* shadow side */}
      <path d="M132 96 L120 146 L128 146 L139 100 Z" fill="#d9a84f" opacity="0.55" />
      {/* berries */}
      <circle cx="95" cy="93" r="5" fill="#a92232" />
      <circle cx="107" cy="90" r="6" fill="#c53044" />
      <circle cx="117" cy="94" r="4" fill="#a92232" />
      <circle cx="100" cy="87" r="2" fill="#e8707f" />
      <circle cx="111" cy="85" r="2" fill="#e8707f" />
      {/* mint leaf */}
      <ellipse cx="104" cy="82" rx="5" ry="8" fill="#2f5d2a" transform="rotate(-20 104 82)" />
      <path d="M104 82 L101 88" stroke="#1f3f1c" strokeWidth="1" />
    </svg>
  );
}
