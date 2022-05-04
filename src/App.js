import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Best User Interface Marketplace"
        description="A reliable, easy and inviting UI of ProNef NFT Marketplace "
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo, which runs natively on all users' devices. Easier than ever to get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Inovative store showcase "
        description="The app contains two main screens. One that presents you a list of the NFTs and a second screen for detailed info in real time for each NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />
    </>
  );
};

export default App;
