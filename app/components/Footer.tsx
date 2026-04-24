import Image from "next/image";

const MAPS_URL =
  "https://www.google.com/maps?ll=52.752329,16.989439&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=Wojska+Polskiego+4+64-610+Rogo%C5%BAno";
const MAPS_EMBED =
  "https://www.google.com/maps?ll=52.752329,16.989439&z=15&q=Wojska+Polskiego+4+64-610+Rogo%C5%BAno&output=embed";

export function Footer() {
  return (
    <footer className="bg-cream-footer">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center justify-center rounded-2xl bg-cream-2 px-4 py-3">
              <Image
                src="/logo-full.png"
                alt="Kultowa Bistro"
                width={960}
                height={960}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-ink-soft mt-5 max-w-xs text-sm leading-relaxed">
              Bar &middot; Bistro &middot; Pizza — ciepłe wnętrze i smaki, które
              dobrze brzmią w rozmowie.
            </p>
            <a
              href="https://www.facebook.com/p/Kultowa-Bistro-61587042214247/"
              aria-label="Kultowa Bistro na Facebooku"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-white transition-colors hover:bg-burgundy-hover"
            >
              <FacebookIcon />
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
              Kontakt
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Adres</dt>
                <dd className="text-ink-soft mt-1">
                  ul. Wojska Polskiego 4<br />
                  64-610 Rogoźno
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Telefon</dt>
                <dd className="text-ink-soft mt-1">
                  <a href="tel:+48723715712" className="hover:text-burgundy">
                    +48 723 715 712
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">E-mail</dt>
                <dd className="text-ink-soft mt-1">
                  <a
                    href="mailto:kultowa-bistro@wp.pl"
                    className="hover:text-burgundy"
                  >
                    kultowa-bistro@wp.pl
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Godziny otwarcia</dt>
                <dd className="text-ink-soft mt-1">
                  poniedziałek–niedziela: 12:00–22:00
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
              Jak dojechać
            </p>
            <div className="relative mt-5 overflow-hidden rounded-2xl">
              <iframe
                src={MAPS_EMBED}
                title="Mapa — ul. Wojska Polskiego 4, Rogoźno"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
              {/* "Open in Maps" chip — the iframe itself swallows clicks */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-ink shadow-md transition-colors hover:bg-cream-card"
              >
                Open in Maps
                <ExternalIcon />
              </a>
            </div>
            <p className="text-muted mt-3 text-xs">
              Wejście przy ul. Wojska Polskiego 4 — 64-610 Rogoźno.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>&copy; 2026 Kultowa Bistro. Wszelkie prawa zastrzeżone.</p>
          <p className="uppercase tracking-[0.22em]">
            Website by{" "}
            <span className="mc-signature">
              <span className="mc-signature__icon" aria-hidden>
                <span className="mc-signature__ring" />
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mc-signature__heart"
                  aria-hidden
                >
                  <path d="M12 21s-7.3-4.6-9.6-9.1A5.6 5.6 0 0 1 12 5.4a5.6 5.6 0 0 1 9.6 6.5C19.3 16.4 12 21 12 21z" />
                </svg>
              </span>
              MC dla Adiego
            </span>
          </p>
          <p>ul. Wojska Polskiego 4 &middot; Rogoźno</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5V13h2.6v8h3.4z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <path d="M2 2h6v6M2 8l6-6" strokeLinecap="round" />
    </svg>
  );
}
