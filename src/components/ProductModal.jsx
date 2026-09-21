import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Heart,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";
import { useStore } from "../context/StoreContext";

function ProductModal() {
  const {
    activeProductModal,
    closeProductModal,
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!activeProductModal) return null;

  const product = activeProductModal;
  const liked = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 lg:p-6 overflow-y-auto"
        data-lenis-prevent
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProductModal}
          className="fixed inset-0 bg-vague-black/65 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            z-20
            my-auto
            w-full
            max-w-3xl
            overflow-hidden
            border-[4px]
            border-vague-black
            bg-white
            shadow-[10px_10px_0_#121212]
          "
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b-[3.5px] border-vague-black bg-white px-4 py-2.5 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border border-vague-black bg-vague-red" />
                <span className="h-3 w-3 border border-vague-black bg-vague-blue" />
                <span className="shape-triangle h-3.5 w-3.5 bg-vague-yellow" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Vague / Product Details
              </span>
            </div>

            <button
              onClick={closeProductModal}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                border-[2px]
                border-vague-black
                bg-vague-yellow
                shadow-[2px_2px_0_#121212]
                transition-transform
                hover:-translate-y-0.5
                active:translate-y-0.5
              "
              aria-label="Close modal"
            >
              <X size={18} strokeWidth={3} />
            </button>
          </div>

          {/* Body Content */}
          <div className="grid max-h-[85vh] overflow-y-auto sm:grid-cols-[1fr_1.1fr]" data-lenis-prevent>
            {/* Left: Product Image */}
            <div className="relative flex items-center justify-center border-b-[3.5px] border-vague-black bg-[#f7f6f0] p-4 sm:border-b-0 sm:border-r-[3.5px] sm:p-6">
              {product.badge && (
                <div className="absolute left-4 top-4 border-[2px] border-vague-black bg-vague-yellow px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] shadow-[2px_2px_0_#121212]">
                  {product.badge}
                </div>
              )}

              <button
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
                className={`
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border-[2.5px]
                  border-vague-black
                  shadow-[2px_2px_0_#121212]
                  transition-colors
                  ${
                    liked
                      ? "bg-vague-red text-white"
                      : "bg-white text-vague-black hover:bg-vague-yellow"
                  }
                `}
              >
                <Heart
                  size={17}
                  strokeWidth={2.5}
                  fill={liked ? "currentColor" : "none"}
                />
              </button>

              <div className="aspect-square w-full max-w-[280px] overflow-hidden border-[3px] border-vague-black bg-white shadow-[4px_4px_0_#121212]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col justify-between p-5 sm:p-6">
              <div>
                {/* Category */}
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-vague-red">
                  {product.category}
                </span>

                {/* Title */}
                <h2 className="mt-1.5 text-xl font-black uppercase tracking-[-0.04em] sm:text-2xl">
                  {product.name}
                </h2>

                {/* Pricing */}
                <div className="mt-2.5 flex items-center gap-3">
                  <span className="text-2xl font-black text-vague-black sm:text-3xl">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm font-bold text-gray-400 line-through sm:text-base">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  )}

                  {discountPercent && (
                    <span className="border-[1.5px] border-vague-black bg-vague-red px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs font-medium leading-relaxed text-vague-black/85 sm:text-sm">
                  Precision-crafted Bauhaus object engineered for uncompromising
                  aesthetic integrity and modern everyday utility. Built with
                  premium materials designed to outlast temporary trends.
                </p>

                {/* Quantity Controls */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Qty:
                  </span>
                  <div className="flex items-center border-[2px] border-vague-black bg-white shadow-[2px_2px_0_#121212]">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="flex h-7 w-7 items-center justify-center border-r-[2px] border-vague-black hover:bg-vague-yellow transition"
                    >
                      <Minus size={13} strokeWidth={3} />
                    </button>
                    <span className="w-9 text-center text-xs font-black">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="flex h-7 w-7 items-center justify-center border-l-[2px] border-vague-black hover:bg-vague-yellow transition"
                    >
                      <Plus size={13} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions & Guarantees */}
              <div className="mt-5 border-t-[2.5px] border-vague-black pt-3.5">
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="
                      bauhaus-button
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2.5
                      bg-vague-red
                      py-3
                      text-xs
                      font-black
                      uppercase
                      tracking-wider
                      text-white
                      sm:text-sm
                    "
                  >
                    {added ? (
                      <>
                        <Check size={18} strokeWidth={3} /> Added to Bag
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={18} strokeWidth={3} /> Add to Bag • ₹
                        {(product.price * quantity).toLocaleString("en-IN")}
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-vague-black/15 pt-2.5 text-[9px] font-bold uppercase tracking-wider text-gray-600 sm:text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <Truck size={13} className="text-vague-black shrink-0" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RotateCcw size={13} className="text-vague-black shrink-0" />
                    <span>14-Day Return</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-vague-black shrink-0" />
                    <span>100% Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProductModal;
