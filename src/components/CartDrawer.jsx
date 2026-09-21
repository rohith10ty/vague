import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { useStore } from "../context/StoreContext";

function CartDrawer({ open, onClose }) {
  const {
    cart,
    cartSubtotal,

    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useStore();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close cart"
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
              max-w-[560px]
              flex-col
              border-l-[4px]
              border-vague-black
              bg-vague-bg
              shadow-[-8px_0_0_#121212]
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
                bg-vague-blue
                p-5
                text-white
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
                  Your Selection
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
                  Bag.
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
                  bg-vague-yellow
                  text-vague-black
                  shadow-[4px_4px_0_#121212]
                "
              >
                <X size={21} strokeWidth={3} />
              </button>
            </div>

            {cart.length === 0 ? (
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
                      border-[4px]
                      border-vague-black
                      bg-vague-yellow
                      shadow-[7px_7px_0_#121212]
                    "
                  >
                    <ShoppingBag size={40} strokeWidth={3} />
                  </div>

                  <h3
                    className="
                      mt-8
                      text-4xl
                      font-black
                      uppercase
                      leading-[0.84]
                      tracking-[-0.06em]
                    "
                  >
                    The bag
                    <br />
                    is empty.
                  </h3>

                  <button
                    onClick={onClose}
                    className="
                      bauhaus-button
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      bg-vague-red
                      px-7
                      py-4
                      text-white
                    "
                  >
                    Start Shopping
                    <ArrowRight size={19} strokeWidth={3} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* products */}

                <div
                  className="
                    flex-1
                    space-y-4
                    overflow-y-auto
                    p-5
                  "
                >
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="
                          grid
                          grid-cols-[110px_1fr]
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
                          src={item.image}
                          alt={item.name}
                          className="
                              h-full
                              min-h-[165px]
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
                          {item.category}
                        </p>

                        <div
                          className="
                              mt-1
                              flex
                              justify-between
                              gap-3
                            "
                        >
                          <h3
                            className="
                                font-black
                                uppercase
                              "
                          >
                            {item.name}
                          </h3>

                          <button onClick={() => removeFromCart(item.id)}>
                            <Trash2 size={17} strokeWidth={3} />
                          </button>
                        </div>

                        <p
                          className="
                              mt-2
                              text-lg
                              font-black
                            "
                        >
                          ₹
                          {(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>

                        <div
                          className="
                              mt-auto
                              flex
                              items-center
                              justify-between
                              pt-4
                            "
                        >
                          <div
                            className="
                                flex
                                border-[2px]
                                border-vague-black
                              "
                          >
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  border-r-[2px]
                                  border-vague-black
                                  bg-vague-bg
                                "
                            >
                              <Minus size={14} strokeWidth={3} />
                            </button>

                            <span
                              className="
                                  flex
                                  h-9
                                  min-w-10
                                  items-center
                                  justify-center
                                  font-black
                                "
                            >
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => addToCart(item)}
                              className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  border-l-[2px]
                                  border-vague-black
                                  bg-vague-yellow
                                "
                            >
                              <Plus size={14} strokeWidth={3} />
                            </button>
                          </div>

                          <span
                            className="
                                text-xs
                                font-black
                                uppercase
                                tracking-[0.12em]
                              "
                          >
                            Qty {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* total */}

                <div
                  className="
                    border-t-[4px]
                    border-vague-black
                    bg-vague-yellow
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-5
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.2em]
                        "
                      >
                        Subtotal
                      </p>

                      <p
                        className="
                          mt-1
                          text-3xl
                          font-black
                          tracking-[-0.05em]
                        "
                      >
                        ₹{cartSubtotal.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <button
                      onClick={clearCart}
                      className="
                        text-xs
                        font-black
                        uppercase
                        underline
                      "
                    >
                      Clear Bag
                    </button>
                  </div>

                  <button
                    className="
                      bauhaus-button
                      mt-5
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      bg-vague-red
                      px-6
                      py-5
                      text-white
                    "
                  >
                    Checkout
                    <ArrowRight size={20} strokeWidth={3} />
                  </button>

                  <p
                    className="
                      mt-4
                      text-center
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.17em]
                    "
                  >
                    UI demonstration only — no payment backend
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
