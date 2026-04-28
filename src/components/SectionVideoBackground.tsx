type Props = {
  src: string;
  /** Overlay opacity 0-100. Higher = more text-readable, less video visible. Default 75. */
  overlay?: number;
};

export function SectionVideoBackground({ src, overlay = 75 }: Props) {
  return (
    <>
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-[1px]"
        style={{ backgroundColor: `oklch(0.99 0.002 197.1 / ${overlay / 100})` }}
        aria-hidden
      />
    </>
  );
}
