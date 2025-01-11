import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

export const Auth = () => {
  return (
    <div className="flex items-center">
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <div className="self-center">
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
};
