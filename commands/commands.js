document.addEventListener('DOMContentLoaded', () => {
    const commands = [{
        name: "About",
        description: "About Pulse & Creator",
        category: "General"
    }, {
        name: "Invite",
        description: "Get an invite url for Pulse",
        category: "General"
    }, {
        name: "Userinfo",
        description: "Get information about a user",
        usage: "/userinfo (user)",
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
        name: "Cat",
        description: "Get a random image of a cat",
        category: "Fun"
    }, {
        name: "Dog",
        description: "Get a random image of a dog",
        category: "Fun"
    }, {
        name: "Lastfm login",
        description: "Connect your last.fm",
        usage: "/lastfm login",
        category: "Social"
      }, {
        name: "Lastfm token",
        description: "Connect the URL auth",
        usage: "/lastfm token [token here]",
        category: "Social"
    }, {
        name: "Lastfm nowplaying",
        description: "show your currently playing song from last.fm",
        usage: "/lastfm nowplaying",
        category: "Social"
    }, {
        name: "Lastfm recent",
        description: "view your recent tracks",
        usage: "/lastfm recent",
        category: "Social"
    }, {
        name: "Lastfm score",
        description: "view your Last.fm score and statisitcs or another user",
        usage: "/lastfm score (OPTIONAL) [user]",
        category: "Social"
    }, {
        name: "Roblox",
        description: "Get information about a Roblox profile",
        usage: "/roblox [username]",
        category: "Social"
    }, {
        name: "Rosnipe",
        description: "Snipe a Roblox user",
        usage: "/rosnipe [userid] [place-id]",
        category: "Social"
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
