import { Route } from "react-router";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Route path="/" component={PostListContainer} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
