// pages/index.js
import Header from 'RONEF/components/Header';
import Sidebar from 'RONEF/components/Sidebar';
import ChatWindow from 'RONEF/components/ChatWindow';
import MessageInput from 'RONEF/components/MessageInput';

const Home = () => {
  return (
    <div id="app">
      <Header />
      <Sidebar />
      <main>
        <ChatWindow />
        <MessageInput />
      </main>
    </div>
  );
};

export default Home;
