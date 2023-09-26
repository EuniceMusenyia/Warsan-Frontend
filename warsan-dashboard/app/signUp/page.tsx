import React from 'react';
import Link from 'next/link';
import FormAtom from '../atoms/Form';

const signUpFields = [
  { id: 'firstName', label: 'First Name', type: 'text' },
  { id: 'lastName', label: 'Last Name', type: 'text' },
  { id: 'phoneNumber', label: 'Phone Number', type: 'tel', pattern: '[0-9]*' },
  { id: 'username', label: 'Username', type: 'text' },
];

const SignUpPage: React.FunctionComponent = () => {
  return (
    <div className='font-poppins'>
      <FormAtom title="Create a new account" fields={signUpFields} buttonText="Register" isSignUp={true}>
        <div className="text-3xl md:mt-8 mt-4">
          <p className="md:mb-8 text-base md:text-4xl md:ml-32 ml-6 mb-8 font-amaranth">Sign up to start a remarkable journey <span className="md:ml-60"> with us</span></p>
          <p className="md:ml-60 ml-12 text-base md:text-2xl md:mt-8 mb-2  items-center font-bold ">Already have an account? <Link href="/signIn"><span className="md:text-xl text-base  text-customPurple ">Log in</span></Link></p>
        </div>
      </FormAtom>
    </div>
  );
};

export default SignUpPage;