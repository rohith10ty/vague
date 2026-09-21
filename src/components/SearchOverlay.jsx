import { useMemo, useState } from "react";

import { ArrowRight, Search, ShoppingBag, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { products } from "../data/storeData";
import { useStore } from "../context/StoreContext";

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");

  const { addToCart } = useStore();

  const results = useMemo(() => {
    if (!query.trim()) {
      return products;
    }

    const value = query.toLowerCase();

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value),
    );
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[300]
            overflow-y-auto
            bg-vague-yellow
            p-3
            sm:p-6
          "
        >
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -50,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              mx-auto
              min-h-[calc(100vh-24px)]
              max-w-[1440px]
              border-[4px]
              border-vague-black
              bg-vague-bg
              shadow-[8px_8px_0_#121212]
              sm:min-h-[calc(100vh-48px)]
            "
          >
            {/* header */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b-[4px]
                border-vague-black
                p-5
                sm:p-7
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Search / Vague
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-black
                    uppercase
                    tracking-[-0.06em]
                    sm:text-5xl
                  "
                >
                  Find a Form.
                </h2>
              </div>

              <button
                onClick={onClose}
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
                  shadow-[4px_4px_0_#121212]
                  active:translate-x-[4px]
                  active:translate-y-[4px]
                  active:shadow-none
                "
              >
                <X size={23} strokeWidth={3} />
              </button>
            </div>

            {/* search */}

            <div
              className="
                border-b-[4px]
                border-vague-black
                p-5
                sm:p-7
              "
            >
              <div className="relative">
                <Search
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                  "
                  size={25}
                  strokeWidth={3}
                />

                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="SEARCH JEWELLERY, WATCHES, BAGS..."
                  className="
                    w-full
                    border-[4px]
                    border-vague-black
                    bg-white
                    py-5
                    pl-14
                    pr-5
                    text-base
                    font-bold
                    uppercase
                    tracking-[0.06em]
                    outline-none
                    shadow-[6px_6px_0_#121212]
                    focus:bg-vague-yellow
                    sm:text-lg
                  "
                />
              </div>
            </div>

            <div
              className="
                p-5
                sm:p-7
              "
            >
              <div
                className="
                  mb-6
                  flex
                  items-center
                  justify-between
                  gap-5
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
                  {results.length} Results
                </p>

                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="
                      text-xs
                      font-black
                      uppercase
                      underline
                    "
                  >
                    Clear Search
                  </button>
                )}
              </div>

              {results.length === 0 ? (
                <div
                  className="
                    flex
                    min-h-[350px]
                    items-center
                    justify-center
                    border-[4px]
                    border-vague-black
                    bg-vague-red
                    p-10
                    text-center
                    text-white
                    shadow-[8px_8px_0_#121212]
                  "
                >
                  <div>
                    <p
                      className="
                        text-[clamp(3rem,9vw,7rem)]
                        font-black
                        uppercase
                        leading-[0.8]
                        tracking-[-0.07em]
                      "
                    >
                      Nothing
                      <br />
                      Found.
                    </p>

                    <p
                      className="
                        mt-6
                        font-bold
                        uppercase
                      "
                    >
                      Try another form.
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-4
                  "
                >
                  {results.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      className="
                          group
                          border-[3px]
                          border-vague-black
                          bg-white
                          shadow-[6px_6px_0_#121212]
                        "
                    >
                      <div
                        className="
                            aspect-[4/5]
                            overflow-hidden
                            border-b-[3px]
                            border-vague-black
                          "
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="
                              h-full
                              w-full
                              object-cover
                              grayscale
                              transition
                              duration-300
                              group-hover:scale-105
                              group-hover:grayscale-0
                            "
                        />
                      </div>

                      <div className="p-4">
                        <p
                          className="
                              text-[10px]
                              font-black
                              uppercase
                              tracking-[0.18em]
                              text-vague-red
                            "
                        >
                          {product.category}
                        </p>

                        <h3
                          className="
                              mt-2
                              text-lg
                              font-black
                              uppercase
                              tracking-[-0.04em]
                            "
                        >
                          {product.name}
                        </h3>

                        <div
                          className="
                              mt-4
                              flex
                              items-center
                              justify-between
                              gap-3
                            "
                        >
                          <p
                            className="
                                text-lg
                                font-black
                              "
                          >
                            ₹{product.price.toLocaleString("en-IN")}
                          </p>

                          <button
                            onClick={() => addToCart(product)}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                border-[3px]
                                border-vague-black
                                bg-vague-yellow
                                shadow-[3px_3px_0_#121212]
                                active:translate-x-[3px]
                                active:translate-y-[3px]
                                active:shadow-none
                              "
                          >
                            <ShoppingBag size={18} strokeWidth={3} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <button
                onClick={onClose}
                className="
                  bauhaus-button
                  mx-auto
                  mt-12
                  flex
                  items-center
                  gap-3
                  bg-vague-blue
                  px-8
                  py-5
                  text-white
                "
              >
                Continue Shopping
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchOverlay;
