import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/database';

const EmailSubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate email format (you may want to use a more robust validation method)
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format. Please enter a valid email address.');
      return;
    }

    try {
      // Save the email to Firebase Realtime Database
      const emailRef = firebase.database().ref('emailList').push();
      await emailRef.set({
        email: email,
      });

      // Optionally, you can log a success message or perform additional actions
      console.log('Subscribed to email list:', email);
      alert('Successfully subscribed to the email list!');
      setEmail(''); // Clear the email input after submission
    } catch (error) {
      console.error('Error subscribing to the email list:', error.message);
      alert('Error subscribing to the email list. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Subscribe to Email List</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default EmailSubscriptionForm;
