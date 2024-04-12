import LandingTipsModule from "./LandingTipsModule";
import IconsGrid from "./IconsGrid";
import LandingHero from "./LandingHero";
import LandingSwipe from "./LandingSwipe";

function Homepage() {
  return (
    <div>
      <LandingHero />
      <IconsGrid />
      <LandingSwipe />
      <LandingTipsModule />
    </div>
  );
}

export default Homepage;
