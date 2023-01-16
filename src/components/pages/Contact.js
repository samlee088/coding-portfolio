import React, {useState} from 'react';
import { validateEmail, validateName, validateMessage} from '../../utils/helpers';
import { send } from 'emailjs-com';

export default function Contact(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [toSend, setToSend] = useState({
    name: '',
    message: '',
    email: '',
  });

  function checkEmpty(e) {
    if(!e.target.value) {
      setErrorMessage( e.target.name + " is a required field");
    }
  }


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value, } = e.target;
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    if ( name ==="name" ) {
      setName(value);
    } else if( name === "email") {
      setEmail(value);
    } else if( name === "message") {
      setMessage(value);
    }
  
    return 
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if(!validateName(name)) {
      setErrorMessage('Please enter a valid name :) ');
      return;
    }
    if(!validateEmail(email)) {
      setErrorMessage('Please enter a valid email :) ');
      return;
    }
    if(!validateMessage(message)) {
      setErrorMessage('Please enter a valid message :) ')
      return;
    }
    // Alert the user their first and last name, clear the inputs
    setErrorMessage('');
    
     send(
      'service_bdiqeoa',
      'template_yg700uv',
      toSend,
      '-AdyUNdziDTS10xoC'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });


    setName('');
    setEmail('');
    setMessage('');
    
  };


  return (
    <div style={{backgroundColor:"#eee", marginTop:"100px", paddingTop:"75px", paddingBottom:"75px"}}>
      <div className="d-flex justify-content-center">
            <p style={{fontSize:"50px"}}>Contact</p>
        </div>
      <br />
      <div  className="animate__animated animate__tada">
        <form >
          <div className="form-group" onSubmit={handleFormSubmit}>
            <div className = "container rounded" style={{ maxWidth: 600,backgroundColor:"#9BB9BD" }}>
              <label htmlFor="name">Name:</label>
                <input
                  onChange={handleInputChange}
                  onBlur = {checkEmpty}
                  value={name}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="name"
                  id="search"
                />
              <br />
              <label htmlFor="email">Email:</label>
                <input
                  onChange={handleInputChange}
                  onBlur = {checkEmpty}
                  value={email}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="email"
                  id="email"
                />
                <br />
              <label htmlFor="Message">Message:</label>
                <textarea 
                onChange={handleInputChange}
                  onBlur = {checkEmpty}
                  value={message}
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="message"
                  id="message"
                  />
              <br />
            </div> 
            <br />     
            <div className="form-row text-center">
              <div className="col-12">                                           
                <button
                  onClick={handleFormSubmit}
                  className="btn btn-primary"
                  type="submit"
                >
                  Submit
                </button>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
              </div>  
            </div>     
          </div>
        </form>
      </div>
    </div>
  );
}

