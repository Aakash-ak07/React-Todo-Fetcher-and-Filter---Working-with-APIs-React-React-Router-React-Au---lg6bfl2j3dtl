import React from 'react';

export const Todo  = (props) =>{
    return(
        <>
            <div className="todo" id="todo-${id}">
                {props.title}
                <div className ="todo-status">
                    {props.completed}
                </div>
            </div>
        </>
    )
}