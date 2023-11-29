import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Input} from "../../components/forms/Input";
import {FormProvider, useForm} from "react-hook-form";
import {PrimaryButton} from "../../components/buttons/PrimaryButton";
import {useAuth} from "../../provider/AuthContext";

export function Signin() {
  const navigate = useNavigate();
  const {setToken} = useAuth();
  const methods = useForm();

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", {replace: true});
  };

  return (
    <div>
      <section className="flex h-screen items-center justify-center bg-white">
        <div className="container mb-4 flex max-w-md flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <FormProvider {...methods}>
            <form>
              <div className="mb-4">
                <Input
                  type="username"
                  id="username"
                  label="Username"
                  placeholder="Enter username"
                  autocomplete="username"
                />
              </div>
              <div className="mb-6">
                <Input
                  type="password"
                  id="password"
                  label="Password"
                  placeholder="Enter password"
                  autocomplete="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2">
                  <PrimaryButton
                    type="button"
                    id="login"
                    text="Sign In"
                    onClick={handleLogin}
                  />
                  <Link to={"/signup"}>
                    <button
                      className="hover:bg-blue-dark rounded bg-blue-600 px-4 py-2 font-bold text-white"
                      type="button">
                      Register
                    </button>
                  </Link>
                </div>
                <a
                  className="text-blue hover:text-blue-darker inline-block align-baseline text-sm font-bold"
                  href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </FormProvider>
        </div>
      </section>
    </div>
  );
}
