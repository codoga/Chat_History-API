# Chat_History-API
 A Node.js based API that allows users to securely save and manage their chat history.
# Clone the Repository
git clone https://github.com/codoga/Chat_History-API.git
# Installation
cd Part 1 Node.js API Testing and Bug Fixing
npm install
npm start
# API Endpoints
POST /log-chat
Description: Logs the user's chat history.

### Required Parameters:
user_id (string): User ID.
chat_history (array): User's chat history.

### Sample Request:
```js
{
  "user_id": "user123",
  "chat_history": [
    "Merhaba, ben Doğa.",
    "Yardımcı olabilir misin?"
  ]
}
