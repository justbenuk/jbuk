"use client";
import { useFormState } from "react-dom";
import { AddServerAction } from "@/actions/server-actions";
export default function CreateServerForm() {
  const [state, action] = useFormState(AddServerAction, {
    message: "",
  } as any);
  return (
    <form action={action}>
      <label className="form-control w-full max-w-xs">
        <input
          className={`${state?.message?.serverTitle ? "input-error" : null} input input-bordered input-md`}
          id="userId"
          name="userId"
          placeholder="User ID"
        />
        {state?.message?.name && (
          <div className="label">
            <span className="label-text-alt text-red-500">
              {state?.message?.serverTitle}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <input
          className={`${state?.message?.serverTitle ? "input-error" : null} input input-bordered input-md`}
          id="projectId"
          name="projectId"
          placeholder="Project Id"
        />
        {state?.message?.name && (
          <div className="label">
            <span className="label-text-alt text-red-500">
              {state?.message?.serverTitle}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <input
          className={`${state?.message?.serverTitle ? "input-error" : null} input input-bordered input-md`}
          id="title"
          name="title"
          placeholder="Server Identity"
        />
        {state?.message?.name && (
          <div className="label">
            <span className="label-text-alt text-red-500">
              {state?.message?.serverTitle}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <input
          className={`${state?.message?.serverTitle ? "input-error" : null} input input-bordered input-md`}
          id="supplier_name"
          name="supplier_name"
          placeholder="Supplier Name"
        />
        {state?.message?.name && (
          <div className="label">
            <span className="label-text-alt text-red-500">
              {state?.message?.serverTitle}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <input
          className={`${state?.message?.serverTitle ? "input-error" : null} input input-bordered input-md`}
          id="supplier_url"
          name="suppleer_url"
          placeholder="Supplier Url"
        />
        {state?.message?.name && (
          <div className="label">
            <span className="label-text-alt text-red-500">
              {state?.message?.serverTitle}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <input
          className={`${state?.message?.serverTitle ? "input-error" : null} input input-bordered input-md`}
          id="ip_address"
          name="ip_address"
          placeholder="Servevr Ip Address"
        />
        {state?.message?.name && (
          <div className="label">
            <span className="label-text-alt text-red-500">
              {state?.message?.serverTitle}
            </span>
          </div>
        )}
      </label>

      <button>add server</button>
    </form>
  );
}
