import './Home.css';
import '../../assets/styles/tokens.css';
import imgHome from '../../assets/img/ImgHome.png';

const Home = () => {
  return (
    <div className="home-container">
      <img src={imgHome} alt="Champ de fleurs" className="home-image" />
      <div className="home-presentation">
        <h1>FLEURS LOCALES ET DE SAISON</h1>
        <button className="home-button">Commander votre bouquet</button>
      </div>
    </div>
  );
};

export default Home;