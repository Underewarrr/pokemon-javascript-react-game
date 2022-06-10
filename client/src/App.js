import Canvas from './components/Canvas';
import './App.css'

const draw = context => {

  // Insert your canvas API code to draw an image
};
function App() {
  return (
    <Canvas draw={draw} height={576} width={1024} />
  );
}
export default App;
