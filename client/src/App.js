import './App.css'

function App() {
  const canvas = document.querySelector('canvas')

  const ctx = canvas.getContext('2d') // 2d is for drawing

  canvas.width = 1024
  canvas.height = 576 

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height) // fill the canvas with black color

  console.log(canvas)  
  return (
    <>
      <canvas></canvas>
    </>
  );
}

export default App;
