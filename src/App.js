import './App.css';
import { Picker } from './components/Picker';
function App() {
  return (
    <div className='App'>
      <Picker colors={['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'violet', 'olive', 'maroon', 'navy', 'aqua', 'silver', 'gold']}/>
    </div>
  );
}
export default App;