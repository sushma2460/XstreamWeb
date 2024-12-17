
import Carousel from './Carousel/Carousel';
import { Achievements } from './Achivements/Achivements';
import { TechnologyPartner } from './Tech/Technology';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Footer } from './Footer/Footer';
import { Solutions } from './Solutions/Solutions';
import { Strategy } from './Strategy/Strategy';
import { Cards } from './Cards/Cards';
import CareersSection from './Career/Career';
import { LearnExperts } from './Learn/Learn';
import { Navbar } from './Navbar/Navbar';




function HomeApp() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Carousel></Carousel>
    <Achievements></Achievements>
    <TechnologyPartner></TechnologyPartner>
    <Solutions></Solutions>
    <Strategy></Strategy>
    <Cards></Cards>
    <CareersSection></CareersSection>
    <LearnExperts></LearnExperts>
    <Footer></Footer>
    </div>
  );
};
export default HomeApp;

