import { InputSearch } from "./lib";

function App() {
  return (
    <>
      <h1>Input Search</h1>

      <InputSearch loading={false} searchValue={(value) => console.log(value)} searchClear={() => console.log('Limpou')} />
    </>
  );
}

export default App;
