import React, { Component } from 'react';
import style from './ToDoListItem.css';

export default class ToDoListItem extends Component {

    state = {
        done: false,
        important: false,
    }
    onLabelClick = () => {

        this.setState(({ done }) => {// такой код можно сразу деструктурировать
            return {
                done: !done, // короче не бывает
            }
        })
    }

    onImportantChange = () => {

        this.setState((state) => {
            return {
                important: !state.important,
            }
        })
    }

    render() {

        const { label, onItemDelete } = this.props;
        const { important } = this.state;
        const liStyle = {
            color: important ? 'red' : 'black',
            fontWeight: important ? 'bold' : '',
        }

        return (
            <div>
                <span className={`list-group-item ${this.state.done ? 'done' : ''}   butWrapper`} style={liStyle} >
                    <div onClick={this.onLabelClick} >
                        {label}
                    </div>
                    <div>
                        <button onClick = {onItemDelete} type="button" className="btn btn-danger danger"><i className="fa fa-trash"></i></button>
                        <button onClick={this.onImportantChange} type="button" className="btn btn-warning"><i className="fa fa-check"></i></button>
                    </div>
                </span>
            </div>
        );
    }
}

