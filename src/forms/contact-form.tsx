"use client";
import ContactFormAction from "@/actions/contact-form-action";
import { useFormState } from "react-dom";

export default function ContactForm() {
  const [state, action] = useFormState(ContactFormAction, {
    message: "",
  } as any);

  console.log(state?.message);
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="form-control w-full max-w-xs">
          <input
            className={`${state?.message?.name ? "input-error" : null} input input-bordered input-md`}
            id="name"
            name="name"
            placeholder="Name"
          />
          {state?.message?.name && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                {state?.message?.name}
              </span>
            </div>
          )}
        </label>
        <input
          className="input input-bordered input-md"
          id="company"
          name="company"
          placeholder="company"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="form-control w-full max-w-xs">
          <input
            className={`${state?.message?.email ? "input-error" : null} input input-bordered input-md`}
            id="email"
            name="email"
            placeholder="Email"
          />
          {state?.message?.email && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                {state?.message?.email}
              </span>
            </div>
          )}
        </label>
        <input
          className="input input-bordered input-md"
          id="phone"
          name="phone"
          placeholder="Phone Number"
        />
      </div>
      <textarea
        rows={8}
        id="message"
        name="message"
        className={`${state?.message?.message ? "textarea-error" : null} textarea textarea-bordered textarea-md`}
        placeholder="How Can I Help You?"
      />
      <span className="label-text-alt text-red-500">
        {state?.message?.message}
      </span>
      <div className="text-lg font-bold text-red-500">
        {state?.message?.form}
      </div>

      <div>
        <button className="px-6 py-2 border-2 uppercase bg-gray-900 text-white">
          Message Me
        </button>
      </div>
    </form>
  );
}
