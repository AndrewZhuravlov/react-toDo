import React from 'react';
import style from './ToDoListItem.css'
const ToDoListItem = ({ label, important = false }) => { // деструктуризация props и присвоение значений по умолчанию))

    const liStyle = {
        color: important ? 'red' : 'black',
    }

    return (
        <div>
            <span className='list-group-item butWrapper' style={liStyle} >
                <div>
                    {label}
                </div>
                <div>
                    <button type="button" className="btn btn-danger danger"><i className="fa fa-trash"></i></button>
                    <button type="button" className="btn btn-warning"><i className="fa fa-check"></i></button> 
                </div>
            </span>
        </div>
    );
}
export default ToDoListItem;