import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { LanguagesPage } from "./components/Languages.page";
import { GreetingsPage } from "./components/Greetings.page";
import { InfiniteQueryPage } from "./components/InfiniteQuery.page";
import { MutationPage } from "./components/Mutation.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/programming-languages">Programming Languages</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/rq-super-heroes/:id" element={<RQSuperHeroPage />} />
            <Route path="/languages" element={<LanguagesPage />} />
            <Route path="/languages/:id" element={<GreetingsPage />} />
            <Route
              path="/programming-languages"
              element={<InfiniteQueryPage />}
            />
            <Route
              path="/programming-languages/add"
              element={<MutationPage />}
            />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
