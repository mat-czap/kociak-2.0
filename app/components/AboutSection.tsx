import Image from "next/image";

export function AboutSection() {
  return (
    <section id="o-nas" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow" data-reveal>O nas</p>
        <h2
          className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl"
          data-reveal
          data-reveal-step="2"
        >
          Kultowe miejsce w Rogoźnie
        </h2>
        <p
          className="text-ink-soft mt-4 max-w-2xl text-base leading-relaxed"
          data-reveal
          data-reveal-step="3"
        >
          Kultowa Bistro przy ul. Wojska Polskiego 4 — miejsce, gdzie codzienność
          smakuje lepiej: ciepłe wnętrze, dobre tempo i kuchnia, do której wraca się
          bez okazji.
        </p>

        <div
          className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          data-reveal
          data-reveal-step="4"
        >
          {/* 2_alone_image2.png — banquette close-up, mirrors the photo used
              on the left column of the "O nas" design. The very soft drop
              shadow is the only non-structural polish: it stops the frame
              from looking painted-on without turning it into a "card". */}
          <div className="relative h-[460px] overflow-hidden rounded-[28px] shadow-[0_20px_44px_-28px_rgba(29,20,14,0.22)] sm:h-[520px] lg:h-[560px]">
            <Image
              src="/photos/2_alone_image2.png"
              alt="Sala Kultowa Bistro — welurowa ława, stoły z naczyniami, rośliny"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 55%" }}
            />
          </div>

          <div className="flex flex-col justify-center space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Wpadnij na{" "}
              <span className="font-medium text-ink">krem z białych warzyw</span>,
              klasyczną pomidorową albo coś konkretnego na obiad. Lubisz proste,
              dobrze zrobione rzeczy? My też.
            </p>
            <p>
              Dla najmłodszych mamy szybkie i lubiane zestawy lunchowe, a dla
              wszystkich — dania, które łączą komfort z lekką nutą „retro-modern”.
            </p>
            <p>
              Przyjdź na spotkanie, randkę albo rodzinny obiad. Tu jest miękko,
              jasno i spokojnie — a obsługa zawsze ma czas, żeby doradzić.
            </p>

            <div className="card-hover mt-4 rounded-2xl bg-cream-card p-6">
              <p className="text-sm font-semibold tracking-wide text-ink">W skrócie</p>
              <p className="text-muted mt-2 text-sm">
                Ciepłe wnętrze &middot; Smakowite klasyki &middot; Dobra energia
                przez cały tydzień
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
