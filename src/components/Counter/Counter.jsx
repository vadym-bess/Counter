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
        return (<div className={clsx(css.wrapper)}>
                   <div>
                     <span className={clsx(css.value)}>{this.state.value}</span>
                        <div className={clsx(css.wrapper__item)}>
                            <button type="button" className={clsx(css.Increment)} onClick={this.Increment}>+</button>
                            <button type="button" className={clsx(css.Decrement)} onClick={this.Decrement}>-</button>
                        </div>
                    </div>
                </div>
            
        )
    }
}