import type { NextPage } from "next";
import Container from "../components/Container";
import { FaBroom, FaPlus } from "react-icons/fa";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chorez - Home</title>
      </Head>
      <section id="welcome" className="bg-blue-100 py-16">
        <Container>
          <h1 className="text-4xl flex items-center gap-4">
            <span>
              <FaBroom role="presentation" />
            </span>
            <span>Welcome to Chorez</span>
          </h1>
        </Container>
      </section>
      <section id="new-chore-form">
        <Container>
          <form className="flex flex-col py-6 gap-4">
            <div className="flex flex-col gap-2">
              <label id="chore-name-label">Chore name:</label>
              <input
                aria-labelledby="chore-name-label"
                className="border border-gray-400 rounded py-2 px-3"
                placeholder="e.g. Do the dishes"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label id="chore-desc-label">Chore description:</label>
              <input
                aria-labelledby="chore-desc-label"
                className="border border-gray-400 rounded py-2 px-3"
                placeholder="e.g."
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label id="chore-frequency-label">Frequency:</label>
              <select className="border border-gray-400 rounded py-2 px-3 pr-10">
                <option>Once</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>
                  Long long long long long long long long long long long long
                  long long
                </option>
              </select>
            </div>
            <div className="text-right">
              <button
                className="inline-flex items-center gap-2 py-2 px-3 bg-green-700 rounded text-white font-semibold cursor-pointer hover:bg-green-800 transition-colors"
                type="submit"
              >
                <FaPlus role="presentation" />
                Add new chore
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Home;
