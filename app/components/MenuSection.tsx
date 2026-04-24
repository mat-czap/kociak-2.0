"use client";

import { useState } from "react";

type Item = { name: string; prices: string; desc: string };

const menu: Record<string, Item[]> = {
  Pizza: [
    {
      name: "Kultowa",
      prices: "30 cm — 42 zł · 40 cm — 50 zł",
      desc: "Sos pomidorowy, ser, szynka, salami, pieczarki, boczek, papryczka jalapeño, chorizo, cebula.",
    },
    {
      name: "Margherita",
      prices: "30 cm — 26 zł · 40 cm — 38 zł",
      desc: "Sos pomidorowy, ser, bazylia.",
    },
    {
      name: "Prosciutto",
      prices: "30 cm — 30 zł · 40 cm — 44 zł",
      desc: "Sos pomidorowy, ser, szynka gotowana.",
    },
    {
      name: "Salame",
      prices: "30 cm — 30 zł · 40 cm — 44 zł",
      desc: "Sos pomidorowy, ser, salami.",
    },
    {
      name: "Capricciosa",
      prices: "30 cm — 32 zł · 40 cm — 46 zł",
      desc: "Sos pomidorowy, ser, pieczarki, szynka.",
    },
    {
      name: "Salame picante",
      prices: "30 cm — 32 zł · 40 cm — 46 zł",
      desc: "Sos pomidorowy, ser, salame picante, czosnek, karmelizowana cebula.",
    },
  ],
  Zupy: [
    { name: "Pomidorowa", prices: "16 zł", desc: "Klasyczna, z makaronem lub ryżem, na domowym rosole." },
    { name: "Krem z białych warzyw", prices: "18 zł", desc: "Kalafior, pietruszka, seler, odrobina śmietanki, pestki słonecznika." },
    { name: "Żurek", prices: "19 zł", desc: "Na zakwasie, z białą kiełbasą i jajkiem." },
    { name: "Rosół z makaronem", prices: "16 zł", desc: "Długo gotowany, z natką pietruszki." },
  ],
  "Lunch Kids": [
    { name: "Makaron z masłem i serem", prices: "18 zł", desc: "Dla najmłodszych — prosto i smacznie." },
    { name: "Nuggetsy z frytkami", prices: "22 zł", desc: "Domowe nuggetsy z kurczaka, surówka colesław." },
    { name: "Naleśniki z dżemem", prices: "18 zł", desc: "Cienkie, zawijane, z truskawkowym dżemem." },
    { name: "Zupa dnia + drugie danie", prices: "28 zł", desc: "Zapytaj kelnera o dzisiejszy zestaw." },
  ],
  "Dania Obiadowe": [
    { name: "Schabowy z ziemniakami", prices: "34 zł", desc: "Panierowany kotlet, ziemniaki z koperkiem, modra kapusta." },
    { name: "Pierogi ruskie", prices: "28 zł", desc: "Z cebulką i skwarkami albo maślane — do wyboru." },
    { name: "Filet z kurczaka, puree, warzywa", prices: "32 zł", desc: "Pieczony filet, puree ziemniaczane, sezonowe warzywa." },
    { name: "Placki po węgiersku", prices: "36 zł", desc: "Z gulaszem wołowym, śmietaną i natką." },
  ],
  Słodkości: [
    { name: "Sernik babci", prices: "16 zł", desc: "Na tłustym twarogu, z rodzynkami." },
    { name: "Szarlotka z lodami", prices: "18 zł", desc: "Na ciepło, z gałką lodów waniliowych." },
    { name: "Brownie", prices: "17 zł", desc: "Z gorzkiej czekolady, orzechy, sos malinowy." },
    { name: "Panna cotta", prices: "17 zł", desc: "Z sosem z owoców sezonowych." },
  ],
};

const categories = Object.keys(menu);

export function MenuSection() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-center sm:text-left" data-reveal>Menu</p>
        <h2
          className="font-display mt-3 text-center text-4xl font-semibold leading-tight sm:text-left sm:text-5xl"
          data-reveal
          data-reveal-step="2"
        >
          Klasyki, które lubisz — w najlepszym wydaniu
        </h2>
        <p
          className="text-ink-soft mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed sm:mx-0 sm:text-left"
          data-reveal
          data-reveal-step="3"
        >
          Proste składniki, czytelne smaki i ceny wyeksponowane w burgundzie.
          Wybierz kategorię i zobacz propozycje.
        </p>

        <div className="mt-10 md:overflow-x-auto" data-reveal data-reveal-step="4">
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-3xl bg-white p-1.5 shadow-[0_2px_10px_-6px_rgba(0,0,0,0.15)] md:min-w-fit md:flex-nowrap md:justify-start md:rounded-full">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-burgundy text-white"
                      : "text-ink-soft hover:text-burgundy"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {menu[active].map((item) => (
            <article
              key={item.name}
              className="card-hover menu-card rounded-2xl p-6 sm:p-7"
            >
              <h3 className="font-display text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm font-medium text-burgundy">{item.prices}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
