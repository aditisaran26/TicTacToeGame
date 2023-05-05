import React, { useState } from 'react';
import Square from './Square';

function Board() {

    const [state,setState]=useState(Array(9).fill(null));
    console.log(state);

    const [isXTurn , setIsXTurn] = useState(true);

    const handleClick = (index) => {

        //check if same square pe click na kre user
        if(state[index]!=null){
            return;
        }

        console.log('clicked on index',index);
        const copyState = [...state];
        console.log('copied state',copyState);
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        console.log(setState);
        setIsXTurn(!isXTurn);


    };

    const checkWinner = () => {

        const winnerLogic = [
            [0,1,2] , [3,4,5] ,[6,7,8] ,[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ];

        for(let logic of winnerLogic)
        {
            const [a,b,c]=logic;
            if(state[a]!=null && state[a] === state[b] && state[a] === state[c])
            {
                return state[a];
            }
            
        }
        return false;
    };

    const isWinner = checkWinner();

    const handleReset =() =>{
        setState(Array(9).fill(null));
    }

  return (
    <div className='board__container'>
    {isWinner ? 
    (
    <><div className='board__winner'>{isWinner} won the game</div>
     <button onClick={handleReset}>Play Again</button></> 
    ):(
    <>
    <h2 className='border__headline'>Player {isXTurn? 'X' : '0'} Please Move</h2>
      <div className='board__row'>
            <Square value={state[0]} onClick={() => handleClick(0)}/>
            <Square value={state[1]} onClick={() => handleClick(1)}/>
            <Square value={state[2]} onClick={() => handleClick(2)}/>

      </div>
      <div className='board__row'>
            <Square value={state[3]} onClick={() => handleClick(3)}/>
            <Square value={state[4]} onClick={() => handleClick(4)}/>
            <Square value={state[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className='board__row'>
            <Square value={state[6]} onClick={() => handleClick(6)}/>
            <Square value={state[7]} onClick={() => handleClick(7)}/>
            <Square value={state[8]} onClick={() => handleClick(8)}/>
      </div>
     </>
)
}
      
    </div>
   
  );
}

export default Board;
