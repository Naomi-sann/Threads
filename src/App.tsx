import { useEffect, lazy } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import DesktopTemplate from "@/templates/DesktopTemplate";
import MobileTemplate from "@/templates/MobileTemplate";
import { useAppSelector } from "@/hooks/useReduxHooks";
import ImagePreview from "./components/ImagePreview";

const Popup = lazy(() => import("./containers/Popup"));

function App() {
  const dimensions = useWindowDimensions();
  const isImageShowing = useAppSelector(
    (state) => state.imagePreview.isShowing
  );

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
      {isImageShowing && <ImagePreview />}
      <Popup />
    </div>
  );
}

export default App;
