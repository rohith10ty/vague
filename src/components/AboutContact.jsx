import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { FaInstagram } from "react-icons/fa";

function AboutContact() {
  return (
    <section
      id="about"
      className="
        border-b-[4px]
        border-vague-black
        bg-vague-yellow
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* ABOUT */}

        <div
          className="
            border-b-[4px]
            border-vague-black
            p-7
            sm:p-10
            lg:border-b-0
            lg:border-r-[4px]
            lg:p-16
          "
        >
          <p
            className="
              text-xs
              font-black
              uppercase
              tracking-[0.25em]
            "
          >
            07 / About Vague
          </p>

          <h2
            className="
              mt-5
              text-[clamp(2.5rem,5vw,5rem)]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
            "
          >
            Made to
            <br />
            Resist
            <br />
            Labels.
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              font-medium
              leading-relaxed
            "
          >
            VAGUE is a fashion and lifestyle concept built around objects that
            do not need a fixed definition. We combine functional design with
            bold visual expression.
          </p>

          {/* Decorative shapes */}

          <div className="mt-12 flex items-center gap-4">
            <div
              className="
                h-16
                w-16
                rounded-full
                border-[3px]
                border-vague-black
                bg-vague-red
              "
            />

            <div
              className="
                h-16
                w-16
                rotate-12
                border-[3px]
                border-vague-black
                bg-vague-blue
              "
            />

            <div
              className="
                shape-triangle
                h-16
                w-16
                bg-vague-black
              "
            />
          </div>
        </div>

        {/* CONTACT */}

        <div
          id="contact"
          className="
            bg-vague-red
            p-7
            text-white
            sm:p-10
            lg:p-16
          "
        >
          <p
            className="
              text-xs
              font-black
              uppercase
              tracking-[0.25em]
            "
          >
            Contact / Vague
          </p>

          <h3
            className="
              mt-7
              text-5xl
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              sm:text-6xl
            "
          >
            Talk to
            <br />
            the studio.
          </h3>

          <div className="mt-10 space-y-4">
            {/* EMAIL */}

            <a
              href="mailto:hello@vague.store"
              className="
                group
                flex
                items-center
                justify-between
                gap-5
                border-[3px]
                border-vague-black
                bg-white
                p-4
                text-vague-black
                shadow-[5px_5px_0_#121212]
                transition-transform
                duration-200
                hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border-[2px]
                    border-vague-black
                    bg-vague-yellow
                  "
                >
                  <Mail size={20} strokeWidth={3} />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Email
                  </p>

                  <p className="mt-1 font-bold">hello@vague.store</p>
                </div>
              </div>

              <ArrowUpRight
                size={21}
                strokeWidth={3}
                className="
                  transition-transform
                  duration-200
                  group-hover:rotate-45
                "
              />
            </a>

            {/* PHONE */}

            <a
              href="tel:+919000000000"
              className="
                group
                flex
                items-center
                justify-between
                gap-5
                border-[3px]
                border-vague-black
                bg-white
                p-4
                text-vague-black
                shadow-[5px_5px_0_#121212]
                transition-transform
                duration-200
                hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border-[2px]
                    border-vague-black
                    bg-vague-blue
                    text-white
                  "
                >
                  <Phone size={20} strokeWidth={3} />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Phone
                  </p>

                  <p className="mt-1 font-bold">+91 90000 00000</p>
                </div>
              </div>

              <ArrowUpRight
                size={21}
                strokeWidth={3}
                className="
                  transition-transform
                  duration-200
                  group-hover:rotate-45
                "
              />
            </a>

            {/* LOCATION */}

            <div
              className="
                group
                flex
                items-center
                justify-between
                gap-5
                border-[3px]
                border-vague-black
                bg-white
                p-4
                text-vague-black
                shadow-[5px_5px_0_#121212]
                transition-transform
                duration-200
                hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border-[2px]
                    border-vague-black
                    bg-vague-red
                    text-white
                  "
                >
                  <MapPin size={20} strokeWidth={3} />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Studio
                  </p>

                  <p className="mt-1 font-bold">India / Worldwide</p>
                </div>
              </div>

              <ArrowUpRight size={21} strokeWidth={3} />
            </div>

            {/* INSTAGRAM */}

            <a
              href="#contact"
              className="
                group
                flex
                items-center
                justify-between
                gap-5
                border-[3px]
                border-vague-black
                bg-white
                p-4
                text-vague-black
                shadow-[5px_5px_0_#121212]
                transition-transform
                duration-200
                hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border-[2px]
                    border-vague-black
                    bg-vague-yellow
                  "
                >
                  <FaInstagram size={21} />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Instagram
                  </p>

                  <p className="mt-1 font-bold">@vague.store</p>
                </div>
              </div>

              <ArrowUpRight
                size={21}
                strokeWidth={3}
                className="
                  transition-transform
                  duration-200
                  group-hover:rotate-45
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContact;
