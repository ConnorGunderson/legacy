import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  senderName: '',
  senderEmail: '',
  subject: '',
  message: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, senderName: action.payload };
    case 'EMAIL':
      return { ...state, senderEmail: action.payload };
    case 'SUBJECT':
      return { ...state, subject: action.payload };
    case 'MESSAGE':
      return { ...state, message: action.payload };
    case 'RESET':
      return initialState;
  }
};

const EmailContext = createContext(null);

export const EmailProvider = ({ children }) => {
  const email = useEmailProvider();
  return (
    <EmailContext.Provider value={email}>{children}</EmailContext.Provider>
  );
};

export const useEmail = () => {
  return useContext(EmailContext);
};

const useEmailProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        { ...state },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then(() => {
        setSuccess(true);
      });
    dispatch({ type: 'RESET' });
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 10000)
    }
  }, [success])
  
  const { senderName, senderEmail, subject, message } = state;




  return {
    senderName,
    senderEmail,
    subject,
    message,
    dispatch,
    sendEmail,
    success,
    setSuccess
  };
};
