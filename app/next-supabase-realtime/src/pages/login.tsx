import Head from "next/head";
// import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export default function Login({ supabase }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const session = useSession();

  useEffect(() => {
    setLoggedIn(Boolean(session));
  }, [session]);

  return (
    <>
      <Head>
        <title>Supabase Realtime Chat</title>
        <meta name="description" content="login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article className="mlb-xl center stack">
        <h1 className="text-4">Login</h1>
        {/* <Auth supabaseClient={supabaseClient} /> */}
        {loggedIn ? <span>Logged In</span> : <Auth />}
      </article>
    </>
  );
}

function Auth() {
  let supabaseClient = useSupabaseClient();
  const signInWithGithub = async () => {
    supabaseClient.auth.signInWithOAuth({
      provider: "github",
    });
  };
  return (
    <article>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={signInWithGithub}>Sign in with Github</button>
      </form>
    </article>
  );
}
