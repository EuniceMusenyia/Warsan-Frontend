import React from 'react';
import Link from 'next/link';
import FormAtom from '../atoms/Form';

const SignInPage = () => {
  const signInFields = [
    { id: "username", label: "Username", type: "text" },
  ];

  return (
    <div className='font-poppins'>
      <FormAtom title='Log in to your account ' fields={signInFields} buttonText='Log In'>
        <div className='text-3xl md:mt-4 mt:2 '>
          <p className='md:mb-8 text-base md:text-4xl md:ml-32 ml-1 mb-2 font-poppins '>Sign in to continue your remarkable <span className='md:ml-48'> journey with us</span></p>
          <p className='md:ml-64 ml-12 md:text-2xl text-base font-bold font-poppins '>Do not have an account? <Link href="/signUp"><span className='md:text-xl text-base text-customPurple '> Register</span></Link></p>
        </div>
      </FormAtom>
    </div>
  );
};

export default SignInPage;
