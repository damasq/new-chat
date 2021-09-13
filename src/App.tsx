import Calls from "./modules/calls";
import Chats from "./modules/chats";
import MainLayout from "./modules/layout";

const App = () => {
  return (
    <MainLayout>
      {/* <Chats></Chats> */}
      <Calls></Calls>
    </MainLayout>
  );
}

export default App;
