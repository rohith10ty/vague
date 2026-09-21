import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { products } from "../data/storeData";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

const categoryFilters = [
  "All",
  "Jewellery",
  "Handbags",
  "Watches",
  "Cosmetics",
  "Footwear",
  "Accessories",
];

function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) =>
            p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // When filtering by specific category, show all in that category
    if (category !== "All") {
      setShowAll(true);
    }
  };

  return (
    <section
      id="shop"
      className="
        border-b-[4px]
        border-vague-black
        bg-vague-yellow
        px-3
        py-12
        sm:px-5
        sm:py-16
        lg:px-6
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1140px] xl:max-w-[1220px]">
        <SectionHeading eyebrow="The edit" title="Featured" number="02" />

        {/* CATEGORY FILTER TABS */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
          {categoryFilters.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`
                  bauhaus-button
                  border-[2.5px]
                  border-vague-black
                  px-3.5
                  py-1.5
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-wider
                  transition-all
                  sm:px-4
                  sm:py-2
                  sm:text-xs
                  ${
                    isActive
                      ? "bg-vague-black text-white shadow-[3px_3px_0_#D02020]"
                      : "bg-white text-vague-black hover:bg-vague-bg"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* PRODUCT COUNT BADGE */}
        <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-vague-black/80">
          <span>
            Showing {displayedProducts.length} of {filteredProducts.length}{" "}
            items
          </span>
          {selectedCategory !== "All" && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setShowAll(false);
              }}
              className="font-extrabold underline hover:text-vague-red"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* PRODUCTS GRID */}
        <motion.div
          layout
          className="
            mt-6
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* VIEW ALL / SHOW LESS TOGGLE BUTTON */}
        {filteredProducts.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                setShowAll(!showAll);
              }}
              className="
                bauhaus-button
                flex
                items-center
                gap-3
                bg-vague-blue
                px-7
                py-3.5
                text-xs
                font-extrabold
                uppercase
                tracking-wider
                text-white
                shadow-[4px_4px_0_#121212]
                sm:px-8
                sm:py-4
                sm:text-sm
              "
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={18} strokeWidth={3} />
                </>
              ) : (
                <>
                  View All Products ({filteredProducts.length}){" "}
                  <ArrowRight size={18} strokeWidth={3} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;
