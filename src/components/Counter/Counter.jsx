import {useState} from "react";
import clsx from 'clsx';
import css from './Counter.module.css';

export const Counter =() => {
    const [counter, setCounter] = useState(0);
    
  const  handleIncrement = () => {
        setCounter(prevState => prevState + 1);
    };

  const  handleDecrement = () => {
        setCounter(prevState => prevState - 1);
    };


        return  <div className={clsx(css.wrapper)}>
            <div>
                <h1 className={clsx(css.title)}>Counter</h1>
                     <span className={clsx(css.value)}>{counter}</span>
                        <div className={clsx(css.wrapper__item)}>
                            <button type="button" className={clsx(css.Increment)} onClick={handleIncrement}>+</button>
                            <button type="button" className={clsx(css.Decrement)} onClick={handleDecrement}>-</button>
                        </div>
                    </div>
                </div>
            
        
    }
