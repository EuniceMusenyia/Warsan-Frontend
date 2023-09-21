import React from "react";
interface FormAtomProps{
  title: string
  fields: object[]
  buttonText: string
  children: React.ReactNode
}

const FormAtom = ({ title, fields, buttonText, children }:FormAtomProps) => {
  const commonFields = [
    { id: "username", label: "Username", type: "text" },
    { id: "password", label: "Password", type: "password" },
  ];

  const allFields = [...commonFields, ...fields];

  return (
    <div className="flex md:flex-row flex-col h-screen font-poppins">
      <div className="form-container bg-customBlue text-white flex flex-col items-start w-full h-1/22 md:w-1/2">
        <div className="flex items-center 2">
          <img src="/Rajo-logo.png" alt="Logo" className="md:w-24 md:h-18 w-10 h:8 ml-8 md:ml-16 mr-2 mt-6 " />
          <span className="md:text-5xl text-2xl md:ml-1 mt-6 font-semibold">Rajo</span>
        </div>

        <div>
          <p className="md:text-5xl text-base font-bold mb-2 ml-12 md:ml-32 md:mt-12 mt-4  ">
            Welcome to Rajo Dashboard
          </p>
        </div>
        <div className="mt-">
          <img
            src="/signup-image.svg"
            alt="Image"
            className="object-cover md:w-full md:h-124 w-1/3 ml-28"
          />
        </div>
        {children}
      </div>

      <div className="form-container bg-white flex flex-col items-center justify-center md:w-2/3 w-full">
        <h1 className="md:text-5xl text-xl text-customBlue font-semibold md:mb-16 mb-4 mt-4">
          {title}
        </h1>
        <form className="flex flex-col items-center">
          {allFields.map((field) => (
            <div className="mb-8">
              <input
                type={field.type}
                id={field.id}
                className="md:p-3  md:px-32 px-12 p-1 border border-customBlue rounded w-240 text-center font-poppins"
                placeholder={`Enter ${field.label}`}
              />
            </div>
          ))}

          <button className=" text-xl md:mt-2 mb-6 bg-customBlue text-white px-20 py-2 rounded">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAtom;
