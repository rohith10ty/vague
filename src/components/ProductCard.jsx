import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, ArrowUpRight, Check } from "lucide-react";
import { useStore } from "../context/StoreContext";

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted, openProductModal } = useStore();

  const [added, setAdded] = useState(false);

  const liked = isWishlisted(product.id);

  const handleCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  const handleOpenModal = () => {
    openProductModal(product);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -7,
      }}
      transition={{
        duration: 0.3,
      }}
      onClick={handleOpenModal}
      className="
        group
        relative
        flex
        h-full
        cursor-pointer
        flex-col
        border-[3px]
        border-vague-black
        bg-white
        shadow-[7px_7px_0_#121212]
      "
    >
      <div className="relative overflow-hidden border-b-[3px] border-vague-black">
        {product.badge && (
          <div
            className="
              absolute
              left-3
              top-3
              z-10
              border-2
              border-vague-black
              bg-vague-yellow
              px-3
              py-1
              text-[10px]
              font-black
              uppercase
              tracking-[0.12em]
            "
          >
            {product.badge}
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label="Wishlist"
          className={`
            absolute
            right-3
            top-3
            z-10
            flex
            h-11
            w-11
            items-center
            justify-center
            border-[3px]
            border-vague-black
            shadow-[3px_3px_0_#121212]
            transition
            ${liked ? "bg-vague-red text-white" : "bg-white text-vague-black"}
          `}
        >
          <Heart
            size={20}
            strokeWidth={3}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        <div className="aspect-[4/5] overflow-hidden bg-vague-muted">
          <img
            src={product.image}
            alt={product.name}
            className="
              vague-product-image
              h-full
              w-full
              object-cover
            "
          />
        </div>

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            translate-y-full
            transition-transform
            duration-300
            group-hover:translate-y-0
          "
        >
          <button
            onClick={handleCart}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              border-t-[3px]
              border-vague-black
              bg-vague-red
              px-5
              py-4
              text-sm
              font-black
              uppercase
              tracking-[0.08em]
              text-white
            "
          >
            {added ? (
              <>
                <Check size={19} strokeWidth={3} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag size={19} strokeWidth={3} />
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-vague-red
              "
            >
              {product.category}
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-black
                uppercase
                tracking-[-0.04em]
                group-hover:text-vague-red
                transition-colors
              "
            >
              {product.name}
            </h3>
          </div>

          <button
            onClick={handleOpenModal}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              border-[2px]
              border-vague-black
              bg-vague-yellow
              transition-transform
              group-hover:rotate-12
            "
            aria-label="View product details"
          >
            <ArrowUpRight size={19} strokeWidth={3} />
          </button>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-1">
              <Star size={15} fill="#F0C020" strokeWidth={2.5} />

              <span className="text-sm font-bold">{product.rating}</span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg font-black">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && (
                <span className="text-sm font-bold text-gray-400 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleCart}
            aria-label="Add to bag"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              border-[3px]
              border-vague-black
              bg-vague-black
              text-white
              shadow-[3px_3px_0_#D02020]
              transition
              active:translate-x-[3px]
              active:translate-y-[3px]
              active:shadow-none
            "
          >
            <ShoppingBag size={18} strokeWidth={3} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
