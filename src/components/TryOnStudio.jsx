import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Move, MousePointer2, RotateCcw, ArrowUpRight } from "lucide-react";
import { useStore } from "../context/StoreContext";

const products = [
  {
    id: 3,
    number: "01",
    title: "Watch",
    name: "Square Watch No. 01",
    fullName: "Square Watch No. 01",
    category: "Watches",
    price: 3499,
    priceFormatted: "₹3,499",
    oldPrice: 4599,
    badge: "Edition 01",
    rating: 4.9,
    subtitle: "Time has no label.",
    productImage: "/model/watch.webp",
    image: "/model/watch.webp",
    modelImage: "/model/model-watch.webp",
    accent: "#F0C020",
    hotspot: {
      dot: { top: "39%", left: "58%" },
      card: { top: "24%", left: "67%" },
    },
  },
  {
    id: 2,
    number: "02",
    title: "Handbag",
    name: "Structure Leather Bag",
    fullName: "Structure Leather Bag",
    category: "Handbags",
    price: 3899,
    priceFormatted: "₹3,899",
    oldPrice: 4899,
    badge: "Edition 01",
    rating: 4.9,
    subtitle: "Carry what defines you.",
    productImage: "/model/handbag.webp",
    image: "/model/handbag.webp",
    modelImage: "/model/model-handbag.webp",
    accent: "#1040C0",
    hotspot: {
      dot: { top: "64%", left: "31%" },
      card: { top: "45%", left: "10%" },
    },
  },
  {
    id: 6,
    number: "03",
    title: "Sunglasses",
    name: "Geometric Sunglasses",
    fullName: "Geometric Sunglasses",
    category: "Accessories",
    price: 2199,
    priceFormatted: "₹2,199",
    oldPrice: 2799,
    badge: "Edition 01",
    rating: 4.9,
    subtitle: "A clearer you.",
    productImage: "/model/sunglasses.webp",
    image: "/model/sunglasses.webp",
    modelImage: "/model/model-sunglasses.webp",
    accent: "#1040C0",
    hotspot: {
      dot: { top: "35%", left: "50%" },
      card: { top: "18%", left: "62%" },
    },
  },
  {
    id: 5,
    number: "04",
    title: "Shoes",
    name: "Ankle-Strap Heel Pump",
    fullName: "Ankle-Strap Heel Pump",
    category: "Footwear",
    price: 4499,
    priceFormatted: "₹4,499",
    oldPrice: 5899,
    badge: "Edition 01",
    rating: 4.9,
    subtitle: "Walk different.",
    productImage: "/model/shoes.webp",
    image: "/model/shoes.webp",
    modelImage: "/model/model-shoes.webp",
    accent: "#D02020",
    hotspot: {
      dot: { top: "85%", left: "47%" },
      card: { top: "66%", left: "58%" },
    },
  },
];

function ProductCard({
  product,
  active,
  modelRef,
  onSelect,
  onDragging,
  onDropHover,
}) {
  const isInsideModel = (x, y) => {
    if (!modelRef.current) return false;

    const rect = modelRef.current.getBoundingClientRect();

    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
  };

  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragMomentum={false}
      dragElastic={0.06}
      whileDrag={{
        scale: 1.04,
        rotate: -2,
        zIndex: 100,
        boxShadow: "6px 6px 0 #121212",
      }}
      whileHover={{
        y: -3,
      }}
      onClick={() => onSelect(product)}
      onDragStart={() => {
        onDragging(product);
      }}
      onDrag={(_, info) => {
        onDropHover(isInsideModel(info.point.x, info.point.y));
      }}
      onDragEnd={(_, info) => {
        const dropped = isInsideModel(info.point.x, info.point.y);

        if (dropped) {
          onSelect(product);
        }

        onDragging(null);
        onDropHover(false);
      }}
      className={`
        relative
        cursor-grab
        touch-none
        overflow-hidden
        border-[3px]
        border-vague-black
        bg-white
        shadow-[4px_4px_0_#121212]
        active:cursor-grabbing

        ${
          active
            ? "ring-[3px] ring-vague-yellow ring-offset-2 ring-offset-vague-bg"
            : ""
        }
      `}
    >
      {/* 1:1 SQUARE IMAGE BOX */}
      <div
        className="
          relative
          aspect-square
          w-full
          overflow-hidden
          border-b-[3px]
          border-vague-black
          bg-[#f5f3ec]
        "
      >
        <img
          src={product.productImage}
          alt={product.title}
          draggable="false"
          className="
            block
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            right-1.5
            top-1.5
            flex
            h-6
            w-6
            items-center
            justify-center
            border-[2px]
            border-vague-black
            bg-white
            shadow-[2px_2px_0_#121212]
          "
        >
          <Move size={11} strokeWidth={3} />
        </div>

        {active && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="
              absolute
              bottom-1.5
              right-1.5
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border-[2px]
              border-vague-black
              bg-vague-yellow
            "
          >
            <Check size={12} strokeWidth={4} />
          </motion.div>
        )}
      </div>

      {/* PRODUCT INFO */}
      <div
        className="
          flex
          min-h-[36px]
          items-center
          justify-between
          gap-2
          px-2.5
          py-1.5
        "
      >
        <div>
          <p
            className="
              text-[7px]
              font-black
              uppercase
              tracking-[0.16em]
              text-gray-500
            "
          >
            {product.number} / Vague
          </p>

          <h3
            className="
              text-xs
              font-black
              uppercase
              leading-none
              tracking-[-0.03em]
            "
          >
            {product.title}
          </h3>
        </div>

        <div
          className="
            h-4
            w-4
            shrink-0
            border-[2px]
            border-vague-black
          "
          style={{
            backgroundColor: product.accent,
          }}
        />
      </div>
    </motion.div>
  );
}

