const { WebClient } = require('@slack/web-api');

const web = new WebClient("xoxb-4064239666195-4477907862673-B8lTeyV69kTVNHI0wDOj6Rw3");
// The current date
const currentTime = new Date().toTimeString();
const conversationId = '#general';
// (async () => {
//
//     try {
//         // Use the `chat.postMessage` method to send a message from this app
//         await web.chat.postMessage({
//             channel: '#general',
//             text: `hello world`,
//         });
//         console.log('Message posted!');
//     } catch (error) {
//         console.log(error);
//     }
//
// })();



(async () => {

    // Post a message to the channel, and await the result.
    // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
    const result = await web.chat.postMessage({
        text: 'Hello world!',
        channel: conversationId,
    });
    // The result contains an identifier for the message, `ts`.
    console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
})();
