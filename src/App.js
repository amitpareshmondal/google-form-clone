import Box from "./Components/Box/Box";
import MCQ from "./Components/MCQ/MCQ"
import ChekcBox from "./Components/CheckBox/CheckBox";
import ShortAnswer from "./Components/ShortAnswer/ShortAnswer";
import ParaGraph from "./Components/ParaGraph/Paragraph";
import DropDown from "./Components/DropDown/DropDown";
import FileUpload from "./Components/FileUpload/FileUpload";
import LinearScale from "./Components/LinearScale/LinearScale";
import Muti from "./Components/MultiChoiceGrid/Multi";
import TickBox from "./Components/TickBox/TickBox";
function App() {
  return (
    <div className="App">
    <Box/>
    <MCQ/>
    <ChekcBox/>
    <ShortAnswer/>
    <ParaGraph/>
    <DropDown/>
    <FileUpload/>
    <LinearScale/>
    <Muti/>
    <TickBox/>
    </div>
  );
}

export default App;
