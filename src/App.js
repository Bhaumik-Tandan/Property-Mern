import Head from "./header/main";
import Main from "./main/main";
import TabHook from "./UpperTabHook/tabHook";
function App() {
  return (
    <div className="App">
      <TabHook>
        <Head/>
        <Main/>
      </TabHook>
    </div>
  );
}

export default App;
