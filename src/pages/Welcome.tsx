import { useSearchParams } from "react-router-dom";
import Chat from "../components/Chat";
import { v4 as uuid } from 'uuid';

import "../styles/welcome.css";
import { useEffect } from "react";

function Welcome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) {
      const newUuid = uuid()
      setSearchParams({ id: newUuid });
    }
  }, [id, setSearchParams]);

  if (!id) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Welcome! Start chatting.</h1>
      <Chat chatId={id} username={'Derek'} />
    </>
  );
}

export default Welcome;
