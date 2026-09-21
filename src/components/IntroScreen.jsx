import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function IntroScreen({ onEnter }) {
  return (
    <main className="min-h-screen overflow-hidden bg-vague-bg text-vague-black">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8">
        {/* Ambient Decorative Shapes */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            absolute
            -left-16
            -top-16
            h-36
            w-36
            rounded-full
            border-[4px]
            border-vague-black
            bg-vague-yellow
            sm:h-48
            sm:w-48
          "
        />

        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 45 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{
            duration: 0.55,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[10%]
            hidden
            h-16
            w-16
            border-[3px]
            border-vague-black
            bg-vague-blue
            md:block
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-[10%]
            left-[8%]
            hidden
            h-16
            w-16
            rounded-full
            border-[3px]
            border-vague-black
            bg-vague-red
            lg:block
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="
            shape-triangle
            pointer-events-none
            absolute
            bottom-[8%]
            right-[8%]
            hidden
            h-20
            w-20
            bg-vague-yellow
            md:block
          "
        />

        {/* Central Loader / Intro Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 w-full max-w-4xl"
        >
          <div
            className="
              bauhaus-shadow-lg
              relative
              overflow-hidden
              border-[4px]
              border-vague-black
              bg-white
            "
          >
            {/* Top Bar */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                border-b-[4px]
                border-vague-black
                px-4
                py-3
                sm:px-6
                sm:py-3.5
              "
            >
              <div className="flex items-center gap-2.5">
                <div className="h-4 w-4 rounded-full border-2 border-vague-black bg-vague-red" />
                <div className="h-4 w-4 border-2 border-vague-black bg-vague-blue" />
                <div className="shape-triangle h-4 w-4 bg-vague-yellow" />
              </div>

              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-vague-black/80
                  sm:text-xs
                "
              >
                Fashion / Lifestyle / 2026
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid min-h-[380px] sm:min-h-[420px] lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left Column */}
              <div
                className="
                  flex
                  flex-col
                  justify-between
                  gap-6
                  p-6
                  sm:p-8
                  lg:p-10
                "
              >
                <div>
                  <p
                    className="
                      mb-3
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-[0.22em]
                      text-vague-red
                    "
                  >
                    New digital storefront
                  </p>

                  <h1
                    className="
                      vague-display
                      text-[clamp(3.5rem,7vw,6.5rem)]
                      leading-[0.88]
                    "
                  >
                    Vague
                  </h1>

                  <div className="mt-4 h-2 w-24 bg-vague-yellow sm:w-32" />

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      font-medium
                      leading-relaxed
                      text-vague-black/85
                      sm:text-base
                    "
                  >
                    A bold fashion and lifestyle store built around shape,
                    colour, movement and unapologetic visual identity.
                  </p>
                </div>

                <div>
                  <motion.button
                    whileHover={{
                      x: -2,
                      y: -2,
                    }}
                    whileTap={{
                      x: 3,
                      y: 3,
                    }}
                    onClick={onEnter}
                    className="
                      bauhaus-button
                      inline-flex
                      items-center
                      gap-3
                      bg-vague-red
                      px-6
                      py-3.5
                      text-xs
                      text-white
                      sm:px-8
                      sm:py-4
                      sm:text-sm
                    "
                  >
                    Enter Vague
                    <ArrowRight strokeWidth={3} size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Right Column */}
              <div
                className="
                  bauhaus-dots
                  relative
                  flex
                  min-h-[280px]
                  items-center
                  justify-center
                  overflow-hidden
                  border-t-[4px]
                  border-vague-black
                  bg-vague-blue
                  p-6
                  lg:min-h-full
                  lg:border-l-[4px]
                  lg:border-t-0
                "
              >
                {/* Yellow Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -bottom-12
                    -right-10
                    h-56
                    w-56
                    rounded-full
                    border-[4px]
                    border-vague-black
                    bg-vague-yellow
                    sm:h-72
                    sm:w-72
                  "
                />

                {/* Red Diamond */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 45 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    bottom-4
                    left-[12%]
                    h-24
                    w-24
                    border-[4px]
                    border-vague-black
                    bg-vague-red
                    sm:h-32
                    sm:w-32
                  "
                />

                {/* Central Bauhaus Art Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.5,
                  }}
                  className="
                    bauhaus-shadow
                    relative
                    z-10
                    flex
                    h-32
                    w-36
                    items-center
                    justify-center
                    border-[4px]
                    border-vague-black
                    bg-white
                    sm:h-36
                    sm:w-44
                  "
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-10 w-10 rounded-full border-[3px] border-vague-black bg-vague-black" />
                    <div className="flex gap-2">
                      <div className="h-6 w-6 border-2 border-vague-black bg-vague-red" />
                      <div className="h-6 w-6 rounded-full border-2 border-vague-black bg-vague-yellow" />
                      <div className="h-6 w-6 border-2 border-vague-black bg-vague-blue" />
                    </div>
                  </div>
                </motion.div>

                {/* Small Black Dot */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[12%]
                    top-[12%]
                    h-6
                    w-6
                    rounded-full
                    bg-vague-black
                  "
                />
              </div>
            </div>
          </div>

          <p
            className="
              mt-4
              text-center
              text-[11px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-vague-black/75
              sm:mt-5
            "
          >
            Vague — Fashion & Lifestyle
          </p>
        </motion.div>
      </section>
    </main>
  );
}

export default IntroScreen;
