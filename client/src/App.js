import Canvas from './components/Canvas';
import './App.css'
import Chat from './components/Chat';

const draw = context => {

  // Insert your canvas API code to draw an image
};
function App({ handlePlayerPositionChange }) {
  return (
    <>
      <Canvas draw={draw} height={576} width={1024} onPlayerPositionChange={handlePlayerPositionChange} />
      <Chat />
    </>
  );
}

export default App;
