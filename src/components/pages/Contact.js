import React from 'react';

export default function Contact(props) {
  return (
    <div>
      <br />
      <h1 class = "text-center">Contact Page</h1>
      <br />
      <form>
        <div className="form-group">
          <div className = "container bg-info rounded">
            <label htmlFor="name">Name:</label>
              <input
                onChange={props.handleInputChange}
                value={props.value}
                name="name"
                type="text"
                className="form-control"
                placeholder="name"
                id="search"
              />
            <br />
            <label htmlFor="email">Email:</label>
              <input
                onChange={props.handleInputChange}
                value={props.value}
                name="name"
                type="text"
                className="form-control"
                placeholder="email"
                id="email"
              />
              <br />
            <label htmlFor="Message">Message:</label>
              <input
                onChange={props.handleInputChange}
                value={props.value}
                name="message"
                type="text"
                className="form-control"
                placeholder="message"
                id="message"
              />
            <br />
          </div> 
          <br />     
          <div class="form-row text-center">
            <div class="col-12">                                           
              <button
                onClick={props.handleFormSubmit}
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>  
          </div>     
        </div>
      </form>
    </div>
  );
}

