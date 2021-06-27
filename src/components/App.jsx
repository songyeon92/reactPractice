import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const newNotes = (note) => {
    return <Note 
        title={note.title}
        content={note.content}
    />
}

const App = () => {
    return (
        <div>
            <Header />
            { notes.map(newNotes) }
            <Footer />
        </div>
    );
}

export default App;

