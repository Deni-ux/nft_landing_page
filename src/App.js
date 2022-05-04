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
    </>
  );
};

export default App;
