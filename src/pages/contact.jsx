import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
      alert(`Success, ${name}! But this form unfortunately does not work`);
      setName('');
      setEmail('');
      setMessage('');
    }
    alert('Unfortunately this form does not work yet. Please reach out to me via email: jesustgreyes@gmail.com')
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const inputStyles = {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '100%',
  };

  const errorStyle = {
    color: 'red',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'rgb(200,100,100)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '900',
    fontSize: '15px',
    textAlign: 'center',
    boxShadow: '10px 10px 7px black'
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', padding: '20px' }}>
      <h1>Contact Me !</h1>
      <h3 style={{ marginTop: '20px', marginBottom: '30px' }}>
        I am looking forward to hearing from you!
      </h3>
      <form
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}
        onSubmit={handleFormSubmit}
      >
        <input
          style={inputStyles}
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          style={inputStyles}
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Your@email.com"
        />
        {emailError && <p style={errorStyle}>{emailError}</p>}
        <textarea
          style={inputStyles}
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send me a message!"
        />
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}