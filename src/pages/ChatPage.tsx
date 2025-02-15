import { useSearchParams } from "react-router-dom";
import Chat from "../components/Chat";
import { v4 as uuid } from "uuid";

import "../styles/welcome.css";
import { useEffect, useState } from "react";
import {
  MsalAuthenticationTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import Loading from "../components/Loading";
import { callMsGraph } from "../services/graph";
import { graphConfig } from "../authConfig";
import { Profile } from "../types";

function ChatPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!id) {
      const newUuid = uuid();
      setSearchParams({ id: newUuid });
    }
  }, [id, setSearchParams]);

  useEffect(() => {
    const execute = async () => {
      const res = await callMsGraph(graphConfig.graphMeEndpoint);
      setProfile(res);
    };
    execute();
  }, []);

  if (!isAuthenticated && inProgress === InteractionStatus.None) {
    return <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <Loading />
    </MsalAuthenticationTemplate>;
  }

  if (!isAuthenticated || !id || !profile || inProgress === InteractionStatus.Login || inProgress === InteractionStatus.AcquireToken) {
    return <Loading />;
  }

  return (
    <Chat chatId={id} username={profile?.displayName} />
  );
}

export default ChatPage;
