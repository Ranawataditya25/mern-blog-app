import { Button, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-black text-4xl">
            <span className="text-blue-500 px-2 py-1">Aditya's</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project, you can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="username">Your username</label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="email">Your email</label>
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="password">Your password</label>
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
