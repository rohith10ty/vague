import { motion } from "framer-motion";

const strips = [
  {
    color: "bg-vague-red",
    delay: 0,
    direction: "-100%",
  },
  {
    color: "bg-vague-blue",
    delay: 0.08,
    direction: "100%",
  },
  {
    color: "bg-vague-yellow",
    delay: 0.16,
    direction: "-100%",
  },
  {
    color: "bg-vague-black",
    delay: 0.24,
    direction: "100%",
  },
];

function PageTransition() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div className="absolute inset-0 grid grid-rows-4">
        {strips.map((strip, index) => (
          <motion.div
            key={index}
            initial={{
              x: strip.direction,
            }}
            animate={{
              x: ["0%", "0%", strip.direction === "-100%" ? "100%" : "-100%"],
            }}
            transition={{
              duration: 1.45,
              delay: strip.delay,
              times: [0, 0.54, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            className={`relative ${strip.color}`}
          />
        ))}
      </div>

      {/* Center branding */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.75, 1, 1, 1.12],
        }}
        transition={{
          duration: 1.1,
          delay: 0.35,
          times: [0, 0.25, 0.7, 1],
          ease: "easeOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            bauhaus-shadow-lg
            flex
            items-center
            gap-5
            border-[4px]
            border-vague-black
            bg-white
            px-7
            py-5
            sm:px-10
            sm:py-6
          "
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="
                h-6
                w-6
                rounded-full
                border-[3px]
                border-vague-black
                bg-vague-red
                sm:h-8
                sm:w-8
              "
            />

            <div
              className="
                h-6
                w-6
                border-[3px]
                border-vague-black
                bg-vague-blue
                sm:h-8
                sm:w-8
              "
            />

            <div
              className="
                shape-triangle
                h-7
                w-7
                bg-vague-yellow
                sm:h-9
                sm:w-9
              "
            />
          </div>

          <span
            className="
              text-3xl
              font-black
              uppercase
              tracking-[-0.07em]
              text-vague-black
              sm:text-5xl
            "
          >
            Vague.
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default PageTransition;
