import { products } from "../data/storeData";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

function NewArrivals() {
  return (
    <section
      id="new"
      className="
        border-b-[4px]
        border-vague-black
        bg-vague-bg
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1140px] xl:max-w-[1220px]">
        <SectionHeading
          eyebrow="Recently arrived"
          title="New Forms"
          number="03"
        />

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
