import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/png-transparent-circle-drawing-highlight-angle-text-shape-thumbnail-removebg-preview.png'
import cross_icon from '../Assets/close-png-x-17-removebg-preview.png'



function TicTacToe(props) {

    let [message,setMessage] = useState(props.msg);
    let [count,setCount] = useState(0);
    let [lock,setLock]= useState(false);
    let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    let titleRef = useRef(null);

    const toggle = (e,num) => {
         if (lock){
            return 0;
         }
         if(count%2==0){
            e.target.innerHTML = `<img src ='${cross_icon}'> `;
            data[num]="X";
            setCount(++count);
         }
         else{
            e.target.innerHTML = `<img src ='${circle_icon}'> `;
            data[num]="O";
            setCount(++count);
         }

         checkWin();
    }


    const checkWin = () => {

        let hasWinner = false;

        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="" ){
            won(data[2]);
            hasWinner = true;
        }

        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="" ){
            won(data[5]);
            hasWinner = true;
        }

        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="" ){
            won(data[8]);
            hasWinner = true;
        }

        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="" ){
            won(data[6]);
            hasWinner = true;
        }

        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="" ){
            won(data[7]);
            hasWinner = true;
        }

        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="" ){
            won(data[8]);
            hasWinner = true;
        }

        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="" ){
            won(data[8]);
            hasWinner = true;
        }

        else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="" ){
            won(data[2]);
            hasWinner = true;
        }

        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="" ){
            won(data[6]);
            hasWinner = true;
        }

    if(hasWinner===false && count===9){
        setLock(true);
        titleRef.current.innerHTML = "It's a draw!!";
    }

        

    }

    const won = (winner) =>{
        setLock(true);
        

        if(winner==="X"){
            titleRef.current.innerHTML = "Congradulations X won";
        }

        else{
            titleRef.current.innerHTML = "Congradulations O won";
        }
        }
    
    

    const reset = () => {
        setLock(false);
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
 
        if (titleRef.current) {
          titleRef.current.innerHTML = 'Tic Tac Toe';
        }

        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach((box) => {
        box.innerHTML = ''; 
  });

      };

 

    return (
        <div className="container">
            <h1 className='message'>{message}</h1>
            <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
            <div className="board">

                <div className="row1">
                  <div className="boxes" onClick={(e)=>{toggle(e,0)}}> </div>
                  <div className="boxes" onClick={(e)=>{toggle(e,1)}}> </div>
                  <div className="boxes" onClick={(e)=>{toggle(e,2)}}> </div>
                </div>

                <div className="row2">
                  <div className="boxes" onClick={(e)=>{toggle(e,3)}}>  </div>
                  <div className="boxes" onClick={(e)=>{toggle(e,4)}}> </div>
                  <div className="boxes" onClick={(e)=>{toggle(e,5)}}> </div>
                </div>

                <div className="row3">
                  <div className="boxes" onClick={(e)=>{toggle(e,6)}}> </div>
                  <div className="boxes" onClick={(e)=>{toggle(e,7)}}> </div>
                  <div className="boxes" onClick={(e)=>{toggle(e,8)}}> </div>
                </div>

            </div>
            <button className="Reset" onClick={reset}>Reset</button>

        </div>
    );

}


export default TicTacToe;