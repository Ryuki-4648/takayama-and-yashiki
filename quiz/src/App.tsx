import { useState } from "react";
import "./App.css";
import questionList from "./data/question.json";

/**
 * ・questionListからランダムに問題を10個取得する
 * ・高山か屋敷のボタンをクリックする
 * ・結果を見るボタンを押し、何問正解したか表示する
 */

function App() {
  // const [randomQuiz, setRandomQuiz] = useState(
  //   questionList[Math.floor(Math.random() * questionList.length)],
  // );
  // setRandomQuiz(questionList[Math.floor(Math.random() * questionList.length)]);

  const getRandomQuestions = () => {
    const shuffledQuestions = questionList.sort(() => 0.5 - Math.random());
    console.log(shuffledQuestions);
    return shuffledQuestions.slice(0, 10);
  };
  /**
   * questionListをシャッフルし、ランダムに10個のクイズを選択する。
   * sortメソッド：返り値をもとに配列の要素を並び替える。引数にソートのルールを指定できる。
   * 無名関数：0.5からMath.random()（0以上1未満のランダムな小数）を引いた値（-0.5から0.5の間のランダムな値）を返す
   */

  const randomQuizList = getRandomQuestions();

  return (
    <div className="App bg-gray-200">
      <header className="App-header h-24"></header>
      <main className="w-3/4 mx-auto pb-40">
        <p className="text-3xl block font-bold mb-12 tracking-wider">
          10個の写真を見て、どちらかを当ててください。
        </p>

        <ul className="flex justify-between flex-wrap">
          {randomQuizList.map((item) => {
            return (
              <li
                className="flex justify-center flex-wrap w-full md:w-5/12 mb-16 bg-white rounded-2xl shadow-lg p-8"
                key={item.id}
              >
                <img
                  src={item.imagePath}
                  alt="高山か屋敷の写真"
                  className="w-40 h-40 object-cover mb-8"
                />
                <div className="flex w-full justify-between flex-wrap">
                  <button className="w-40 h-12 rounded-3xl font-bold tracking-wider button01 mr-2 mb-2">
                    高山
                  </button>
                  <button className="w-40 h-12 rounded-3xl font-bold tracking-wider bg-gray-200">
                    屋敷
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="resultButton w-72 h-16 rounded-md text-white text-xl font-bold block mx-auto duration-300 mt-12">
          結果を見る
        </button>
      </main>
    </div>
  );
}

export default App;
