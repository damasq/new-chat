import Calls from "./modules/calls";
import Chats from "./modules/chats";
import MainLayout from "./modules/layout";
import Settings from "./modules/settings";

const App = () => {
  return (
    <MainLayout>
      {/* <Chats></Chats> */}
      {/* <Calls></Calls> */}
      <Settings></Settings>
    </MainLayout>
  );
}

export default App;
