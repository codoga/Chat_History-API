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
```json
{
  "user_id": "user123",
  "chat_history": [
    "Merhaba, ben Doğa.",
    "Yardımcı olabilir misin?"
  ]
}
```
Successful Response:
 HTTP Status Code: 200
### Response Example:
```json
{
  "status": "success",
  "message": "Chat logged successfully."
}
```
Error Responses:
 400 Bad Request:
  when user_id is missing.
  if chat_history is not an array.
### Response Example:
```
{
  "status": "error",
  "message": "Invalid input. user_id and chat_history are required."
}
```
# Executing Tests
The tests for the API were written and executed using the Jest framework. Here is an explanation of each test scenario and its purpose:

### log chat successfully with valid data:
This test verifies that when a valid user_id and chat_history are provided in a POST request, the API successfully logs the chat and returns a 200 status code with a success message.

### return 400 if user_id is missing:
This test checks if the API returns a 400 (bad request) status code along with an appropriate error message when the user_id is missing. The error message will be: "Invalid input. user_id and chat_history are required."

### return 400 if chat_history is not an array:
This test ensures that if the chat_history is not an array, the API responds with a 400 code and this error message: "Invalid input. chat_history must be an array."

