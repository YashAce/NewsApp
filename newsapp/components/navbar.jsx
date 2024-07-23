import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar({ user }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.reload();
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Weather & News App</h1>
          
        {user ? (
          <div className="flex items-center">
            <span className="text-white">Welcome, {user.user.name}!</span>
            <button onClick={handleLogout} className="text-white mx-2">Logout</button>
            <Link href="/zapier" legacyBehavior>
              <a className="mt-1 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  size="24"
                  name="navChatbots"
                  className="ml-2 mt-1"
                >
                  <path fill="#FFA500" d="M7 2H2v5h5V2ZM22 12H2v5h20v-5ZM22 12H7V7h5V2h10v10ZM7 22v-5h5l-5 5Z"></path>
                </svg>
              </a>
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/auth/login" legacyBehavior>
              <a className="text-white mx-2">Login</a>
            </Link>
            <Link href="/auth/register" legacyBehavior>
              <a className="text-white mx-2">Register</a>
            </Link>
            <Link href="/zapier" legacyBehavior>
              <a className="mt-1 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  size="24"
                  name="navChatbots"
                  className="ml-2 mt-1"
                >
                  <path fill="#FFA500" d="M7 2H2v5h5V2ZM22 12H2v5h20v-5ZM22 12H7V7h5V2h10v10ZM7 22v-5h5l-5 5Z"></path>
                </svg>
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
