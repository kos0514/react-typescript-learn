import Title from "@/components/atom/Title.tsx";
import Logo from "@/components/atom/Logo.tsx";
import Message from "@/components/atom/Message.tsx";
import StudySelector from "@/components/organisms/StudySelector.tsx";

function App() {
  return (
    <>
      <Title title="Vite + React" />
      <Logo />
      <StudySelector />
      <Message />
    </>
  );
}

export default App;
