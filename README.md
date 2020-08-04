# Notillew Minefield Core
A pure javascript minefield generator 

## Installation
> yarn add notillew-minefield-core

*or*

> npm install notillew-minefield-core

## Documentation
This generator exports a minefield array and a object with mines mapping

### Minefields
```
const { minefields } = minefield.generate(12, 12, 12);
// Output Array[number[]]
// [[0, -1, 0, 0]]

```

### Minesmap
```
const { minesMap } = minefield.generate(12, 12, 12);
// Output Object { 'index': Array[number] }
// { '0', [1] }

```
### Properties
#### isMine(minefields, rowIndex, colIndex)

| Name | Required | type |
|--|--|--|
| minefields | true  | Array[number] |
| rowIndex | true | number |
| colIndex | true | number |

#### generate(columns, rows, mines)

| Name | Required | Min | Max |
|--|--|--|--|
| columns | true  | 12 | - |
| rows | true  | 12 | - |
| mines | true  | 6| columns * rows |


## React usage example
```
import React from 'react';
import { FaBomb } from 'react-icons/fa';

import minefield, { isMine } from 'notillew-minefield-core';
import './App.css';

function App() {
  const { minefields } = minefield.generate(12, 12, 12);

  const handleClickArea = (rowIndex, colIndex) => {
    if (isMine(minefields, rowIndex, colIndex)) {
      console.log('boom');
    }
  };

  const getClassName = (number) => {
    switch (number) {
      case -1:
        
        return 'mine';

      case 0: 
        return 'empty'
    
      default:
        return 'number';
    }
  }
  return (
    <div className="App">
      <ul>
        {minefields.map(rows => (
          <li>
            {rows.map(col => (
              <div 
                onClick={handleClickArea}
                className={getClassName(col)}
              >
                {col === -1 ? <FaBomb color="black" /> : col}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```