import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  let user = useUser();
  return (
    <>
      <Head>
        <title>Supabase Realtime Chat</title>
        <meta name="description" content="Realtime chat with supabase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <article className="mlb-xl center stack">
          <h1 className="text-4">Supabase Realtime Chat</h1>
          <p className="text-2">
            This is a simple chat app built with supabase and next.js
          </p>
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
          <pre>{JSON.stringify(user, null, 4)}</pre>
        </article>
      </main>
    </>
  );
}
