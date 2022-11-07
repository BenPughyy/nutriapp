import TopBanner from './components/TopBanner/TopBanner';
import LoginButton from './components/LoginButton/LoginButton';
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
        opacity: 0.7,
      }}
    >
      <TopBanner />
      <LoginButton />
    </div>
  );
};

export default App;
