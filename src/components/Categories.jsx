import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/storeData";
import SectionHeading from "./SectionHeading";

function Categories() {
  return (
    <section
      id="categories"
      className="
        scroll-mt-28
        border-b-[4px]
        border-vague-black
        bg-vague-bg
        px-3
        py-12
        sm:px-5
        sm:py-16
        lg:px-6
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[840px] xl:max-w-[880px]">
        <SectionHeading eyebrow="Shop by form" title="Categories" number="01" />

        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-4.5
            lg:grid-cols-3
          "
        >
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href="#shop"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                border-[3px]
                border-vague-black
                bg-white
                shadow-[4px_4px_0_#121212]
                transition-transform
                duration-200
                hover:-translate-x-0.5
                hover:-translate-y-0.5
                hover:shadow-[6px_6px_0_#121212]
              "
            >
              {/* 1:1 SQUARE IMAGE BOX - Exact match to image dimensions for full view */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#f3f0ea]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    grayscale
                    transition
                    duration-500
                    group-hover:scale-105
                    group-hover:grayscale-0
                  "
                />

                <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              {/* Bottom Label Bar */}
              <div
                className="
                  relative
                  z-10
                  flex
                  shrink-0
                  items-center
                  justify-between
                  gap-2.5
                  border-t-[3px]
                  border-vague-black
                  bg-white
                  px-3.5
                  py-2.5
                  sm:px-4
                  sm:py-3
                "
              >
                <div>
                  <span
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-vague-black/75
                      sm:text-[10px]
                    "
                  >
                    {category.number}
                  </span>

                  <h3
                    className="
                      mt-0.5
                      text-base
                      font-black
                      uppercase
                      tracking-[-0.03em]
                      sm:text-lg
                    "
                  >
                    {category.title}
                  </h3>
                </div>

                <div
                  style={{
                    background: category.accent,
                  }}
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    border-[2px]
                    border-vague-black
                    shadow-[2px_2px_0_#121212]
                    transition-transform
                    duration-200
                    group-hover:rotate-12
                    sm:h-9
                    sm:w-9
                  "
                >
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
