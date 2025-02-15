import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { AuthenticationResult, InteractionStatus } from "@azure/msal-browser";
import Loading from "../components/Loading";

function LoginPage() {
  const navigate = useNavigate();
  const { instance, inProgress } = useMsal();

  useEffect(() => {
    if (inProgress !== InteractionStatus.None) {
      return;
    }

    instance
      .handleRedirectPromise()
      .then((response: AuthenticationResult | null) => {
        if (response && response.account) {
          navigate("/chat", { replace: true });
        }
      });

    const account = instance.getActiveAccount();
    if (account) {
      navigate("/chat", { replace: true });
    } else {
      instance.loginRedirect();
    }
  }, [instance, inProgress, navigate]);

  return <Loading />;
}

export default LoginPage;
