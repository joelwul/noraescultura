// Thin, detailed line icons — Instagram & WhatsApp.
// Designed to sit inline at small sizes (16–22px) with currentColor strokes.

type Props = { className?: string; size?: number; title?: string };

export function InstagramIcon({ className, size = 18, title }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className, size = 18, title }: Props) {
  // Official WhatsApp glyph (filled), centered handset — no offset.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.255.59 4.456 1.71 6.395L3.2 28.8l6.595-1.73a12.78 12.78 0 0 0 6.205 1.58h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.633-3.75-9.05A12.71 12.71 0 0 0 16.003 3.2zm0 23.31h-.005a10.62 10.62 0 0 1-5.41-1.48l-.388-.23-3.913 1.027 1.045-3.815-.253-.39a10.61 10.61 0 0 1-1.625-5.625c0-5.87 4.777-10.645 10.65-10.645 2.845 0 5.517 1.11 7.526 3.122a10.58 10.58 0 0 1 3.118 7.528c0 5.87-4.777 10.508-10.745 10.508zm5.84-7.97c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.825 1.04-1.012 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.625-.523-.54-.72-.55-.187-.008-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.823.764.33 1.36.527 1.825.673.766.244 1.463.21 2.014.127.614-.092 1.892-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
    </svg>
  );
}
