import React, { useEffect, useRef, useState} from 'react';
import './App.css';
import {Matrix} from "./components/matrix/Matrix";

function App() {
  const [n, setN] = useState<number>(3);
  const ignore = useRef(false)
  const [matrix, setMatrix] = useState<number[][]>([]);

  const generateMatrix = () => {
    const clonedData:number[][]= [];
    if(ignore.current) {
      for (let i = 0; i < n; i++) {
        clonedData.push([])
        for (let j = 0; j < n ; j++) {
          clonedData[i].push(
              Math.floor(Math.random() * 999 + 1)
          );
        }
      }
      setMatrix(clonedData);
    }
  };

  useEffect(() => {
    generateMatrix();
    return () => {
      ignore.current = true;
    };
  }, [n]);

  const handleChange = (value:number, idx:number, index: number) => {
    const clonedData = [...matrix];
    if (value <= 999) {
      clonedData[idx][index] = value;
    }
    setMatrix(clonedData);
  };

  return (
    <div className="App">
      <div className='buttonWrapper'>
        <button onClick={() => setN(prevState => prevState - 1)}>-</button>
        <button onClick={() => setN(prevState => prevState + 1)}>+</button>
      </div>
      <Matrix
        matrix={matrix}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
