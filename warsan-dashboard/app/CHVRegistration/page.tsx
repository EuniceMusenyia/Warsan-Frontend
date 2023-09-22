import React from 'react';
import Link from 'next/link';

const chvSignUpFields = [
  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
  { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
  { id: 'location', label: 'Location', type: 'text', placeholder: 'Enter your location' },
  { id: 'phoneNumber', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
];

const CHVRegistrationForm = () => {
  return (
    <div className='form-container bg-white flex flex-col items-center justify-center min-h-screen md:ml-60 ml-10'>
      <h1 className='md:text-5xl font-bold md:mb-6 mb-2  text-customBlue'>CHV Registration</h1>
      <form className='flex flex-col items-center'>
        {chvSignUpFields.map((field) => (
          <div className='mb-4' key={field.id}>
            <input
              type={field.type}
              id={field.id}
              className={`md:px-12 md:py-5 px-0 py-1 border border-customBlue item-start outline-2 outline-inset-2 md:w-80 text-xs`}
              placeholder={field.placeholder} style={{textAlign:'start'}}
            />
          </div>
        ))}
        <Link href='/CHVRecords'>
          <button
            type='submit'
            className='bg-customBlue text-white md:px-16 md:py-4 px-2 py-1 rounded-lg'
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CHVRegistrationForm;
