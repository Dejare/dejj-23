import { FiArrowUpRight } from "react-icons/fi";

const NewProjectCard = ({
  index,
  title,
  details,
  stackOne,
  stackTwo,
  image,
  link,
  flip,
}) => {
  return (
    <article className="group grid items-center gap-8 md:grid-cols-12 md:gap-10" data-fade>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} — visit live site`}
        data-parallax-wrap=""
        className={`relative block overflow-hidden rounded-[20px] md:col-span-7 ${
          flip ? "md:order-2" : ""
        }`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            data-parallax=""
            className="absolute left-0 top-[-12%] h-[124%] w-full object-cover brightness-[0.96] transition-[filter] duration-700 ease-out group-hover:brightness-110"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 font-head text-[11px] uppercase tracking-label text-bone backdrop-blur-md">
          (0{index})
        </span>
      </a>

      <div className={`md:col-span-5 ${flip ? "md:order-1 md:pr-4" : "md:pl-4"}`}>
        <h3 className="heading uppercase leading-[0.92] text-[clamp(2.6rem,5.5vw,4.8rem)] transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="body mt-5 max-w-[46ch] text-lg leading-relaxed text-bone/70">
          {details}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {stackOne && <span className="text-bubble">{stackOne}</span>}
          {stackTwo && <span className="text-bubble">{stackTwo}</span>}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="button mt-9 inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3 text-[11px] uppercase tracking-label text-bone transition-colors duration-300 ease-out hover:bg-bone hover:text-ink"
        >
          Visit site
          <FiArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
};

export default NewProjectCard;
