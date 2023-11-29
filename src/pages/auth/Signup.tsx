import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {Input} from "../../components/forms/Input";
import {Link} from "react-router-dom";
import {PrimaryButton} from "../../components/buttons/PrimaryButton";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/validations";

interface IRegisrer {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export function Signup() {
  const methods = useForm<IRegisrer>();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    methods.reset();
  });

  const validateConfirmPassword = (value: string) => {
    const passwordValue = methods.getValues("password");
    if (value === passwordValue) {
      return true;
    } else {
      return "passwords do not match";
    }
  };

  return (
    <div>
      <section className="flex h-screen items-center justify-center bg-white">
        <div className="container mb-4 flex max-w-md flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <h1 className="mb-3 text-2xl font-bold">Register</h1>
          <FormProvider {...methods}>
            <form onSubmit={e => e.preventDefault()} noValidate>
              <Input
                type="username"
                id="username"
                label="Username"
                placeholder="Enter username"
                className="mb-2"
                autocomplete="username"
                validation={validateUsername()}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                placeholder="Enter password"
                className="mb-2"
                autocomplete="new-password"
                validation={validatePassword()}
              />
              <Input
                type="password"
                id="confirmpassword"
                label="Confirm Password"
                placeholder="Enter confirm password"
                className="mb-2"
                autocomplete="new-password"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                  validate: validateConfirmPassword,
                }}
              />
              <Input
                type="email"
                id="email"
                label="Email"
                placeholder="Enter username"
                className="mb-6"
                autocomplete="email"
                validation={validateEmail()}
              />
              <PrimaryButton
                type="submit"
                id="submit"
                text="Submit"
                onClick={onSubmit}
                className="mx-2"
              />
              <Link to="/login">
                <button className="max-w-sm border-2 p-2">Cancel</button>
              </Link>
            </form>
          </FormProvider>
        </div>
      </section>
    </div>
  );
}
