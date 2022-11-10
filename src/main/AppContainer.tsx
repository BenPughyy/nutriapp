import { FC } from 'react';
import { useSelector } from 'react-redux';

// Store
import { RootState } from '../store/rootReducer';

// Components
import TopBanner from '../components/TopBanner/TopBanner';
import LoginButton from '../components/LoginButton/LoginButton';

// Images
import BackgroundImg from '../img/Background.jpg';
import Modal from '../components/Modal/Modal';

const AppContainer: FC = () => {
  const modalState = useSelector((state: RootState) => state.modal);

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Modal
        visible={modalState.visible}
        modal={modalState.modal}
        additionalProps={modalState.additionalProps}
        style={modalState.style}
        fullScreen={modalState.fullScreen}
        forceOpen={modalState.forceOpen}
      />
      <TopBanner />
      <LoginButton />
    </div>
  );
};

export default AppContainer;
