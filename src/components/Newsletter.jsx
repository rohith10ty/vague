import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 2500);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        border-b-[4px]
        border-vague-black
        bg-vague-blue
        px-4
        py-20
        text-white
        sm:px-6
        lg:px-8
        lg:py-28
      "
    >
      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          border-[4px]
          border-vague-black
          bg-vague-yellow
        "
      />

      <div
        className="
          absolute
          -bottom-20
          left-[10%]
          h-52
          w-52
          rotate-45
          border-[4px]
          border-vague-black
          bg-vague-red
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1100px]
          border-[4px]
          border-vague-black
          bg-white
          p-7
          text-vague-black
          shadow-[10px_10px_0_#121212]
          sm:p-10
          lg:p-14
        "
      >
        <p
          className="
            text-xs
            font-black
            uppercase
            tracking-[0.26em]
          "
        >
          Vague Dispatch
        </p>

        <h2
          className="
            mt-5
            text-[clamp(4rem,10vw,8rem)]
            font-black
            uppercase
            leading-[0.76]
            tracking-[-0.08em]
          "
        >
          Don't Miss
          <br />
          The Drop.
        </h2>

        <p
          className="
            mt-7
            max-w-xl
            text-lg
            font-medium
            leading-relaxed
          "
        >
          New objects, new collections and limited releases. Delivered without
          the unnecessary noise.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            mt-9
            flex
            flex-col
            gap-3
            sm:flex-row
          "
        >
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="
              min-h-[58px]
              flex-1
              border-[3px]
              border-vague-black
              bg-vague-bg
              px-5
              font-bold
              uppercase
              tracking-[0.08em]
              outline-none
              placeholder:text-gray-500
              focus:bg-vague-yellow
            "
          />

          <button
            type="submit"
            className="
              bauhaus-button
              flex
              min-h-[58px]
              items-center
              justify-center
              gap-3
              bg-vague-red
              px-7
              text-white
            "
          >
            {subscribed ? (
              <>
                Subscribed
                <Check size={20} strokeWidth={3} />
              </>
            ) : (
              <>
                Join Vague
                <ArrowRight size={20} strokeWidth={3} />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Newsletter;
