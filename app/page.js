
import Header from "@/Components/header/Header.js";
import HomeContainer from "./components/HomeContainer";
import Categories from "@/app/components/Categories";
import FeaturedItem from "./components/FeaturedItem";
import AboutUs from "./components/AboutUs";
import Journal from "./components/Journal";
import Services from "./components/Services";
import HomeSection from "./components/HomeSection.js";


export default function Home() {
  
  return (
    <main className="">
      <HomeSection>
        <Header />
          <HomeContainer>
            <FeaturedItem/>
            <Categories/>
            <AboutUs/>
            <Journal/>
            <Services/>
          </HomeContainer>
      </HomeSection>
     
    </main>
  );
}
