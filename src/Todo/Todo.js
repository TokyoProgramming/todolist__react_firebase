import React, { useState } from "react";
import './Todo.css'
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Modal, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import db from "../firebase";

function Todo(props){
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const updateTodo = () => {
    //    update the todo
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });

        setOpen(false);
    }

    return(
        <div className="todo__rule">
            <Modal
                open={open}
                onClose={event => setOpen(false)}
            >
                <div>
                    {/*<h1>I am a Modal</h1>*/}
                    <input
                        placeholder={props.todo.todo}
                        value = {input}
                        onChange={event => setInput(event.target.value)}/>
                    <Button
                        onClick={updateTodo}>
                        Update Todos
                    </Button>
                </div>
            </Modal>

                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Todo" secondary={props.todo.todo} />
                    </ListItem>
                    <div className="todo__button">
                        <Button variant="contained" color="primary" onClick={event => setOpen(true)}>Edit</Button>
                        {/*<Button variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>*/}
                    <IconButton aria-label="delete">
                        <DeleteIcon color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
                    </IconButton>
                    </div>

                </List>


        </div>
    )
}

export default Todo;
