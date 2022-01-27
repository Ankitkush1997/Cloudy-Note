import {React, useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial =[
    {
      "_id": "61edb480a2341c1a4997d494",
      "user": "61edb367a2341c1a4997d48a",
      "title": "My title 1",
      "description": "Please wake up early and brush",
      "tag": "very personal",
      "date": "2022-01-23T20:03:12.085Z",
      "__v": 0
    },
    {
      "_id": "61f2b7671ed090ad843c90eb",
      "user": "61edb367a2341c1a4997d48a",
      "title": "My title 2",
      "description": "Please wake up early and brush and shushu",
      "tag": "very personal hai",
      "date": "2022-01-27T15:16:55.641Z",
      "__v": 0
    },
    {
      "_id": "61f2b77a1ed090ad843c90ed",
      "user": "61edb367a2341c1a4997d48a",
      "title": "My title 3",
      "description": "Please wake up early and brush and shushu and breakfast",
      "tag": "very personal hai bhai",
      "date": "2022-01-27T15:17:14.172Z",
      "__v": 0
    },
    {
      "_id": "61f2b78e1ed090ad843c90ef",
      "user": "61edb367a2341c1a4997d48a",
      "title": "My title 4",
      "description": "Please wake up early and brush and shushu and breakfast then go to school",
      "tag": "very personal hai bhai smjho",
      "date": "2022-01-27T15:17:34.149Z",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(notesInitial);
    
    return <NoteContext.Provider value ={{notes}}> {props.children}</NoteContext.Provider>;
};

export default NoteState;
