"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Ctx = { open: () => void; close: () => void };

const ReservationCtx = createContext<Ctx | null>(null);

export function useReservation() {
  const ctx = useContext(ReservationCtx);
  if (!ctx) throw new Error("useReservation must be inside ReservationProvider");
  return ctx;
}

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setSubmitted(false);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
  }, [isOpen]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === dlg) dlg.close();
    };
    const onClose = () => setIsOpen(false);
    dlg.addEventListener("click", onClick);
    dlg.addEventListener("close", onClose);
    return () => {
      dlg.removeEventListener("click", onClick);
      dlg.removeEventListener("close", onClose);
    };
  }, []);

  return (
    <ReservationCtx.Provider value={{ open, close }}>
      {children}
      <dialog
        ref={dialogRef}
        className="m-auto rounded-3xl bg-cream-2 p-0 text-ink shadow-2xl backdrop:bg-black/50 w-[min(92vw,520px)]"
      >
        {isOpen && (
          <ReservationForm
            submitted={submitted}
            onSubmit={() => setSubmitted(true)}
            onClose={close}
          />
        )}
      </dialog>
    </ReservationCtx.Provider>
  );
}

function ReservationForm({
  submitted,
  onSubmit,
  onClose,
}: {
  submitted: boolean;
  onSubmit: () => void;
  onClose: () => void;
}) {
  return (
    <div className="p-8 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Rezerwacja</p>
          <h3 className="font-display text-3xl font-semibold mt-1">
            Zarezerwuj stolik
          </h3>
          <p className="text-muted mt-2 max-w-sm text-sm leading-relaxed">
            Zostaw dane kontaktowe — potwierdzimy rezerwację telefonicznie.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-sm font-medium text-ink hover:text-burgundy"
        >
          Zamknij
        </button>
      </div>

      {submitted ? (
        <div className="mt-8 rounded-2xl bg-white p-6 text-center">
          <p className="font-display text-xl font-semibold">Dziękujemy!</p>
          <p className="text-muted mt-2 text-sm">
            Skontaktujemy się z Państwem wkrótce, by potwierdzić rezerwację.
          </p>
        </div>
      ) : (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <Field label="Imię i nazwisko">
            <input
              required
              type="text"
              name="name"
              className="w-full rounded-full bg-white px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:ring-2 focus:ring-burgundy/30"
              placeholder=""
            />
          </Field>

          <Field label="Telefon">
            <input
              required
              type="tel"
              name="phone"
              placeholder="+48 123 456 789"
              className="w-full rounded-full bg-white px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:ring-2 focus:ring-burgundy/30"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Data">
              <input
                required
                type="date"
                name="date"
                defaultValue={localTodayISO()}
                min={localTodayISO()}
                className="w-full rounded-full bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-burgundy/30"
              />
            </Field>
            <Field label="Godzina">
              <select
                name="time"
                required
                defaultValue=""
                className="w-full appearance-none rounded-full bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-burgundy/30"
              >
                <option value="" disabled>
                  Wybierz godzinę
                </option>
                {["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"].map(
                  (t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ),
                )}
              </select>
            </Field>
          </div>

          <Field label="Liczba osób">
            <input
              required
              type="number"
              name="people"
              min={1}
              max={20}
              defaultValue={4}
              className="w-full rounded-full bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-burgundy/30"
            />
          </Field>

          <Field label="Uwagi">
            <textarea
              name="notes"
              rows={3}
              placeholder="Alergie, okno, okazja..."
              className="w-full rounded-2xl bg-white px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:ring-2 focus:ring-burgundy/30"
            />
          </Field>

          <button type="submit" className="btn-primary w-full mt-2">
            Wyślij rezerwację
          </button>
        </form>
      )}
    </div>
  );
}

function localTodayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
