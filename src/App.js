import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  ;
  const [username, setUsername] = useState('');

  useEffect( () => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })
  },[])
  
  useEffect(() => {
    setUsername(prompt('plese enter your name'))
  }, [])
  //console.log(username);

  const sendMessange = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className='App'>
      <img alt='messenger_logo' src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'/>
      <h1>Hello!! Welcome to FB messanger {username}</h1>
      <form className='app_form'>
      <FormControl className='app_formControl'>
        <Input className='app_input' placeholder='Enter a message...' value={input} onChange={ (e) => setInput(e.target.value)} />
        <IconButton className='app_iconButton' type='submit' disabled={!input} variant='contained' color='primary' onClick={sendMessange}>
          <SendIcon/>
        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id, data}) => (
            <Message key={id} username={username} message={data}/>
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
