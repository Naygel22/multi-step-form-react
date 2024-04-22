import { SideBar } from "./components/SideBar"
import { PersonalInfo } from "./pages/PersonalInfo"
import { SelectPlan } from "./pages/SelectPlan"


function App() {

  return (
    <>
      <div className="app">
        <SideBar />
        {/* <PersonalInfo /> */}
        <SelectPlan />
      </div>

    </>
  )
}

export default App
