import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowUpRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";

import { useStore } from "../context/StoreContext";

import SearchOverlay from "./SearchOverlay";
import WishlistDrawer from "./WishlistDrawer";
import CartDrawer from "./CartDrawer";

const navigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Categories",
    href: "#categories",
  },
  {
    label: "Shop",
    href: "#shop",
  },
  {
    label: "New",
    href: "#new",
  },
  {
    label: "Offers",
    href: "#offers",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Brand() {
  return (
    <a
      href="#home"
      className="
        flex
        shrink-0
        items-center
        gap-3
      "
    >
      <div className="flex items-center gap-[6px]">
        <span
          className="
            h-4
            w-4
            rounded-full
            border-2
            border-vague-black
            bg-vague-red
          "
        />

        <span
          className="
            h-4
            w-4
            border-2
            border-vague-black
            bg-vague-blue
          "
        />

        <span
          className="
            shape-triangle
            h-[18px]
            w-[18px]
            bg-vague-yellow
          "
        />
      </div>

      <span
        className="
          text-xl
          font-black
          uppercase
          tracking-[-0.06em]
          sm:text-2xl
        "
      >
        Vague.
      </span>
    </a>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [wishlistOpen, setWishlistOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  const { cartCount, wishlist } = useStore();

  return (
    <>
      <motion.header
        initial={{
          y: -120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          right-0
          top-2.5
          z-50
          px-3
          sm:top-3.5
          sm:px-5
          lg:top-3.5
        "
      >
        <nav
          className="
            bauhaus-shadow
            mx-auto
            flex
            max-w-[1140px]
            xl:max-w-[1220px]
            items-center
            justify-between
            border-[3px]
            border-vague-black
            bg-white
            px-4
            py-2.5
            sm:px-5
            lg:px-6
          "
        >
          <Brand />

          {/* desktop nav */}

          <div
            className="
              hidden
              items-center
              xl:flex
            "
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                    group
                    relative
                    overflow-hidden
                    px-3
                    py-2
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-[0.04em]
                  "
              >
                <span
                  className="
                      absolute
                      inset-x-2
                      bottom-1
                      h-[5px]
                      origin-left
                      scale-x-0
                      bg-vague-yellow
                      transition-transform
                      duration-200
                      group-hover:scale-x-100
                    "
                />

                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          {/* actions desktop */}

          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border-2
                border-transparent
                transition
                hover:border-vague-black
                hover:bg-vague-yellow
              "
            >
              <Search size={19} strokeWidth={2.7} />
            </button>

            <button
              onClick={() => setWishlistOpen(true)}
              aria-label="Wishlist"
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                border-2
                border-transparent
                transition
                hover:border-vague-black
                hover:bg-vague-red
                hover:text-white
              "
            >
              <Heart size={19} strokeWidth={2.7} />

              {wishlist.length > 0 && (
                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-vague-black
                    bg-vague-yellow
                    px-1
                    text-[9px]
                    font-black
                    text-vague-black
                  "
                >
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              aria-label="Shopping bag"
              className="
                bauhaus-button
                relative
                flex
                h-10
                items-center
                justify-center
                gap-2
                bg-vague-black
                px-4
                text-white
              "
            >
              <ShoppingBag size={18} strokeWidth={2.7} />

              <span
                className="
                  hidden
                  text-xs
                  lg:inline
                "
              >
                Bag
              </span>

              <span
                className="
                  absolute
                  -right-2
                  -top-2
                  flex
                  h-5
                  min-w-5
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-vague-black
                  bg-vague-yellow
                  px-1
                  text-[10px]
                  font-black
                  text-vague-black
                "
              >
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="
                ml-1
                flex
                h-10
                w-10
                items-center
                justify-center
                border-2
                border-vague-black
                bg-vague-red
                text-white
                xl:hidden
              "
            >
              <Menu size={22} strokeWidth={3} />
            </button>
          </div>

          {/* mobile actions */}

          <div
            className="
              flex
              items-center
              gap-2
              sm:hidden
            "
          >
            <button
              onClick={() => setSearchOpen(true)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
              "
            >
              <Search size={19} strokeWidth={3} />
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
              "
            >
              <ShoppingBag size={19} strokeWidth={2.7} />

              <span
                className="
                  absolute
                  right-0
                  top-0
                  flex
                  h-4
                  min-w-4
                  items-center
                  justify-center
                  rounded-full
                  bg-vague-yellow
                  text-[9px]
                  font-black
                "
              >
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                border-2
                border-vague-black
                bg-vague-red
                text-white
              "
            >
              <Menu size={20} strokeWidth={3} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileOpen && (
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
              z-[100]
              bg-vague-yellow
              p-4
              sm:p-6
              xl:hidden
            "
          >
            <motion.div
              initial={{
                y: -30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              className="
                flex
                h-full
                flex-col
                overflow-y-auto
                border-[4px]
                border-vague-black
                bg-vague-bg
                shadow-[8px_8px_0_#121212]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b-[4px]
                  border-vague-black
                  p-5
                "
              >
                <Brand />

                <button
                  onClick={() => setMobileOpen(false)}
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
                  <X strokeWidth={3} />
                </button>
              </div>

              <div className="flex flex-1 flex-col">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{
                      x: -40,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="
                        group
                        flex
                        min-h-[72px]
                        flex-1
                        items-center
                        justify-between
                        border-b-[3px]
                        border-vague-black
                        px-6
                        text-[clamp(1.5rem,7vw,3.2rem)]
                        font-black
                        uppercase
                        tracking-[-0.05em]
                      "
                  >
                    {item.label}

                    <ArrowUpRight size={27} strokeWidth={3} />
                  </motion.a>
                ))}
              </div>

              <div className="grid grid-cols-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);

                    setSearchOpen(true);
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    border-r-[3px]
                    border-vague-black
                    p-5
                  "
                >
                  <Search strokeWidth={3} />
                </button>

                <button
                  onClick={() => {
                    setMobileOpen(false);

                    setWishlistOpen(true);
                  }}
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    border-r-[3px]
                    border-vague-black
                    p-5
                  "
                >
                  <Heart strokeWidth={3} />

                  {wishlist.length > 0 && (
                    <span
                      className="
                        absolute
                        right-4
                        top-3
                        font-black
                      "
                    >
                      {wishlist.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => {
                    setMobileOpen(false);

                    setCartOpen(true);
                  }}
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    bg-vague-blue
                    p-5
                    text-white
                  "
                >
                  <ShoppingBag strokeWidth={3} />

                  <span
                    className="
                      absolute
                      right-4
                      top-3
                      font-black
                    "
                  >
                    {cartCount}
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* overlays */}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <WishlistDrawer
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Navbar;
