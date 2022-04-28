
import MessageForm from './component/MessageForm'
import Messages from './component/Messages';
import MessageContent from './component/MessageContent'

import classes from './styles/app.module.css'
import { MessageProvider } from './MessageContext';

function App() {
  return (
    <div className="App container">
      <MessageProvider>
        <div>
          <h1 style={{textAlign: 'center',marginBottom: '1rem'}}>Encryption System</h1>
          <div className={`${classes.body} `}>
            <MessageForm />
            <Messages />
            <MessageContent />
          </div>
        </div>
      </MessageProvider>
    </div>
  );
}

export default App;
