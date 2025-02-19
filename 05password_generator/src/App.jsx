import { useState, useCallback, useEffect , useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");


  // use ref hook
  const passwordRef = useRef(null);

  // Function to generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (characterAllowed) {
      str += "!@#$%^&*()_+";
    }
    if (numberAllowed) {
      str += "0123456789";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(passwordRef.current?.select());
    passwordRef.current?.setSelectionRange(0, 10000);  
  } , [password] )
  // Generate password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-7 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center text-3xl font-semibold mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full bg-gray-800 text-white p-2 outline-white"
             ref={passwordRef}
             readOnly
          />
          <button
            className="outline-none bg-green-500 px-3 py-1 text-white"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed(!characterAllowed)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        <button
          className="w-full bg-blue-500 text-white px-3 py-2 rounded-md mt-3"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
