import React, {Component} from "react";
import clsx from 'clsx';
import css from './Counter.module.css';

export class Counter extends Component {

    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
    //
    };

    state = {
        value: this.props.initialValue,
    };

    Increment = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    Decrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        const { value } = this.state;
        return  <div className={clsx(css.wrapper)}>
            <div>
                <h1 className={clsx(css.title)}>Counter</h1>
                     <span className={clsx(css.value)}>{value}</span>
                        <div className={clsx(css.wrapper__item)}>
                            <button type="button" className={clsx(css.Increment)} onClick={this.Increment}>+</button>
                            <button type="button" className={clsx(css.Decrement)} onClick={this.Decrement}>-</button>
                        </div>
                    </div>
                </div>
            
        
    }
}