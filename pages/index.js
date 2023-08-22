import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()

  return session ? (
    <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  ) : (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        Not signed in <br/>
        <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-md">
          Login with Google
        </button>
      </div>
    </div>
  );
}
