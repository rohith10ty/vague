import { ArrowUp } from "lucide-react";
import { FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        overflow-hidden
        bg-vague-black
        px-4
        py-12
        text-white
        sm:px-6
        lg:px-8
        lg:py-16
      "
    >
      <div className="mx-auto max-w-[1140px] xl:max-w-[1220px]">
        <div
          className="
            grid
            gap-12
            border-b
            border-white/30
            pb-12
            lg:grid-cols-[1.4fr_0.6fr_0.6fr_0.6fr]
          "
        >
          {/* BRAND */}

          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  h-7
                  w-7
                  rounded-full
                  border-2
                  border-white
                  bg-vague-red
                "
              />

              <span
                className="
                  h-7
                  w-7
                  border-2
                  border-white
                  bg-vague-blue
                "
              />

              <span
                className="
                  shape-triangle
                  h-8
                  w-8
                  bg-vague-yellow
                "
              />
            </div>

            <h2
              className="
                mt-8
                text-[clamp(5rem,12vw,11rem)]
                font-black
                uppercase
                leading-[0.7]
                tracking-[-0.09em]
              "
            >
              Vague.
            </h2>

            <p
              className="
                mt-8
                max-w-md
                text-sm
                font-medium
                uppercase
                leading-relaxed
                tracking-[0.08em]
                text-white/60
              "
            >
              Fashion / Objects / Lifestyle
              <br />
              Defined by nothing.
            </p>
          </div>

          {/* SHOP */}

          <div>
            <h3
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.25em]
                text-vague-yellow
              "
            >
              Shop
            </h3>

            <div className="mt-6 space-y-3 font-bold">
              <a
                className="block transition hover:text-vague-yellow"
                href="#shop"
              >
                Featured
              </a>

              <a
                className="block transition hover:text-vague-yellow"
                href="#new"
              >
                New Arrivals
              </a>

              <a
                className="block transition hover:text-vague-yellow"
                href="#categories"
              >
                Categories
              </a>

              <a
                className="block transition hover:text-vague-yellow"
                href="#offers"
              >
                Offers
              </a>
            </div>
          </div>

          {/* COMPANY */}

          <div>
            <h3
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.25em]
                text-vague-red
              "
            >
              Company
            </h3>

            <div className="mt-6 space-y-3 font-bold">
              <a
                className="block transition hover:text-vague-yellow"
                href="#about"
              >
                About
              </a>

              <a
                className="block transition hover:text-vague-yellow"
                href="#contact"
              >
                Contact
              </a>

              <a
                className="block transition hover:text-vague-yellow"
                href="#home"
              >
                Shipping
              </a>

              <a
                className="block transition hover:text-vague-yellow"
                href="#home"
              >
                Returns
              </a>
            </div>
          </div>

          {/* SOCIAL */}

          <div>
            <h3
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.25em]
                text-vague-blue
              "
            >
              Social
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                aria-label="Instagram"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border-[2px]
                  border-white
                  bg-vague-red
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#contact"
                aria-label="YouTube"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border-[2px]
                  border-white
                  bg-vague-blue
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                <FaYoutube size={21} />
              </a>

              <a
                href="#contact"
                aria-label="Pinterest"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border-[2px]
                  border-white
                  bg-vague-yellow
                  text-vague-black
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                <FaPinterestP size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-6
            pt-8
            text-xs
            font-bold
            uppercase
            tracking-[0.14em]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© 2026 VAGUE. All rights reserved.</p>

          <button
            onClick={scrollTop}
            className="
              flex
              w-fit
              items-center
              gap-3
              border-[2px]
              border-white
              bg-vague-yellow
              px-4
              py-3
              text-vague-black
              shadow-[4px_4px_0_#D02020]
              transition
              active:translate-x-[4px]
              active:translate-y-[4px]
              active:shadow-none
            "
          >
            Back to top
            <ArrowUp size={17} strokeWidth={3} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
