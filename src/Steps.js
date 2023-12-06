import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { Segment} from 'semantic-ui-react';
import FileUpload from './FileUpload';
 import './Steps.css';
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


// Function to update sessionStorage
const updateSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

  

// Chatbot Chatting Steps
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
    trigger: 'Name',
    // Save user's name to sessionStorage
    user: true,
    validator: (value) => {
      updateSessionStorage('name', value);
      return true;
    },
  },
  {
    id: 'Name',
    message: 'Hi {previousValue}. Please select the INDUSTRY you are looking for',
    trigger: 'Industries',
  },
  // Industry trigger
  {
    id: 'Industries',
    options: [
      { value: 'Information Technology', label: 'Information Technology', trigger: 'IT' },
      { value: 'Non-IT', label: 'Non-IT', trigger: 'NonIT' },
    ],
  },
  // Domain trigger
  {
    id: 'IT',
    message: 'Thanks for choosing Information Technology Industry. Kindly tell us about the DOMAIN the talent should expertise in?',
    trigger: 'Domains',
  },
  {
    id: 'NonIT',
    message: 'Thanks for choosing Non IT Industry. Kindly tell us about the INDUSTRY & DOMAIN the talent should expertise in?',
    trigger: 'Domains',
  },
  {
    id: 'Domains',
    user: true,
    trigger: 'ModeOfContract',
    // Save user's domain response to sessionStorage
    validator: (value) => {
      updateSessionStorage('domain', value);
      return true;
    },
  },
  // Mode of contract
  {
    id: 'ModeOfContract',
    message: 'Thank you for your response. What mode of contract do you expect from the Gig-talent?',
    trigger: 'mode',
     // Manually trigger validator for options
  validator: (value) => {
    updateSessionStorage('mode', value);
    return true;
  },
  },
  {
    id: 'mode',
    options: [
      { value: 'FullTime', label: 'Full time', trigger: 'project' },
      { value: 'PartTime', label: 'Part time', trigger: 'project' },
      { value: 'Service', label: 'Service based', trigger: 'project' },
      { value: 'Engagement', label: 'Engagement based', trigger: 'project' },
    ],
    trigger: 'project',
    // Save user's mode response to sessionStorage
    validator: (value) => {
      updateSessionStorage('mode', value);
      return true;
    },
  },
  // Project description
  {
    id: 'project',
    message: 'Thank you for your response. Can you provide a small description of the project?',
    trigger: 'desc',
  },
  {
    id: 'desc',
    user: true,
    trigger: 'otha',
    // Save user's project description response to sessionStorage
    validator: (value) => {
      updateSessionStorage('projectDescription', value);
      return true;
    },
  },
  // Workplace
  {
    id: 'otha',
    message: 'Thank you for your response. Kindly tell us your preferred WORKSPACE',
    trigger: 'workspace',
    // Manually trigger validator for options
  validator: (value) => {
    updateSessionStorage('workspace', value);
    return true;
  },
  },
  {
    id: 'workspace',
    options: [
      { value: 'onSite', label: 'On-site', trigger: 'contractType' },
      { value: 'WFH', label: 'Work from home', trigger: 'contractType' },
      { value: 'Hybrid', label: 'Hybrid', trigger: 'contractType' },
      { value: 'Need based', label: 'Need based', trigger: 'contractType' },
    ],
    trigger: 'contractType',
    // Save user's workspace response to sessionStorage
    validator: (value) => {
      updateSessionStorage('workspace', value);
      return true;
    },
  },
  // Contract type
  {
    id: 'contractType',
    message: 'Thank you for your response. Kindly choose your contract type.',
    trigger: 'Type',
  },
  {
    id: 'Type',
    options: [
      { value: 'companyPayroll', label: 'Company Payroll', trigger: 'location' },
      { value: 'GiglejiPayroll', label: 'Gigleji Payroll', trigger: 'location' },
    ],
    trigger: 'location',
   // Manually trigger validator for options
  validator: (value) => {
    updateSessionStorage('contractType', value);
    return true;
  },
  },
  // Location
  {
    id: 'location',
    message: 'Thank you for your response. Kindly enter the location of the talent you are looking for.',
    trigger: 'locResponse',
  },
  {
    id: 'locResponse',
    user: true,
    trigger: 'descFile',
    // Save user's location response to sessionStorage
    validator: (value) => {
      updateSessionStorage('location', value);
      return true;
    },
  },
  // File upload
  {
    id: 'descFile',
    message: 'Thank you for providing your location preference. Kindly attach your project description file here',
    trigger: 'uploadFile',
    // Save user's file upload response to sessionStorage
    user: true,
    validator: (value) => {
      updateSessionStorage('fileUpload', value);
      return true;
    },
  },
  {
    id: 'uploadFile',
    component: <FileUpload />,
    waitAction: true,
    end: true,
    trigger: 'concludingMessage',
  },
  // Concluding message
  {
    id: 'concludingMessage',
    message: 'Thank you for providing the information. We will get back to you shortly!',
    end: true,
  },
];

  return (
    <>
      <Segment floated="right">
        <div style={chatbotStyle} className="chatbot-icon">
          <Chatbot steps={steps} />
        </div>
      </Segment>
    </>
  );
};

export default Steps;

