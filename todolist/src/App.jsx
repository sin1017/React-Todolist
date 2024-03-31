import { useState } from "react";
export function App() {
  let [state, setState] = useState(0);
  function handleCount() {
    // 官網有針對這兩種寫法作介紹，較推薦使用第一種
    setState((prev)=>prev+1); //step 1
    // setState(state +1); //step 2

  }
  // UI // return user interface
  return (
    <>
      {state}
      <button onClick={handleCount}> +++ </button>
    </>
  )
}

// export default App
