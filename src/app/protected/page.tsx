'use client';

import { RedirectToSignIn } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';

const ProtectedPage = () => {
  const { isLoaded, userId, signOut } = useAuth();

  if (!isLoaded) return <div>Loading...</div>;

  if (!userId) {
    return <RedirectToSignIn />;
  }

  return (
    <div>
      <h1>Protected Content</h1>
      <p>Welcome, user {userId}!</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default ProtectedPage;
