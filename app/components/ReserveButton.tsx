"use client";

import { useReservation } from "./ReservationProvider";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Side-effect fired before the dialog opens — e.g. close a parent drawer. */
  onClick?: () => void;
};

export function ReserveButton({
  children,
  className = "btn-primary",
  style,
  onClick,
}: Props) {
  const { open } = useReservation();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
