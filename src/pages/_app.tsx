import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import { FaBroom, FaHome, FaQuestion } from "react-icons/fa";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
      <div className="flex-grow">
        <main id="main">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
