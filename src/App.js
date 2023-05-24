import { Header } from "./components/Header";
import { TextEditor } from "./components/TextEditor";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <Layout>
      <Header />
      <main>
        <TextEditor />
      </main>
    </Layout>
  );
};
