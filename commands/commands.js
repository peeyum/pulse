document.addEventListener('DOMContentLoaded', () => {
    const commands = [{
        name: "About",
        description: "About Heist",
        category: "General"
    }, {
        name: "Invite",
        description: "Get an invite url for Heist",
        category: "General"
    }, {
        name: "Discord",
        description: "Join Heist's Discord server",
        category: "General"
    }, {
        name: "Donate",
        description: "Become a Heist supporter (thx)",
        category: "General"
    }, {
        name: "Discordstatus",
        description: "See Discord's current incidents",
        category: "General"
    }, {
        name: "AskHeist",
        description: "Ask Heist a question or about an image",
        usage: "/askheist [prompt]",
        category: "Utility"
    }, {
        name: "Userinfo",
        description: "Get information about a user",
        usage: "/userinfo (user)",
        category: "Utility"
    }, {
        name: "Guilds (DONOR)",
        description: "Get the mutual servers of a user",
        usage: "/guilds (user)",
        category: "Utility"
    }, {
        name: "Avatar",
        description: "Get someone's avatar",
        usage: "/avatar (user)",
        category: "Utility"
    }, {
        name: "Banner",
        description: "Get someone's banner",
        usage: "/banner (user)",
        category: "Utility"
    }, {
        name: "Reviewdb",
        description: "Get someone's reviews",
        usage: "/reviewdb (user)",
        category: "Utility"
    }, {
        name: "Say",
        description: "Make the bot say something",
        usage: "/say [text] (freaky: True/False)",
        category: "Utility"
    }, {
        name: "Shazam",
        description: "Recognize a song",
        usage: "/shazam [audio]",
        category: "Utility"
    }, {
        name: "Tts",
        description: "Text to speech",
        usage: "/tts [text] (rap/sing)",
        category: "Utility"
    }, {
        name: "Song",
        description: "Download and send a song",
        usage: "/song [name/url]",
        category: "Utility"
    }, {
        name: "Embed",
        description: "Make a custom embed",
        usage: "/embedusage",
        category: "Utility"
    }, {
        name: "Emoji",
        description: "Get information about a custom emoji",
        usage: "/emoji [customemoji]",
        category: "Utility"
    }, {
        name: "Shorten",
        description: "Shorten an URL",
        usage: "/shorten [url] (domain)",
        category: "Utility"
    }, {
        name: "Translate",
        description: "Translate text to a different language",
        usage: "/translate [to] [text]",
        category: "Utility"
    }, {
        name: "Twitterpost",
        description: "Download a Twitter post",
        usage: "/twitterpost [url]",
        category: "Social"
    }, {
        name: "Tiktokfyp",
        description: "Get a random trending video from TikTok",
        usage: "/tiktokfyp",
        category: "Social"
    }, {
        name: "Tiktokpost",
        description: "Download a TikTok post",
        usage: "/tiktokpost [url]",
        category: "Social"
    }, {
        name: "Snapchat",
        description: "Get info about someone's Snapchat",
        usage: "/snapchat [username]",
        category: "Social"
    }, {
        name: "Instagram",
        description: "Get info about someone's Instagram",
        usage: "/instagram [username]",
        category: "Social"
    }, {
        name: "Blur",
        description: "Blur an image",
        usage: "/blur [attachment]",
        category: "Utility"
    }, {
        name: "Wikipedia",
        description: "Search up something on Wiki",
        usage: "/wikipedia [search]",
        category: "Utility"
    }, {
        name: "Screenshot (DONOR)",
        description: "Screenshot a web page",
        usage: "/screenshot [url]",
        category: "Utility"
    }, {
        name: "Snipe (SERVERS)",
        description: "Snipe a deleted message",
        usage: "/snipe (number)",
        category: "Utility"
    }, {
        name: "MCserver",
        description: "Get information about a Minecraft server",
        usage: "/mcserver [server-ip]",
        category: "Utility"
    }, {
        name: "Animal",
        description: "Sends a random animal",
        usage: "/animal [type]",
        category: "Fun"
    }, {
        name: "Asciify",
        description: "Transform your text into ASCII art",
        usage: "/asciify [text] (font)",
        category: "Fun"
    }, {
        name: "8ball",
        description: "Ask it anything and get a response",
        usage: "/ball [question]",
        category: "Fun"
    }, {
        name: "Capybara",
        description: "Get a random image of a capybara",
        category: "Fun"
    }, {
        name: "Cat",
        description: "Get a random image of a cat",
        category: "Fun"
    }, {
        name: "Dog",
        description: "Get a random image of a dog",
        category: "Fun"
    }, {
        name: "Hotcalc",
        description: "Rate how hot someone is",
        usage: "/hotcalc (user)",
        category: "Fun"
    }, {
        name: "Gayrate",
        description: "Rate someone's levels of pride",
        usage: "/gayrate (user)",
        category: "Fun"
    }, {
        name: "Rate",
        description: "Rate something",
        usage: "/rate (thing)",
        category: "Fun"
    }, {
        name: "Urban",
        description: "Search any definition in the Urban Dictionary",
        usage: "/urban [search]",
        category: "Fun"
    }, {
        name: "Nitro",
        description: "Rickroll someone using fake nitro",
        category: "Fun"
    }, {
        name: "Reverse",
        description: "Reverse text",
        usage: "/reverse [text]",
        category: "Fun"
    }, {
        name: "Tweet",
        description: "Generate a custom tweet",
        usage: "/tweet [username] [displayname] [text]",
        category: "Fun"
    }, {
        name: "Insult",
        description: "Generates a random insult",
        category: "Fun"
    }, {
        name: "Lyrics",
        description: "Get lyrics to a song",
        usage: "/lyrics [song] (artist)",
        category: "Fun"
    }, {
        name: "Password",
        description: "Generate a random password",
        usage: "/password (nbytes)",
        category: "Fun"
    }, {
        name: "Randomserver (DONOR)",
        description: "Self explanatory",
        usage: "/randomserver (software) (title)",
        category: "Fun"
    }, {
        name: "Setlastfm",
        description: "Connect your last.fm",
        usage: "/setlastfm [username]",
        category: "Social"
    }, {
        name: "Lastfm",
        description: "Shows your last.fm activity",
        usage: "/lastfm (username)",
        category: "Social"
    }, {
        name: "Lastfmartist",
        description: "Shows any artist using last.fm",
        usage: "/lastfmartist [artist]",
        category: "Social"
    }, {
        name: "Lastfmtop",
        description: "Get your last.fm top stats.",
        usage: "/lastfmtop [albums/artists/tracks] (username) (period) (collage)",
        category: "Social"
    }, {
        name: "Roblox",
        description: "Get information about a Roblox profile",
        usage: "/roblox [username]",
        category: "Social"
    }, {
        name: "Rosnipe (DONOR)",
        description: "Snipe a Roblox user",
        usage: "/rosnipe [username] [place-id/game-link]",
        category: "Social"
    }, {
        name: "Rosteal",
        description: "Grab an asset from Roblox clothing",
        usage: "/rosteal [clothing-id/clothing-url]",
        category: "Social"
    }, {
        name: "Roblox2discord",
        description: "Find a Roblox user's Discord",
        usage: "/roblox2discord [username]",
        category: "Social"
    }, {
        name: "Discord2roblox",
        description: "Find a Discord user's Roblox",
        usage: "/discord2roblox [username]",
        category: "Social"
    }, {
        name: "Gunslol",
        description: "Lookup a guns.lol bio (try cosmin)",
        usage: "/gunslol [username]",
        category: "Social"
    }, {
        name: "Github",
        description: "Lookup a GitHub profile",
        usage: "/github [username]",
        category: "Social"
    }, {
        name: "Hug",
        description: "Hug your homies",
        usage: "/hug (user)",
        category: "Reaction"
    }, {
        name: "Slap",
        description: "Slap your e-opps",
        usage: "/slap (user)",
        category: "Reaction"
    }, {
        name: "Kiss",
        description: "Kiss your Discord e-kitten",
        usage: "/kiss (user)",
        category: "Reaction"
    }, {
        name: "Wallet",
        description: "See your current balance",
        usage: "/wallet (user)",
        category: "Economy"
    }, {
        name: "Daily",
        description: "Claim your daily economy rewards",
        usage: "/daily",
        category: "Economy"
    }, {
        name: "Work",
        description: "Work and earn coins",
        usage: "/work",
        category: "Economy"
    }, {
        name: "Gamble",
        description: "Gamble with a 50% chance to win or lose",
        usage: "/gamble [amount]",
        category: "Economy"
    }, {
        name: "Slot",
        description: "Run the slot machine",
        usage: "/slot [amount]",
        category: "Economy"
    }, {
        name: "Towers",
        description: "Bet on a game of Towers",
        usage: "/towers [amount]",
        category: "Economy"
    }, {
        name: "Blackjack",
        description: "Play Blackjack with a friend",
        usage: "/blackjack",
        category: "Games"
    }, {
        name: "TicTacToe",
        description: "Play TicTacToe with a friend",
        usage: "/tictactoe",
        category: "Games"
    }, {
        name: "Snake",
        description: "Play Snake game",
        usage: "/snake",
        category: "Games"
    }, ];
    commands.sort( (a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        const isALetter = /^[a-zA-Z]/.test(nameA);
        const isBLetter = /^[a-zA-Z]/.test(nameB);
        if (isALetter && isBLetter) {
            return nameA.localeCompare(nameB);
        } else if (!isALetter && !isBLetter) {
            return nameA.localeCompare(nameB);
        } else if (isALetter && !isBLetter) {
            return -1;
        } else {
            return 1;
        }
    }
    );
    const commandsContainer = document.getElementById('commands-container');
    const searchInput = document.getElementById('search-input');
    const tabButtons = document.querySelectorAll('.tab-button');
    function displayCommands(filteredCommands) {
        commandsContainer.innerHTML = '';
        filteredCommands.forEach(command => {
            const card = document.createElement('div');
            card.classList.add('command-card');
            card.innerHTML = `
            <h2>${command.name}</h2>
            <p>${command.description}</p>
            ${command.usage ? `<p><strong>usage:</strong> ${command.usage}</p>` : ''}
        `;
            commandsContainer.appendChild(card);
        }
        );
    }
    function filterCommands() {
        const searchText = searchInput.value.toLowerCase();
        const activeTab = document.querySelector('.tab-button.active').dataset.tab;
        const filteredCommands = commands.filter(command => {
            const matchesSearch = command.name.toLowerCase().includes(searchText) || command.description.toLowerCase().includes(searchText);
            const matchesTab = activeTab === 'all' || command.category === activeTab;
            return matchesSearch && matchesTab;
        }
        );
        displayCommands(filteredCommands);
    }
    searchInput.addEventListener('input', filterCommands);
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterCommands();
        }
        );
    }
    );
    displayCommands(commands);
}
);
