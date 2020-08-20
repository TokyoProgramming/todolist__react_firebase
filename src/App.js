import React, {useEffect, useState} from 'react';
import './App.css';
import Todo from './Todo/Todo'
import db from "./firebase";
import firebase from "firebase";

import {Button, FormControl, InputLabel} from "@material-ui/core";
import {Input} from "@material-ui/core";


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
      db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
      })
  }, []);

  const addTodo = (event) => {
      // avoid refresh
      event.preventDefault();
  //    this will fire off when we click the button

      db.collection('todos').add({
          todo:input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      console.log('hi');
      setTodos([...todos, input]);
      setInput('');

  }

  return (
    <div className="app">
      <h1>React Firebase Todo App -- Crud</h1>

        <FormControl>
            <InputLabel>Write a Todos </InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input}
            className="button"
            type="submit" onClick={addTodo}>Add Todo </Button>
      <ul>
          {todos.map(todo => (
              <Todo todo={todo}/>
          ))}
      </ul>

    </div>
  );
}

export default App;
