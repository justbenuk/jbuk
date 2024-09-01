import { LoginUser } from "@/actions/auth-actions";
export default function LoginPage() {
  return (
    <div className="py-24">
      <div className="max-w-lg mx-auto border rounded-xl p-6 flex flex-col items-center justify-center">
        <h1 className="text-lg uppercase font-bold italic">
          Access Just Ben UK
        </h1>
        <p></p>
        <form action={LoginUser}>
          <button
            type="submit"
            className="text-sm md:text-lg bg-blue-500 border border-blue-500 rounded px-8 py-4 text-white font-bold uppercase"
          >
            Sign In With Google
          </button>
        </form>
      </div>
    </div>
  );
}
