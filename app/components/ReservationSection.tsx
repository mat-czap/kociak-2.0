import { ReserveButton } from "./ReserveButton";

export function ReservationSection() {
  return (
    <section id="rezerwacja" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow" data-reveal>Rezerwacja</p>
        <h2
          className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl"
          data-reveal
          data-reveal-step="2"
        >
          Stolik czeka — napisz, kiedy przychodzicie
        </h2>
        <p
          className="text-ink-soft mt-4 max-w-2xl text-base leading-relaxed"
          data-reveal
          data-reveal-step="3"
        >
          Krótki formularz, szybki kontakt. Jeśli wolisz telefon, zadzwoń —
          chętnie dopasujemy termin.
        </p>

        <div
          className="mt-10 rounded-[28px] bg-cream-card p-8 sm:p-10"
          data-reveal
          data-reveal-step="4"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold">Kultowa Bistro</h3>
              <p className="text-ink-soft mt-3 max-w-md text-sm leading-relaxed">
                Rezerwacje przyjmujemy codziennie w godzinach otwarcia. Dla
                większych grup zostaw proszę krótką wiadomość w polu „Uwagi”.
              </p>

              <dl className="mt-6 space-y-1.5 text-sm">
                <div>
                  <dt className="inline font-semibold text-ink">Telefon: </dt>
                  <dd className="inline text-ink-soft">
                    <a href="tel:+48723715712" className="hover:text-burgundy">
                      +48 723 715 712
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink">E-mail: </dt>
                  <dd className="inline text-ink-soft">
                    <a
                      href="mailto:kultowa-bistro@wp.pl"
                      className="hover:text-burgundy"
                    >
                      kultowa-bistro@wp.pl
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink">Godziny: </dt>
                  <dd className="inline text-ink-soft">pon–ndz 12:00–22:00</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <ReserveButton>Otwórz formularz rezerwacji</ReserveButton>
              <p className="text-muted text-xs">Zajmie to ok. 30 sekund.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
