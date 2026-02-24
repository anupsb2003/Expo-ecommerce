
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignInButton mode='model'/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default App