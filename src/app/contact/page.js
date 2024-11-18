'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  // Replace "xdkodady" with your actual Formspree form ID
  const [state, handleSubmit] = useForm('xdkodady');

  if (state.succeeded) {
    return (
      <p className="w-full h-full flex justify-center items-center flex-col">
        <span className="md:text-2xl text-xl"> Thanks for your message!</span>{' '}
        <br /> We will get back to you as soon as possible.
      </p>
    );
  }

  return (
    <div className="mx-auto md:py-20 py-10 mw-full md:w-[90%] max-w-[120rem] scrollable-section text-background flex justify-center items-center h-[90vh]">
      <div className="bg-white p-6 rounded-md shadow-md w-[30rem] animate-slideUp">
        <h1 className="text-xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-background text-foreground px-4 py-2 rounded-md hover:bg-gray-600"
          >
            {state.submitting ? 'Submitting...' : 'Send Message'}
          </button>
        </form>
        {state?.errors?.length > 0 && (
          <p className="mt-4 text-sm text-center text-red-500">
            There was an error submitting the form.
          </p>
        )}
      </div>
    </div>
  );
}
