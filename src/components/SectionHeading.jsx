import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, number, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`
        flex
        flex-col
        gap-4
        border-b-[3.5px]
        pb-5
        sm:flex-row
        sm:items-end
        sm:justify-between
        sm:pb-6
        ${
          dark
            ? "border-white text-white"
            : "border-vague-black text-vague-black"
        }
      `}
    >
      <div>
        <p
          className="
            mb-2.5
            text-[11px]
            font-black
            uppercase
            tracking-[0.22em]
            sm:text-xs
          "
        >
          {eyebrow}
        </p>

        <h2
          className="
            text-[clamp(2.1rem,4.2vw,3.9rem)]
            font-black
            uppercase
            leading-[0.88]
            tracking-[-0.06em]
          "
        >
          {title}
        </h2>
      </div>

      {number && (
        <span
          className="
            text-4xl
            font-black
            tracking-[-0.06em]
            sm:text-6xl
          "
        >
          {number}
        </span>
      )}
    </motion.div>
  );
}

export default SectionHeading;
