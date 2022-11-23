const conversation = [
  {
    id: "welcome",
    response: {
      messages: [
        "Hi, welcome to chatbot.",
        "How can I help you?"
      ],
      buttons: [
        {
          state: "state",
          display: "What is state machine?"
        },
        {
          state: "howState",
          display: "How does state machine work?"
        },
        {
            state: "Exit",
            display: "I don't care. Please close the chat box."
        }
      ]
    }
  },
  {
    id: "Unknown",
    response: {
      messages: ["Sorry, I didn't understand what you are trying to say."],
      buttons: [
        {
          state: "askAgain",
          display: "Go back to previous menu."
        }
      ]
    }
  }
];
const bot = new Chatbot(conversation);
const timeDelay = 300;
