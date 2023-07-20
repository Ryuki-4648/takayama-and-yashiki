import './App.css';
import questionList from './data/question.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="w-2/3 mx-auto">
        <p>10個の写真を見てどちらかを当ててください。</p>

        <ul className="flex justify-center flex-wrap">
          {questionList.map((item) => {
            return (
              <li className="flex justify-center flex-wrap w-full">
                <img src={item.imagePath} alt="" />
                <div className="flex">
                  <button className="w-24 h-8">高山</button>
                  <button className="w-24 h-8">屋敷</button>
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
