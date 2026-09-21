import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function SpecialOffer() {
  const [seconds, setSeconds] = useState(
    2 * 24 * 60 * 60 + 16 * 60 * 60 + 42 * 60,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((value) => {
        if (value <= 0) return 0;
        return value - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const timerItems = [
    ["Days", days],
    ["Hours", hours],
    ["Min", minutes],
    ["Sec", secs],
  ];

  return (
    <section
      id="offers"
      className="
        relative
        overflow-hidden
        border-b-[4px]
        border-vague-black
        bg-vague-red
        px-4
        py-20
        text-white
        sm:px-6
        lg:px-8
        lg:py-28
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          border-[4px]
          border-vague-black
          bg-vague-yellow
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          right-[-80px]
          h-72
          w-72
          rotate-45
          border-[4px]
          border-vague-black
          bg-vague-blue
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1140px]
          xl:max-w-[1220px]
          gap-10
          lg:grid-cols-[1.15fr_0.85fr]
          lg:items-end
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="
              mb-4
              text-xs
              font-black
              uppercase
              tracking-[0.25em]
            "
          >
            Limited / 04
          </p>

          <h2
            className="
              text-[clamp(3.5rem,7vw,7rem)]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.07em]
            "
          >
            50%
            <br />
            Off.
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              font-medium
              leading-relaxed
              sm:text-xl
            "
          >
            Selected pieces. Limited window. No repetition. Once the forms
            disappear, they stay gone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            border-[4px]
            border-vague-black
            bg-white
            p-5
            text-vague-black
            shadow-[8px_8px_0_#121212]
            sm:p-7
          "
        >
          <p
            className="
              mb-5
              text-xs
              font-black
              uppercase
              tracking-[0.22em]
            "
          >
            Sale closes in
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {timerItems.map(([label, value], index) => (
              <div
                key={label}
                className={`
                  border-[3px]
                  border-vague-black
                  p-4
                  text-center
                  ${
                    index === 0
                      ? "bg-vague-yellow"
                      : index === 1
                        ? "bg-vague-blue text-white"
                        : index === 2
                          ? "bg-vague-red text-white"
                          : "bg-vague-bg"
                  }
                `}
              >
                <span
                  className="
                    block
                    text-4xl
                    font-black
                    tracking-[-0.06em]
                  "
                >
                  {String(value).padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-2
                    block
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                  "
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <button
            className="
              bauhaus-button
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-4
              bg-vague-yellow
              px-6
              py-5
              text-vague-black
            "
          >
            Shop the Sale
            <ArrowRight size={21} strokeWidth={3} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialOffer;
