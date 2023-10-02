import { useState, useEffect } from 'react';

function ContactUsBonus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('teacher');
  const [bio, setBio] = useState('');
  const [signup, setSignUp] = useState(false);
  
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  useEffect(() => {
      const errors = {name:[], email:[],phone:[],phoneType:[],bio:[],signup:[]};
      if (!name.length) errors['name'].push('Please enter your Name');
      if (name.length > 30) errors['name'].push('Name must be less than 30 characters')

      if (email.length && !email.includes('@')) errors['email'].push('Please provide a valid Email');
      if (!email.length) errors['email'].push('Please provide an Email.')
      if (phone.length<10 || phone.length>10) errors['phone'].push('Please provide phone number')
      if (phone.length==10 && phoneType==='') errors['phoneType'].push('Please provide phone type')
      if (bio.length>280) errors['bio'].push('Bio could only have 280 characters')
        
      setValidationErrors(errors);
  }, [name, email]);
  
  const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    setHasSubmitted(true);
    console.log(validationErrors)
    if (Object.values(validationErrors).length!==0 && (validationErrors['name'].length || validationErrors['email'].length)) return alert(`Cannot Submit`);

    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      signup,
      submittedOn: new Date()
    };

    // Ideally, we'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact us information to the console.
    console.log(contactUsInformation);

    // Reset the form state.
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setStaff('');
    setBio('');
    setSignUp('');
    setValidationErrors({});
    setHasSubmitted(false);
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
          {hasSubmitted && validationErrors.name.length > 0 && validationErrors.name.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          {hasSubmitted && validationErrors.email.length > 0 && validationErrors.email.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          {hasSubmitted && validationErrors.phone.length > 0 && validationErrors.phone.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
          {hasSubmitted && validationErrors.phoneType.length > 0 && validationErrors.phoneType.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
        </div>
        <div>
          <p>Staff:</p>
          <input type='radio'
            id='staff'
            name='staff'
            onChange={e => setStaff(e.target.value)}
            value='teacher'
          />
          <label htmlFor='teacher'>Teacher</label>
          <input type='radio'
            id='staff'
            name='staff'
            onChange={e => setStaff(e.target.value)}
            value='student'
          />
          <label htmlFor='student'>Student</label>
        </div>
        <div>
          <label htmlFor='comments'>Bio:</label>
          <textarea
            id='bio'
            name='bio'
            onChange={e => setBio(e.target.value)}
            value={bio}
          />
          {hasSubmitted && validationErrors.bio.length > 0 && validationErrors.bio.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}
        </div>
        <div>
          <label htmlFor='comments'>Sign Up</label>
          <input
          type='checkbox'
            id='signup'
            name='signup'
            onChange={e => setSignUp(!signup)}
            checked={signup}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUsBonus;
