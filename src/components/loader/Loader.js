const Loader = ({ LoadingValue }) => {
  const value = Math.min(100, Math.max(0, LoadingValue));

  return (
    <div className="fixed inset-0 z-[100] flex h-screen w-screen flex-col justify-between bg-ink p-6 text-bone md:p-10">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-label text-muted">
        <span>Adejare™</span>
        <span>Portfolio — Loading</span>
      </div>

      <div className="flex items-end justify-between">
        <p className="mb-4 max-w-[16ch] text-sm uppercase leading-relaxed tracking-label text-muted">
          Frontend Developer & Creative Director
        </p>
        <h1 className="heading text-[150px] leading-none text-bone [font-variant-numeric:tabular-nums]">
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
