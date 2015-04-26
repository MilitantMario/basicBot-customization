(function () {
    //Link location of your fork so you don't have to modify so many things.
    var fork = "Yemasthui";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         },

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        },
        
        bot.commands.fortuneCommand = {
            command: 'fortune',
            rank: 'user',
            type: 'startsWith',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                            var crowd = API.getUsers();
                            var msg = chat.message;
                            var argument = msg.substring(cmd.length + 1);
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * basicBot.settings.forune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            API.sendChat(subChat(basicBot.chat.fortune, {name: chat.un, botname: basicBot.settings.botName, fortune: argument, response: basicBot.settings.fortune[randomFortune]}));
                     }
            }
        },
        
        

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "TheArgonBot",
        language: "english",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        cmdDeletion: true,
        chatLink: "https://rawgit.com/MilitantMario/basicBot/master/lang/en.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        fortune: [
" There is a true and sincere friendship between you and your friends.",
" You find beauty in ordinary things, do not lose this ability.",
" Ideas are like children; there are none so wonderful as your own.",
" It takes more than good memory to have good memories.",
" A thrilling time is in your immediate future.",
" Plan for many pleasures ahead.",
" The joyfulness of a man prolongeth his days.",
" Your everlasting patience will be rewarded sooner or later.",
" Make two grins grow where there was only a grouch before.",
" Something you lost will soon turn up.",
" Your heart is pure, and your mind clear, and your soul devout.",
" Excitement and intrigue follow you closely wherever you go!",
" A pleasant surprise is in store for you.",
" May life throw you a pleasant curve.",
" As the purse is emptied the heart is filled.",
" Be mischievous and you will not be lonesome.",
" You have a deep appreciation of the arts and music.",
" Your flair for the creative takes an important place in your life.",
" Your artistic talents win the approval and applause of others.",
" Pray for what you want, but work for the things you need.",
" Your many hidden talents will become obvious to those around you.",
" Don't forget, you are always on our minds.",
" Don't forget, you are always on our minds.",
" Your greatest fortune is the large number of friends you have.",
" A firm friendship will prove the foundation on your success in life.",
" Don't ask, don't say. Everything lies in silence.",
" Look for new outlets for your own creative abilities.",
" Be prepared to accept a wondrous opportunity in the days ahead!",
" Fame, riches and romance are yours for the asking.",
" Good luck is the result of good planning.",
" Good things are being said about you.",
" Smiling often can make you look and feel younger.",
" Someone is speaking well of you.",
" The time is right to make new friends.",
" You will inherit some money or a small piece of land.",
" Your life will be happy and peaceful.",
" A friend is a present you give yourself.",
" A member of your family will soon do something that will make you proud.",
" A quiet evening with friends is the best tonic for a long day.",
" A single kind word will keep one warm for years.",
" Anger begins with folly, and ends with regret.",
" Generosity and perfection are your everlasting goals.",
" Happy news is on its way to you.",
" He who laughs at himself never runs out of things to laugh at.",
" If your desires are not extravagant they will be granted.",
" Let there be magic in your smile and firmness in your handshake.",
" If you want the rainbow, you must to put up with the rain. D. Parton",
" Nature, time and patience are the three best physicians.",
" Strong and bitter words indicate a weak cause.",
" The beginning of wisdom is to desire it.",
" You will have a very pleasant experience.",
" You will inherit some money or a small piece of land.",
" You will live a long, happy life.",
" You will spend old age in comfort and material wealth.",
" You will step on the soil of many countries.",
" You will take a chance in something in the near future.",
" You will witness a special ceremony.",
" Your everlasting patience will be rewarded sooner or later.",
" Your great attention to detail is both a blessing and a curse.",
" Your heart is a place to draw true happiness.",
" Your ability to juggle many tasks will take you far.",
" A friend asks only for your time, not your money.",
" You will be invited to an exciting event."],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://www.facebook.com/theargonteam?ref=hl",
        youtubeLink: null,
        website: "http://argongaming.net/",
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);
