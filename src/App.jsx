import { useContext } from 'react';
import Addcolor from './Comonents/AddColor';
import Angle from './Comonents/Angle';
import GeneratedBackground from './Comonents/GenerateBackground';
import Header from './Comonents/Header';
import Navbar from './Comonents/Navbar';
import Radial from './Comonents/radial';
import BackgrnContext from './store/backgroundContext';
import ColorList from './Comonents/Colorlist';
import Footer from './Comonents/Footer';
import ColorControls from './Comonents/wrapper';

export function App() {
  const { isRadial } = useContext(BackgrnContext);

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <GeneratedBackground></GeneratedBackground>
      <ColorControls>
        <Addcolor></Addcolor>
        <ColorList></ColorList>
        <Radial />
        {!isRadial && <Angle />}
      </ColorControls>
      <Footer></Footer>
    </>
  );
}

export default App;
