import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelListContainer, ChannelContainer,Auth } from './components';

import './App.css'

const apiKey='87skv8zsf2xy';
const client=StreamChat.getInstance(apiKey);
const authToken=false;

function App() {
  if(!authToken) return <Auth/>
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/>
        <div>nigger</div>
      </Chat>
    </div>
  );
}

export default App