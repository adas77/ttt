import Board from './components/Board'
import Score from './components/Score'

const App = () => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-2'>
      <Board />
      <Score />
    </div>
  )
}

export default App