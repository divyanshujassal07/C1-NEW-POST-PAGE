import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import PhotoGallery from "./components/photogallery";
import Subscribe from "./components/subscribe";
import FeaturedArticle from "./components/featuredarticle";
import FeatureTutorial from "./components/featuretutorial";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <PhotoGallery />
      <FeaturedArticle />
      <FeatureTutorial />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;