import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 md:w-1/2 mx-auto px-5"
      >
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Nombre completo"
            autoComplete="false"
            className={`border w-full px-4 py-3 placeholder:text-gray-800 ${
              errors.name
                ? "border-red-600 focus:border-red-600 focus:ring-red-500 outline-none placeholder:text-red-500"
                : "border-gray-300 focus:border-gray-600 ring-gray-100"
            }`}
            {...register("name", {
              required: "Ingresa tu nombre completo",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Correo electrónico"
            name="email"
            autoComplete="false"
            className={`border w-full px-4 py-3 placeholder:text-gray-800 ${
              errors.email
                ? "border-red-600 focus:border-red-600 focus:ring-red-500 outline-none placeholder:text-red-500"
                : "border-gray-300 focus:border-gray-600 ring-gray-100"
            }`}
            {...register("email", {
              required: "Ingresa tu correo electrónico",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Por favor, ingrese un correo valido.",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Mensaje"
            className={`border w-full px-4 py-3 placeholder:text-gray-800 outline-none h-36 ${
              errors.message
                ? "border-red-600 focus:border-red-600 focus:ring-red-500 outline-none placeholder:text-red-500"
                : "border-gray-300 focus:border-gray-600 ring-gray-100"
            }`}
            {...register("message", {
              required: "Ingresa tu mensaje",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#fba308] w-full py-3 font-semibold text-white transition-colors focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "ENVIAR"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
