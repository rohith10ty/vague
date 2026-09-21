import { ArrowRight, Heart, ShoppingBag, Trash2, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { useStore } from "../context/StoreContext";

function WishlistDrawer({ open, onClose }) {
  const { wishlist, addToCart, removeFromWishlist } = useStore();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close wishlist"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[250]
              cursor-default
              bg-vague-black/60
            "
          />

          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.35,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              bottom-0
              right-0
              top-0
              z-[260]
              flex
              w-full
              max-w-[520px]
              flex-col
              border-l-[4px]
              border-vague-black
              bg-vague-yellow
              shadow-[-8px_0_0_#121212]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b-[4px]
                border-vague-black
                bg-white
                p-5
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                  "
                >
                  Saved / Vague
                </p>

                <h2
                  className="
                    mt-1
                    text-3xl
                    font-black
                    uppercase
                    tracking-[-0.06em]
                  "
                >
                  Wishlist
                </h2>
              </div>

              <button
                onClick={onClose}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border-[3px]
                  border-vague-black
                  bg-vague-red
                  text-white
                  shadow-[4px_4px_0_#121212]
                "
              >
                <X size={21} strokeWidth={3} />
              </button>
            </div>

            {wishlist.length === 0 ? (
              <div
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  p-8
                  text-center
                "
              >
                <div>
                  <div
                    className="
                      mx-auto
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      border-[4px]
                      border-vague-black
                      bg-vague-red
                      text-white
                      shadow-[6px_6px_0_#121212]
                    "
                  >
                    <Heart size={40} strokeWidth={3} />
                  </div>

                  <h3
                    className="
                      mt-8
                      text-4xl
                      font-black
                      uppercase
                      leading-[0.85]
                      tracking-[-0.06em]
                    "
                  >
                    Nothing
                    <br />
                    saved yet.
                  </h3>

                  <button
                    onClick={onClose}
                    className="
                      bauhaus-button
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      bg-vague-blue
                      px-7
                      py-4
                      text-white
                    "
                  >
                    Explore Vague
                    <ArrowRight size={19} strokeWidth={3} />
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="
                  flex-1
                  space-y-4
                  overflow-y-auto
                  p-5
                "
              >
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="
                        grid
                        grid-cols-[105px_1fr]
                        border-[3px]
                        border-vague-black
                        bg-white
                        shadow-[5px_5px_0_#121212]
                      "
                  >
                    <div
                      className="
                          overflow-hidden
                          border-r-[3px]
                          border-vague-black
                        "
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                            h-full
                            min-h-[140px]
                            w-full
                            object-cover
                            grayscale
                          "
                      />
                    </div>

                    <div className="flex flex-col p-4">
                      <p
                        className="
                            text-[9px]
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
                            mt-1
                            font-black
                            uppercase
                          "
                      >
                        {product.name}
                      </h3>

                      <p
                        className="
                            mt-2
                            text-lg
                            font-black
                          "
                      >
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <div
                        className="
                            mt-auto
                            flex
                            gap-2
                            pt-4
                          "
                      >
                        <button
                          onClick={() => addToCart(product)}
                          className="
                              flex
                              flex-1
                              items-center
                              justify-center
                              gap-2
                              border-[2px]
                              border-vague-black
                              bg-vague-yellow
                              px-3
                              py-2
                              text-xs
                              font-black
                              uppercase
                            "
                        >
                          <ShoppingBag size={15} strokeWidth={3} />
                          Add
                        </button>

                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              border-[2px]
                              border-vague-black
                              bg-vague-red
                              text-white
                            "
                        >
                          <Trash2 size={16} strokeWidth={3} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default WishlistDrawer;
