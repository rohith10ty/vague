import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import IntroScreen from "./components/IntroScreen";
import PageTransition from "./components/PageTransition";
import ProductModal from "./components/ProductModal";
import Home from "./pages/Home";
import { StoreProvider } from "./context/StoreContext";

function App() {
  const [entered, setEntered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const enterTimer = useRef(null);
  const finishTimer = useRef(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleEnter = () => {
    if (transitioning) return;

    setTransitioning(true);

    enterTimer.current = setTimeout(() => {
      setEntered(true);
      window.scrollTo(0, 0);
    }, 720);

    finishTimer.current = setTimeout(() => {
      setTransitioning(false);
    }, 1650);
  };

  useEffect(() => {
    return () => {
      clearTimeout(enterTimer.current);
      clearTimeout(finishTimer.current);
    };
  }, []);

  return (
    <StoreProvider>
      {!entered ? <IntroScreen onEnter={handleEnter} /> : <Home />}

      <ProductModal />

      {transitioning && <PageTransition />}
    </StoreProvider>
  );
}

export default App;
