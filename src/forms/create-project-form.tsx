"use client";
import { useFormState } from "react-dom";
import { AddProjectAction } from "@/actions/project-actions";
export default function CreateProjectForm() {
  const [state, action] = useFormState(AddProjectAction, {
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
          id="github_url"
          name="github_url"
          placeholder="Github Url"
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
          id="project_url"
          name="project_url"
          placeholder="Project_url"
        />
        {state?.message?.name && (
          <div className="label">
            <span className="label-text-alt text-red-500">
              {state?.message?.serverTitle}
            </span>
          </div>
        )}
      </label>
      <button>add project</button>
    </form>
  );
}
