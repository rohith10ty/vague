import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/storeData";
import SectionHeading from "./SectionHeading";

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((value) => (value === 0 ? testimonials.length - 1 : value - 1));
  };

  const next = () => {
    setCurrent((value) => (value === testimonials.length - 1 ? 0 : value + 1));
  };

  const testimonial = testimonials[current];

  return (
    <section
      className="
        border-b-[4px]
        border-vague-black
        bg-vague-bg
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1140px] xl:max-w-[1220px]">
        <SectionHeading eyebrow="Voices" title="People Say" number="06" />

        <div
          className="
            mt-10
            grid
            overflow-hidden
            border-[4px]
            border-vague-black
            bg-white
            shadow-[8px_8px_0_#121212]
            lg:grid-cols-[0.35fr_0.65fr]
          "
        >
          <div
            className="
              relative
              flex
              min-h-[320px]
              items-center
              justify-center
              overflow-hidden
              border-b-[4px]
              border-vague-black
              bg-vague-yellow
              lg:border-b-0
              lg:border-r-[4px]
            "
          >
            <div
              className="
                absolute
                -left-14
                -top-14
                h-40
                w-40
                rotate-45
                border-[4px]
                border-vague-black
                bg-vague-red
              "
            />

            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="
                relative
                z-10
                h-44
                w-44
                rounded-full
                border-[4px]
                border-vague-black
                object-cover
                grayscale
                shadow-[7px_7px_0_#121212]
              "
            />
          </div>

          <div className="relative p-7 sm:p-10 lg:p-14">
            <Quote size={60} strokeWidth={3} className="mb-7 text-vague-red" />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <p
                  className="
                    max-w-4xl
                    text-2xl
                    font-bold
                    leading-tight
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  “{testimonial.review}”
                </p>

                <div className="mt-8 flex gap-1">
                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill="#F0C020"
                      strokeWidth={2.5}
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <p
                    className="
                      text-xl
                      font-black
                      uppercase
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-3">
              <button
                onClick={previous}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border-[3px]
                  border-vague-black
                  bg-white
                  shadow-[3px_3px_0_#121212]
                  active:translate-x-[3px]
                  active:translate-y-[3px]
                  active:shadow-none
                "
              >
                <ArrowLeft size={21} strokeWidth={3} />
              </button>

              <button
                onClick={next}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border-[3px]
                  border-vague-black
                  bg-vague-red
                  text-white
                  shadow-[3px_3px_0_#121212]
                  active:translate-x-[3px]
                  active:translate-y-[3px]
                  active:shadow-none
                "
              >
                <ArrowRight size={21} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
