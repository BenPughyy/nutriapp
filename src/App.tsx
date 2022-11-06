import TopBanner from './components/TopBanner';
import BackgroundImg from './img/Background.jpg';

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <TopBanner />
    </div>
  );
};

export default App;
