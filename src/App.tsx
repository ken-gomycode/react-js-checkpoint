import TopNavbar from "./components/TopNavbar.tsx";
import Cards from "./components/Cards.tsx";
import Heading from "./components/Heading.tsx";

const App = () => {
  return (
    <>
      <div className="App">
        <TopNavbar />
        <Heading />
        <Cards />
      </div>
    </>
  )
}

export default App;