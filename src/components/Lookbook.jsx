import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

function Lookbook() {
  return (
    <section
      className="
        border-b-[4px]
        border-vague-black
        bg-vague-blue
        px-4
        py-16
        text-white
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1140px] xl:max-w-[1220px]">
        <SectionHeading
          eyebrow="Editorial / AW26"
          title="Lookbook"
          number="05"
          dark
        />

        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-12
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              group
              relative
              min-h-[650px]
              overflow-hidden
              border-[4px]
              border-vague-black
              bg-white
              shadow-[8px_8px_0_#121212]
              lg:col-span-7
            "
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1300&q=85"
              alt="VAGUE lookbook"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                grayscale
                transition
                duration-500
                group-hover:scale-105
                group-hover:grayscale-0
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                border-t-[4px]
                border-vague-black
                bg-vague-yellow
                p-6
                text-vague-black
              "
            >
              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                "
              >
                Editorial 01
              </p>

              <h3
                className="
                  mt-2
                  text-4xl
                  font-black
                  uppercase
                  tracking-[-0.06em]
                "
              >
                Undefined Form
              </h3>
            </div>
          </motion.div>

          <div
            className="
              grid
              gap-6
              lg:col-span-5
            "
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                relative
                min-h-[310px]
                overflow-hidden
                border-[4px]
                border-vague-black
                bg-vague-yellow
                p-7
                text-vague-black
                shadow-[7px_7px_0_#121212]
              "
            >
              <div
                className="
                  absolute
                  -right-16
                  -top-16
                  h-48
                  w-48
                  rounded-full
                  border-[4px]
                  border-vague-black
                  bg-vague-red
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.22em]
                  "
                >
                  Manifesto
                </p>

                <h3
                  className="
                    mt-8
                    text-[clamp(3rem,7vw,5.5rem)]
                    font-black
                    uppercase
                    leading-[0.78]
                    tracking-[-0.07em]
                  "
                >
                  No fixed
                  <br />
                  identity.
                </h3>
              </div>

              <ArrowUpRight
                className="absolute bottom-6 right-6"
                size={42}
                strokeWidth={3}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                group
                relative
                min-h-[315px]
                overflow-hidden
                border-[4px]
                border-vague-black
                bg-white
                shadow-[7px_7px_0_#121212]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85"
                alt="Fashion collection"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  transition
                  duration-500
                  group-hover:scale-105
                  group-hover:grayscale-0
                "
              />

              <div
                className="
                  absolute
                  left-4
                  top-4
                  border-[3px]
                  border-vague-black
                  bg-vague-red
                  px-4
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-white
                  shadow-[4px_4px_0_#121212]
                "
              >
                Collection 26
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lookbook;
