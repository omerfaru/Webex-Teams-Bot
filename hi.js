module.exports = function (controller) {

    controller.hears(["hi","hello","Hello","Hi"], "direct_message,direct_mention", function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask("What is your name?",[
                {
                    pattern:".*?",
                    callback: function (response, convo) {
                        convo.gotoThread("success");
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response');
                    }
                }
            ], { key: "answer" });

            // Success thread
            convo.addMessage(
                " Nice name ",
                "success");
        });
    });
};
