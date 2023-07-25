import { useEffect, useState } from "react";
import "./App.css";
import questionList from "./data/question.json";

/**
 * ・questionListからランダムに問題を10個取得する
 * ・高山か屋敷のボタンをクリックする
 * ・結果を見るボタン→高山と屋敷どちらをクリックしたか保存する。何問正解したか表示する
 */

function App() {
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

  const mainColor = "#f7ea2a";

  // const randomQuizList = getRandomQuestions();
  const [randomQuizList, setRandomQuizList] = useState(getRandomQuestions());
  // 初回レンダリング時に実行する
  useEffect(() => {
    setRandomQuizList(getRandomQuestions());
  }, []);

  const [results, setResults] = useState<string[]>([]); // 初期値：空の配列

  const onClickResultButton = () => {
    // resultsに結果を格納する
    const selectedOptions = randomQuizList.map((item) => {
      return "高山";
    });
    // console.log(selectedOptions); 10個の配列、全て中身は高山
    setResults(selectedOptions);
  };

  const onClickOptionButton = (id: number, selectedOption: string) => {
    // console.log(`クイズID: ${id}, 選択オプション: ${selectedOption}`);
  };

  const onClickResetButton = () => {
    setRandomQuizList(getRandomQuestions());
  };

  const calculateScore = () => {
    let score = 0;
    // results.map((selectedOption, index) => {
    //   if (selectedOption === randomQuizList[index].answer) {
    //     score++;
    //   }
    // });
    // Array.prototype.map() expects a return value from arrow function.eslintarray-callback-returnのエラーが出る
    // アロー関数内で結果を返す必要がある。
    // console.log(results); // 10個の配列、全て中身は高山
    results.forEach((selectedOption, index) => {
      if (selectedOption === randomQuizList[index].answer) {
        score++;
      }
    });
    return score;
  };

  const [buttonActive, setButtonActive] = useState(false);
  const onClickButtonToggle = () => {
    setButtonActive(!buttonActive);
  };
  /**
   * onClickButtonToggle関数がクリックされるたびにgetRandomQuestions関数が再度呼び出され、毎回クイズがシャッフルされる
   * → buttonActiveの値を反転させているだけ。
   * クリックするとコンポーネントの再レンダリングが起こり、randomQuizListも再度初期化されて新しいクイズリストが生成される
   */

  return (
    <div className="App bg-gray-200">
      <header className="h-32">
        <div className="header-bg asbolute -z-10 w-52 h-40"></div>
        <h1 className="absolute left-4 top-4 font-bold text-xl tracking-wider">
          高山か屋敷か
        </h1>
      </header>
      <main className="w-3/4 mx-auto pb-40">
        <div className="flex justify-center">
          <p className="text-3xl inline-block font-bold mb-20 tracking-wider leading-loose text-center relative z-10">
            野球選手の高山俊か ニューヨークの屋敷か
            <br />
            どちらなのかを当ててください。
            <span className="absolute -z-10 text-9xl -left-16 -top-8 text-gray-300 scale-125">
              Q
            </span>
          </p>
        </div>

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
                  {/* onClickイベントハンドラー どちらのボタンがクリックされたかを判定 */}
                  <button
                    className={`w-40 h-12 rounded-3xl font-bold tracking-wider button01 mr-2 mb-2 bg-gray-200 ${
                      buttonActive ? "" : "is-click"
                    }`}
                    onClick={() => {
                      onClickOptionButton(item.id, "高山");
                      onClickButtonToggle();
                    }}
                  >
                    高山
                  </button>
                  <button
                    className="w-40 h-12 rounded-3xl font-bold tracking-wider bg-gray-200"
                    onClick={() => {
                      onClickOptionButton(item.id, "屋敷");
                      onClickButtonToggle();
                    }}
                  >
                    屋敷
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className="resultButton w-72 h-16 rounded-md text-white text-xl font-bold block mx-auto duration-300 mt-12 mb-8"
          onClick={onClickResultButton}
        >
          結果を見る
        </button>
        <button
          className="w-72 h-16 rounded-md bg-gray-300 text-xl font-bold block mx-auto duration-300"
          onClick={onClickResetButton}
        >
          リセットする
        </button>
        <p>
          <span>{calculateScore()}</span>/<span>10</span>
        </p>
      </main>
    </div>
  );
}

export default App;
