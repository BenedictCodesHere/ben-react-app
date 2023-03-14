import React, {useState} from "react";

// Credit to GitHub user anthonycroft for providing the template for this contact form. 
//(https://github.com/anthonycroft)

function ContactFormTwo () {
    
      const [success, setSuccess] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: '2966fb55-700b-48ba-b7e9-10547339fedf'
      });
    
      const handleChange = (event) => {
    
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const data = JSON.stringify(formData);
      
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: data
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(true);
            
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
            setFormData({
                ...formData,
                name: '',
                email: '',
                message: ''
              })
        })
        .catch(err => console.log(err));
      }
      
      return (
        <div className="container">
              <div >
        <form className="row d-flex justify-content-center mt-3" onSubmit = {handleSubmit}>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange} 
            type="text" 
            placeholder="Name" />
          <input 
            className="my-1" 
            name="email"
            value={formData.email}
            onChange={handleChange} 
            type="email" 
            placeholder="Email" />
          <textarea 
            className="my-2" 
            name="message"
            value={formData.message}
            onChange={handleChange} 
            placeholder="Message..." 
            cols="23" 
            rows="6">
          </textarea>
          <button className="btn-contact" type="submit">Send Message</button>
        </form>
    
        {success && <p className="success">Form Submitted Successfully!</p>}
        </div>
      </div>
      )
    }
    
    export default ContactFormTwo;