const Loader = ({ LoadingValue, exiting }) => {
  const value = Math.min(100, Math.max(0, LoadingValue));

  return (
    <div
      aria-hidden={exiting}
      className="fixed inset-0 z-[200] flex h-screen w-screen flex-col justify-between bg-ink p-6 text-bone transition-transform duration-[900ms] ease-expo md:p-10"
      style={{ transform: exiting ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div
        className="flex items-center justify-between text-[11px] uppercase tracking-label text-muted transition-opacity duration-300"
        style={{ opacity: exiting ? 0 : 1 }}
      >
        <span>
          Adejare<span className="text-accent">©</span>
        </span>
        <span>Folio — 2023</span>
        <span className="hidden md:block">Lagos, Nigeria</span>
      </div>

      <div
        className="flex items-end justify-between transition-opacity duration-300"
        style={{ opacity: exiting ? 0 : 1 }}
      >
        <p className="mb-5 max-w-[18ch] text-sm uppercase leading-relaxed tracking-label text-muted">
          Frontend Developer &amp; Creative Director
        </p>
        <h1 className="heading text-[clamp(7rem,26vw,15rem)] leading-[0.85] text-bone [font-variant-numeric:tabular-nums]">
          {value}
          <span className="text-accent">%</span>
        </h1>
      </div>

      <div
        className="h-[3px] w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-100 ease-linear"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
