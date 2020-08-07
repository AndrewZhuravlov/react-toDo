import React, { Component } from 'react';
import style from './ToDoListItem.css';

export default class ToDoListItem extends Component {
    
    render() {
       
        const { label, important, done, onItemDelete, onToggleDone, onToggleImportant } = this.props;
        const liStyle = {
            color: important ? 'red' : 'black',
            fontWeight: important ? 'bold' : '',
        }

        return (
            <div>
                <span className={`list-group-item ${done ? 'done' : ''}   butWrapper`} style={liStyle} >
                    <div onClick={onToggleDone} >
                        {label}
                    </div>
                    <div>
                        <button onClick = {onItemDelete} type="button" className="btn btn-danger danger"><i className="fa fa-trash"></i></button>
                        <button onClick={onToggleImportant} type="button" className="btn btn-warning"><i className="fa fa-check"></i></button>
                    </div>
                </span>
            </div>
        );
    }
}

