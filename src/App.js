import React from 'react'
import Chatbot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';

function App() {
  const steps = [
    {
      id:'Greetings!',
      message:'Hello I am IntelliChat',
      trigger:'Ask Name'
    },
  {
  id: 'Ask Name',
  message: 'Please enter your name',
  trigger: 'Waiting1'
},
{
  id: 'Waiting1', 
  user: true,
  trigger: 'Name'
},
    {
      id: 'Name',
      message: "Hi {previousValue}. Please select your industry" ,
      trigger: 'Industry'
    },
    
    {
      id:'Industry',
      options:[ {value:'Information Technology',label:'Information Technology' , trigger:'IT'},
      {value:'Human Resources',label:'Human Resources' , trigger:'HR'},
      ],
    },
    {
      id:'IT',
      message: 'Thanks for choosing IT industry',
      end: true
    },
    {
      id:'HR',
      message: 'Thanks for choosing HR industry',
      end: true
    }
  ]
  return(
  <>
  <Segment floated="right">
    <Chatbot steps={steps}/>

  </Segment>
  
  
  </>
);
}

export default App
