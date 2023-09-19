import { useEffect, lazy } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import DesktopTemplate from "@/templates/DesktopTemplate";
import MobileTemplate from "@/templates/MobileTemplate";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import ImagePreview from "./components/ImagePreview";
import { setDevice } from "@/features/deviceSlice";

const Popup = lazy(() => import("./containers/Popup"));

function App() {
  const dimensions = useWindowDimensions();
  const isImageShowing = useAppSelector(
    (state) => state.imagePreview.isShowing
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    // remove loading
    const loading = document.getElementById("loading") as HTMLDivElement;

    dispatch(setDevice(dimensions.x > 1000 ? "desktop" : "mobile"));

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
