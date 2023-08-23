import { useSession, signIn } from "next-auth/react";
import Navigation from '@/components/Navigation';

const Layout = ({ children }) => {
  const { data: session } = useSession()

  if (!session) {
    return (
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

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Navigation />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
