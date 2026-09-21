import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import heroModel from "../assets/hero-model.webp";

const lineAnimation = {
  hidden: {
    y: "115%",
  },
  visible: (index) => ({
    y: "0%",
    transition: {
      duration: 0.65,
      delay: 0.18 + index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        flex-col
        justify-between
        overflow-hidden
        border-b-[4px]
        border-vague-black
        bg-vague-bg
        pb-2.5
        pt-[68px]
        sm:pb-3
        sm:pt-[76px]
        lg:h-screen
        lg:min-h-[580px]
        lg:max-h-[100dvh]
        lg:pb-3.5
        lg:pt-[78px]
      "
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] flex-1 flex-col justify-between px-3 sm:px-5 lg:px-6 xl:max-w-[1220px]">
        <div
          className="
            grid
            min-h-0
            flex-1
            overflow-hidden
            border-[3.5px]
            border-vague-black
            bg-white
            shadow-[6px_6px_0_#121212]
            sm:border-[4px]
            sm:shadow-[8px_8px_0_#121212]
            lg:grid-cols-2
            lg:items-stretch
          "
        >
          {/* LEFT COLUMN */}
          <div
            className="
              relative
              flex
              h-full
              min-h-[380px]
              flex-col
              justify-between
              overflow-hidden
              p-5
              sm:min-h-[440px]
              sm:p-7
              lg:min-h-0
              lg:p-6
              xl:p-8
            "
          >
            {/* Decorative yellow circle crop */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="
                pointer-events-none
                absolute
                -left-14
                -top-14
                h-32
                w-32
                rounded-full
                border-[3.5px]
                border-vague-black
                bg-vague-yellow
                sm:h-40
                sm:w-40
              "
            />

            <div className="relative z-10 mt-3 sm:mt-5 lg:mt-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="
                  mb-3
                  inline-flex
                  border-[2.5px]
                  border-vague-black
                  bg-vague-yellow
                  px-3
                  py-1
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  shadow-[2.5px_2.5px_0_#121212]
                  sm:mb-4
                  sm:px-3.5
                  sm:py-1.5
                  sm:text-[11px]
                "
              >
                Collection No. 01 / 2026
              </motion.div>

              <h1
                className="
                  max-w-[540px]
                  text-[clamp(2.1rem,3.4vw,3.75rem)]
                  font-black
                  uppercase
                  leading-[0.88]
                  tracking-[-0.05em]
                "
              >
                {["Wear", "The Art", "Of Every", "Day."].map((line, index) => (
                  <span
                    key={line}
                    className="block overflow-hidden pb-[0.05em]"
                  >
                    <motion.span
                      custom={index}
                      variants={lineAnimation}
                      initial="hidden"
                      animate="visible"
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.45 }}
              className="
                relative
                z-10
                mt-4
                flex
                flex-col
                gap-4
                sm:mt-5
                sm:gap-5
                xl:flex-row
                xl:items-end
                xl:justify-between
              "
            >
              <p
                className="
                  max-w-sm
                  text-xs
                  font-medium
                  leading-relaxed
                  text-vague-black/90
                  sm:text-sm
                  xl:max-w-[300px]
                "
              >
                Objects for the undefined. Fashion, accessories and lifestyle
                pieces built for people who refuse to fit into one shape.
              </p>

              <a
                href="#shop"
                className="
                  bauhaus-button
                  inline-flex
                  w-fit
                  items-center
                  gap-2.5
                  bg-vague-red
                  px-5
                  py-2.5
                  text-xs
                  text-white
                  sm:px-6
                  sm:py-3
                  sm:text-xs
                  lg:text-sm
                "
              >
                Shop Collection
                <ArrowRight size={16} strokeWidth={3} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="
              bauhaus-dots
              relative
              flex
              h-full
              min-h-[360px]
              items-center
              justify-center
              overflow-hidden
              border-t-[3.5px]
              border-vague-black
              bg-vague-blue
              p-4
              sm:min-h-[420px]
              sm:p-6
              lg:min-h-0
              lg:border-l-[3.5px]
              lg:border-t-0
              lg:p-4
              xl:p-6
            "
          >
            {/* Top Right Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="
                absolute
                right-3
                top-3
                z-20
                border-[2.5px]
                border-vague-black
                bg-white
                px-3
                py-1.5
                shadow-[2.5px_2.5px_0_#121212]
                sm:right-5
                sm:top-5
              "
            >
              <p className="text-[10px] font-black uppercase tracking-[0.18em] sm:text-xs">
                New / Selected
              </p>
            </motion.div>

            {/* Background Bauhaus Shapes */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                pointer-events-none
                absolute
                -bottom-[18%]
                -right-[18%]
                h-[260px]
                w-[260px]
                rounded-full
                border-[3.5px]
                border-vague-black
                bg-vague-yellow
                sm:h-[340px]
                sm:w-[340px]
                lg:h-[300px]
                lg:w-[300px]
                xl:h-[380px]
                xl:w-[380px]
              "
            />

            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 45 }}
              transition={{ delay: 0.43, duration: 0.55 }}
              className="
                pointer-events-none
                absolute
                bottom-[6%]
                left-[6%]
                h-20
                w-20
                border-[3px]
                border-vague-black
                bg-vague-red
                sm:h-28
                sm:w-28
              "
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.72 }}
              className="
                pointer-events-none
                absolute
                left-[7%]
                top-[9%]
                h-6
                w-6
                rounded-full
                bg-vague-black
              "
            />

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="
                pointer-events-none
                absolute
                right-[10%]
                top-[18%]
                h-6
                w-6
                rotate-12
                border-2
                border-vague-black
                bg-vague-yellow
              "
            />

            {/* Main Fashion Model Poster Card (5x7 Portrait Shape) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                flex
                aspect-[5/7]
                w-[220px]
                max-w-[85%]
                flex-col
                overflow-hidden
                border-[3.5px]
                border-vague-black
                bg-white
                shadow-[6px_6px_0_#121212]
                sm:w-[260px]
                lg:w-[235px]
                xl:w-[275px]
              "
            >
              {/* Card Header */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-b-[2.5px]
                  border-vague-black
                  bg-white
                  px-3
                  py-1.5
                "
              >
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full border border-vague-black bg-vague-red" />
                  <span className="text-[11px] font-black uppercase tracking-[0.14em]">
                    Vague.
                  </span>
                </div>

                <span className="text-[10px] font-extrabold uppercase tracking-wider text-vague-black/80">
                  01 / Watch
                </span>
              </div>

              {/* Card Image - Clearly visible model portrait (Head, Face, Watch) */}
              <div className="relative min-h-0 flex-1 w-full overflow-hidden bg-white">
                <img
                  src={heroModel}
                  alt="Vague Watch Edition Model"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Card Footer */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-t-[2.5px]
                  border-vague-black
                  bg-white
                  px-3
                  py-1.5
                  sm:py-2
                "
              >
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-vague-black/75">
                    Time Has No Label
                  </p>
                  <p className="text-xs font-black sm:text-sm">₹3,499</p>
                </div>

                <a
                  href="#shop"
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    border-[2px]
                    border-vague-black
                    bg-vague-yellow
                    shadow-[2px_2px_0_#121212]
                    transition-transform
                    hover:-translate-x-0.5
                    hover:-translate-y-0.5
                    active:translate-x-0.5
                    active:translate-y-0.5
                    sm:h-8
                    sm:w-8
                  "
                  aria-label="View product"
                >
                  <ArrowDownRight size={15} strokeWidth={3} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Hero Metadata Label & Section Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="
            mt-2
            flex
            shrink-0
            flex-col
            gap-1
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-vague-black/80
            sm:mt-2.5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-[11px]
          "
        >
          <span>Vague © 2026</span>
          <span>Fashion / Objects / Lifestyle</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
