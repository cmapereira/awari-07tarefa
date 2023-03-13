import './App.css';
import List from './components/List';


function App() {

  const users = [
    {
      id:0,
      name: 'siri',
    },
    {
      id:1,
      name: 'alexa',
    },
    {
      id:2,
      name: 'google assistent',
    },
  ];

  return (
    <div>
      <List items={users}/>
    </div>
  );
}

export default App;
