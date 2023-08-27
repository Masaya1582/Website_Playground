const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");

sendButton.addEventListener("click", function() {
  const messageText = messageInput.value.trim();
  if (messageText !== "") {
    addMessage("You", messageText);
    messageInput.value = "";
  }
});

function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}

messageInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendButton.click();
  }
});
