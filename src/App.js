import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
           height ="100vh"
           projectID ="6e531d08-bf28-49fd-ac26-68256911b647"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(ChatEngineProps) => <ChatFeed {...ChatEngineProps} />}
        />
    );
}

export default App;