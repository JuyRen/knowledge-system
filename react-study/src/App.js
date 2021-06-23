import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <a href="https://www.baidu.com">百度</a>
      <p>
        <span>介绍</span>
        <img src="https://www.baidu.com" alt="" />
        {num}
      </p>
      <button onClick={() => setNum(num + 1)}>点击加一</button>
    </div>
  );
}

export default App;
