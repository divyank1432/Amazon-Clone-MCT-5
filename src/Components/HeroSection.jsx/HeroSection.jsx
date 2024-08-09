
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import BannerBottomPart from './BannerBottomPart/BannerBottomPart';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const HeroSection = () => {
    return (
        <div className="home bg-[#E5E7EB]">
            <Header/>
            <Banner />
            <BannerBottomPart/>
            <Cards/>
            <Footer/>
        </div>
    );
};

export default HeroSection;

