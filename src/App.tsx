import "leaflet/dist/leaflet.css";
import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const Products = lazy(() => import("./pages/Products"));

function App() {
    return (
        <Layout>
            {/*<ScrollManager />*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="/products"
                    element={
                        <Suspense fallback={<div className="min-h-screen bg-obsidian"/>}>
                            <Products/>
                        </Suspense>
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
