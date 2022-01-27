import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3"> 
            <div class="card my-3 "> 
                <div class ="card-body">
                <h4 class ="card-title">{note.title}</h4>
                <h5 class ="card-title">{note.tag}</h5>
                <p class ="card-text">{note.description}</p> 
                </div>
            </div>
        </div>
    )
}

export default Noteitem