function TryOnStudio() {
  const modelRef = useRef(null);
  const { openProductModal } = useStore();
  const [activeProduct, setActiveProduct] = useState(null);
  const [draggingProduct, setDraggingProduct] = useState(null);
  const [dropActive, setDropActive] = useState(false);

  const currentModel = activeProduct?.modelImage || "/model/model-base.webp";

  const selectProduct = (product) => {
    if (activeProduct?.id === product.id) {
      setActiveProduct(null);
      return;
    }

    setActiveProduct(product);
  };

  const resetModel = () => {
    setActiveProduct(null);
  };

  const leftProducts = [products[0], products[1]];
  const rightProducts = [products[2], products[3]];

  return (
    <section
      id="try-on"
      className="
        scroll-mt-24
        relative
        overflow-hidden
        border-b-[4px]
        border-vague-black
        bg-vague-bg
        px-3
        py-8
        sm:px-5
        lg:px-6
        lg:py-10
      "
    >
      <div
        className="
          mx-auto
          max-w-[1020px]
          xl:max-w-[1080px]
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            gap-2.5
            border-b-[3px]
            border-vague-black
            pb-3
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.22em]
                text-vague-black/75
              "
            >
              Interactive / Vague
            </p>

            <h2
              className="
                mt-1
                text-[clamp(1.9rem,3.6vw,3.4rem)]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.06em]
              "
            >
              Build Your Form.
            </h2>
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              lg:justify-end
            "
          >
            <p
              className="
                max-w-[260px]
                text-[10px]
                font-semibold
                leading-relaxed
                text-vague-black/80
                sm:text-xs
                lg:text-right
              "
            >
              Drag an object onto the model or click it to try the look.
            </p>

            <div
              className="
                inline-flex
                items-center
                gap-1.5
                border-[2px]
                border-vague-black
                bg-vague-yellow
                px-2.5
                py-1.5
                shadow-[2px_2px_0_#121212]
              "
            >
              <MousePointer2 size={12} strokeWidth={3} />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.1em]
                "
              >
                Drag / Drop / Wear
              </span>
            </div>
          </div>
        </div>

        {/* STUDIO */}
        <div
          className="
            mt-5
            grid
            gap-3.5
            sm:gap-4
            lg:grid-cols-[130px_minmax(0,620px)_130px]
            lg:items-center
            lg:justify-center
            xl:grid-cols-[140px_minmax(0,660px)_140px]
          "
        >
          {/* LEFT PRODUCTS */}
          <div
            className="
              order-2
              grid
              grid-cols-2
              gap-3
              lg:order-1
              lg:grid-cols-1
              lg:content-center
            "
          >
            {leftProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                active={activeProduct?.id === product.id}
                modelRef={modelRef}
                onSelect={selectProduct}
                onDragging={setDraggingProduct}
                onDropHover={setDropActive}
              />
            ))}
          </div>

          {/* CENTER MODEL CARD */}
          <div
            ref={modelRef}
            className="
              order-1
              relative
              overflow-hidden
              border-[3.5px]
              border-vague-black
              bg-white
              shadow-[6px_6px_0_#121212]
              lg:order-2
            "
          >
            {/* MODEL HEADER */}
            <div
              className="
                relative
                z-30
                flex
                items-center
                justify-between
                border-b-[3px]
                border-vague-black
                bg-white
                px-3.5
                py-2
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-wider
                  "
                >
                  Vague.
                </p>

                <p
                  className="
                    hidden
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-gray-400
                    sm:block
                  "
                >
                  Interactive Studio
                </p>
              </div>

              <button
                onClick={resetModel}
                disabled={!activeProduct}
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.1em]
                  disabled:opacity-30
                "
              >
                <RotateCcw size={12} strokeWidth={3} />
                Reset
              </button>
            </div>

            {/* MODEL IMAGE CONTAINER */}
            <div
              className="
                relative
                w-full
                aspect-[3/2]
                overflow-hidden
                bg-[#ebe7df]
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProduct?.id || "base"}
                  src={currentModel}
                  alt={
                    activeProduct
                      ? `Model wearing ${activeProduct.title}`
                      : "Vague model"
                  }
                  initial={{
                    opacity: 0,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(3px)",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />
              </AnimatePresence>

              {/* PRODUCT HOTSPOT & PRICE TAG ON MODEL */}
              <AnimatePresence>
                {activeProduct && activeProduct.hotspot && (
                  <motion.div
                    key={`hotspot-${activeProduct.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-auto absolute inset-0 z-30"
                  >
                    {/* Pulsing indicator dot on item location */}
                    <div
                      style={{
                        top: activeProduct.hotspot.dot.top,
                        left: activeProduct.hotspot.dot.left,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <span className="absolute -inset-2 block rounded-full border-2 border-vague-black bg-vague-yellow/60 animate-ping" />
                      <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-vague-black bg-vague-yellow shadow-[1.5px_1.5px_0_#121212]">
                        <span className="h-1 w-1 rounded-full bg-vague-black" />
                      </span>
                    </div>

                    {/* Floating Product Name & Price Badge */}
                    <motion.div
                      style={{
                        top: activeProduct.hotspot.card.top,
                        left: activeProduct.hotspot.card.left,
                      }}
                      initial={{ opacity: 0, y: 10, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.92 }}
                      transition={{ delay: 0.08, duration: 0.28 }}
                      className="
                        bauhaus-shadow
                        absolute
                        z-30
                        w-auto
                        min-w-[145px]
                        max-w-[195px]
                        border-[2.5px]
                        border-vague-black
                        bg-white
                        p-2
                        sm:min-w-[165px]
                        sm:p-2.5
                      "
                    >
                      <div className="flex items-center justify-between border-b border-vague-black/20 pb-1">
                        <span className="text-[7px] font-black uppercase tracking-[0.16em] text-vague-red sm:text-[8px]">
                          {activeProduct.number} / {activeProduct.title}
                        </span>
                        <span className="text-[9px] font-black text-vague-black sm:text-[10px]">
                          {activeProduct.priceFormatted}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-[-0.02em] text-vague-black sm:text-xs">
                        {activeProduct.fullName}
                      </p>

                      <button
                        onClick={() => openProductModal(activeProduct)}
                        className="
                          mt-1.5
                          inline-flex
                          w-full
                          items-center
                          justify-between
                          border-[1.5px]
                          border-vague-black
                          bg-vague-yellow
                          px-2
                          py-1
                          text-[8px]
                          font-black
                          uppercase
                          tracking-wider
                          text-vague-black
                          transition-transform
                          hover:-translate-y-0.5
                          active:translate-y-0.5
                          sm:text-[9px]
                        "
                      >
                        <span>View Piece</span>
                        <ArrowUpRight size={11} strokeWidth={3} />
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* DROP UI */}
              <AnimatePresence>
                {draggingProduct && (
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
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      flex
                      items-center
                      justify-center
                      border-[4px]

                      ${
                        dropActive
                          ? "border-vague-yellow bg-vague-yellow/10"
                          : "border-white/60 bg-vague-black/10"
                      }
                    `}
                  >
                    <div
                      className="
                        border-[3px]
                        border-vague-black
                        bg-white
                        px-4
                        py-2.5
                        text-center
                        shadow-[4px_4px_0_#121212]
                      "
                    >
                      <p
                        className="
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.18em]
                          text-vague-red
                        "
                      >
                        {draggingProduct.title}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-base
                          font-black
                          uppercase
                        "
                      >
                        {dropActive ? "Release" : "Drop Here"}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MODEL FOOTER */}
            <div
              className="
                grid
                border-t-[3px]
                border-vague-black
                bg-white
                sm:grid-cols-2
              "
            >
              <div
                className="
                  border-b-[3px]
                  border-vague-black
                  px-3.5
                  py-2
                  sm:border-b-0
                  sm:border-r-[3px]
                "
              >
                <p
                  className="
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-gray-400
                  "
                >
                  Wearing
                </p>

                <p
                  className="
                    mt-0.5
                    text-xs
                    font-black
                    uppercase
                  "
                >
                  {activeProduct ? activeProduct.fullName : "Original Look"}
                </p>
              </div>

              <div
                className="
                  px-3.5
                  py-2
                "
              >
                <p
                  className="
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-gray-400
                  "
                >
                  Expression
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-bold
                    uppercase
                  "
                >
                  {activeProduct ? activeProduct.subtitle : "Choose an object."}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCTS */}
          <div
            className="
              order-3
              grid
              grid-cols-2
              gap-3
              lg:grid-cols-1
              lg:content-center
            "
          >
            {rightProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                active={activeProduct?.id === product.id}
                modelRef={modelRef}
                onSelect={selectProduct}
                onDragging={setDraggingProduct}
                onDropHover={setDropActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TryOnStudio;
