import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

           <NotesAppBar />

           <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="What happened today"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://www.lavanguardia.com/files/image_449_220/uploads/2018/08/20/5fa43bb70de61.jpeg"
                        alt="lorem"
                    />
                </div>
           </div>
        </div>
    )
}
