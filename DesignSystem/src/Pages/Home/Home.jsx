import "./Home.css";
import "../../assets/styles/tokens.css";
import imgHome from "../../assets/img/ImgHome.png";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header"

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <img src={imgHome} alt="Champ de fleurs" className="home-image" />
        <div className="home-presentation">
          <h1>FLEURS LOCALES ET DE SAISON</h1>
          <Button
            size="large"
            variant="default"
            className="home-button"
            icon="➤"
          >
            Commander votre bouquet
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
