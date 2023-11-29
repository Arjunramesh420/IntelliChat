import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
// import './App.css';

function App(){
  const chatbotStyle = {
    cursor: 'pointer',
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '70%',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };
  

  const steps = [
    {
      id: 'Greetings!',
      message: 'Hello, I am IntelliChat',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'Waiting1',
    },
    {
      id: 'Waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}. Please select your industry',
      trigger: 'Industries',
    },
    {
      id: 'Industries',
      options: [
        { value: 'Information Technology', label: 'Information Technology', trigger: 'IT' },
        { value: 'Human Resources', label: 'Human Resources', trigger: 'HR' },
      ],
    },
    {
      id: 'IT',
      message: 'Thanks for choosing the Information Technology Industry',
      end: true,
    },
    {
      id: 'HR',
      message: 'Thanks for choosing the Human Resources Industry',
      end: true,
    },
  ];

  return (
    <>
      <Segment floated='right'>
      <div style={chatbotStyle} className="chatbot-icon">
        <Chatbot steps={steps} />
        </div>
       
      </Segment>
       
    </>
  );
}

export default App;








// React.StrictMode is a tool designed to help catch common bugs and issues in your application by enabling additional checks and warnings. It performs double-invocations of certain functions to help detect side-effects during renders.

// When you remove React.StrictMode, these double-invocations are no longer happening, and the component lifecycle behaves differently. This can lead to a reduction in the number of renders, and it might resolve the issue you were facing.

// While React.StrictMode is a useful tool for catching potential issues early in development, it can sometimes cause confusion and unexpected behavior. In a production environment, the double-invocations and additional checks are not present, so the behavior might differ.

// It's worth noting that the removal of React.StrictMode doesn't solve the underlying issue; it simply changes the behavior. If your component was rendering multiple times due to an unintended re-render, you might want to further investigate the cause and ensure that your component's state and props are being managed correctly to avoid unnecessary renders.

// If your application is working as expected without React.StrictMode, and you don't encounter any issues, you can choose to leave it removed. However, for development purposes, you might want to keep it enabled to benefit from the additional checks and warnings it provides.






