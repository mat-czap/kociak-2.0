import Image from "next/image";
import Link from "next/link";
import { ReserveButton } from "./ReserveButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-svh min-h-[680px] w-full overflow-hidden"
    >
      <Image
        src="/photos/1st_splash_image2.png"
        alt="Wnętrze Kultowa Bistro — sala z welurową ławą, lampami i roślinami"
        fill
        priority
        sizes="100vw"
        className="hero-kenburns object-cover"
        style={{
          objectPosition: "50% 45%",
          filter: "saturate(1.06) contrast(1.04)",
        }}
      />

      {/* Plum-red mood wash with heavy bottom darkening. Top stop keeps a
          light burgundy tint so the logo card frames cleanly; bottom stop
          goes nearly black-plum so the headline + ghost CTA read without
          fighting the bright wood floor in the photo. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(68, 26, 46, 0.28) 0%, rgba(48, 20, 36, 0.40) 45%, rgba(12, 6, 10, 0.75) 100%)",
        }}
      />

      <div className="relative flex h-full flex-col">
        {/* Mobile: center everything on the main axis (items-center) and
            center text (text-center) so the logo card, headline, paragraph
            and CTAs all stack cleanly down the middle. sm+ reverts to the
            original left-aligned editorial layout. */}
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-end gap-8 px-6 pb-14 pt-24 text-center sm:items-start sm:gap-10 sm:px-10 sm:pt-28 sm:text-left lg:gap-12 lg:pb-20">
          <div
            data-hero-enter="card"
            className="inline-flex w-fit items-center justify-center rounded-3xl bg-cream px-6 py-5 shadow-[0_22px_48px_-24px_rgba(0,0,0,0.5)] sm:px-7 sm:py-6 md:px-8 md:py-7"
          >
            <Image
              src="/logo-full.png"
              alt="Kultowa Bistro"
              width={960}
              height={960}
              priority
              className="h-16 w-auto object-contain sm:h-20 md:h-24"
            />
          </div>

          <div className="max-w-2xl text-white">
            <p
              data-hero-enter="1"
              className="text-xs font-medium tracking-[0.18em] text-white/80 sm:text-sm"
            >
              BAR &middot; BISTRO &middot; PIZZA
            </p>
            {/* The <br/>s are the desktop 3-line composition; on mobile they
                collapse so the sentence can wrap freely. {" "} preserves the
                word spacing that would otherwise be lost (in particular
                "spotkania w Rogoźnie" would read as "spotkaniaw..."). */}
            <h1
              data-hero-enter="2"
              className="font-display mt-4 text-4xl font-semibold leading-[1.05] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem]"
            >
              Ciepło, styl i smak.{" "}
              <br className="hidden sm:inline" />
              Kultowe spotkania{" "}
              <br className="hidden sm:inline" />w Rogoźnie.
            </h1>
            {/* max-w-xl keeps the paragraph legible; mx-auto centers the
                narrower block under the centered headline on mobile, and
                sm:mx-0 releases it back to left-flush on desktop. */}
            <p
              data-hero-enter="3"
              className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:mx-0 sm:text-base"
            >
              Wpadnij na zupę, lunch dla dzieci, klasyczne obiady i coś słodkiego.
              Naturalne światło, miękkie welury i klimat, do którego chce się wracać.
            </p>

            {/* Mobile: column, centered, both CTAs sized to content so they
                don't stretch to card width. sm+: row with wrap, left-flush. */}
            <div
              data-hero-enter="4"
              className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                href="#menu"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-cream-card"
              >
                Nasze menu
              </Link>
              <ReserveButton className="inline-flex items-center justify-center rounded-full border border-white/80 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
                Rezerwuj stolik
              </ReserveButton>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#o-nas"
        aria-label="Przewiń do sekcji O nas"
        className="group absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-white/70 transition-colors hover:text-white sm:bottom-6"
      >
        <span className="hero-scroll-hint block">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-5 w-5 sm:h-6 sm:w-6"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </section>
  );
}
