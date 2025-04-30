import { useState } from "react";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <div className="bg-[#030014] text-white">
            {showWelcome ? (
                <Welcome onLoadingComplete={() => setShowWelcome(false)} />
            ) : (
                <>
                    <Navbar />
                    <Background />
                    <Home />
                    <About />
                    <Showcase />
                    <Contact />
                </>
            )}
        </div>
    );
}

export default App;
