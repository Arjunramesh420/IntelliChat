import React from 'react'
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const Steps = () => {
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
            { value: 'Non-IT', label: 'Non-IT', trigger: 'HR' },
          ],
        },
         // IT domain options
      {
        id: 'IT',
        message: 'Thanks for choosing Information Technology Industry. Kindly select your domain.',
        trigger: 'ITDomains',
      },
      {
        id: 'ITDomains',
        options: [
          { value: 'Web Development', label: 'Web Development', trigger: 'WebDevelopment' },
          { value: 'Data Science', label: 'Data Science', trigger: 'DataScience' },
          { value: 'Network Administration', label: 'Network Administration', trigger: 'NetworkAdmin' },
          { value: 'Cybersecurity', label: 'Cybersecurity', trigger: 'Cybersecurity' },
          {value: 'Others', label: 'Others', trigger: 'OtherIT'}
        ],
      },
      {
        id: 'WebDevelopment',
        message: 'Great choice! What specific area of Web Development are you interested in?',
      
      },
      {
        id: 'DataScience',
        message: 'Excellent! What aspect of Data Science intrigues you the most?',
      
      },
      {
        id: 'NetworkAdmin',
        message: 'Nice! What aspects of Network Administration are you looking to explore?',
       
      },
      {
        id: 'Cybersecurity',
        message: 'Fantastic! What particular area of Cybersecurity are you interested in?',
        
      },
      {
        id: 'OtherIT',
        message: 'Please type your specific IT industry:',
        trigger: 'OtherITTyped',
      },
      {
        id: 'OtherITTyped',
        user: true,
        trigger: 'OtherITResponse',
      },
      {
        id: 'OtherITResponse',
        message: 'Thanks for sharing! We will consider your input.',
        end: true,
      },
    
    
      // Human Resources domain options
      {
        id: 'HR',
        message: 'Thanks for choosing the Non-IT Industry. Kindly select your domain.',
        trigger: 'HRDomains',
      },
      {
        id: 'HRDomains',
        options: [
          { value: 'Recruitment', label: 'Recruitment', trigger: 'Recruitment' },
          { value: 'Employee Relations', label: 'Employee Relations', trigger: 'EmployeeRelations' },
          { value: 'Training and Development', label: 'Training and Development', trigger: 'TrainingDevelopment' },
          { value: 'Compensation and Benefits', label: 'Compensation and Benefits', trigger: 'CompensationBenefits' },
        ],
      },
      {
        id: 'Recruitment',
        message: 'Interesting! What aspect of Recruitment are you interested in?',
      },
      {
        id: 'EmployeeRelations',
        message: 'Great choice! In {previousValue} What specific area you are looking for?',
        
      },
      {
        id: 'TrainingDevelopment',
        message: 'Exciting! What aspects of Training and Development are you looking to explore?',
      
      },
      {
        id: 'CompensationBenefits',
        message: 'Wonderful! What particular area of Compensation and Benefits are you interested in?',
       
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
  )
}

export default Steps
