import "./App.css";
import useWindowDimensions from "./hooks/useWindowDimensions";
import DesktopTemplate from "@/templates/DesktopTemplate";
import MobileTemplate from "@/templates/MobileTemplate";

function App() {
  const dimensions = useWindowDimensions();

  return (
    <div className="App">
      {dimensions.x > 1000 ? <DesktopTemplate /> : <MobileTemplate />}
    </div>
  );
}

export default App;
