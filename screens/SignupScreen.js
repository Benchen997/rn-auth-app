import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const result = await createUser(email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
