import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Container from "../components/atoms/Container";
import NavBar from "../components/sections/NavBar";
import { FaBroom, FaHome, FaQuestion } from "react-icons/fa";
import type { Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col-reverse h-screen max-h-screen text-gray-800">
          <nav className="py-2">
            <Container>
              <NavBar>
                <NavBar.Link
                  href="/"
                  label="Home"
                  icon={<FaHome role="presentation" />}
                />
                <NavBar.Link
                  href="/my-chores"
                  label="My chores"
                  icon={<FaBroom role="presentation" />}
                />
                <NavBar.Link
                  href="/about"
                  label="About"
                  icon={<FaQuestion role="presentation" />}
                />
              </NavBar>
            </Container>
          </nav>
          <main id="main" className="flex-grow bg-indigo-100">
            <Component {...pageProps} />
          </main>
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
