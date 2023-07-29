import { useEffect } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import DesktopTemplate from "@/templates/DesktopTemplate";
import MobileTemplate from "@/templates/MobileTemplate";

function App() {
  const dimensions = useWindowDimensions();

  useEffect(() => {
    // remove loading
    const loading = document.getElementById("loading") as HTMLDivElement;

    setTimeout(() => {
      loading.classList.add("animate-fade-out");

      loading.addEventListener("animationend", () => {
        loading.remove();
      });
    }, 500);
  }, []);

  return (
    <div className="w-full h-[100dvh]">
      {dimensions.x > 1000 ? <DesktopTemplate /> : <MobileTemplate />}
    </div>
  );
}

export default App;
