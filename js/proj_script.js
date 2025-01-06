const projects = [
    {
        img: "/img/league-page.png",
        title: "ScoreSpot",
        link: "https://github.com/vishalvunnam1/ScoreSpot",
        video: "https://drive.google.com/file/d/1RUWH5i3TjjXcMa7Osb9b2u6XxYxmZhZc/view?usp=sharing",
        description: "ScoreSpot is your all-in-one destination for soccer stats, live game coverage, and team involevement."
    },
    {
        img: "/img/IMG_4374.jpg",
        title: "MIDI Drum Kit",
        link: "https://github.com/vishalvunnam1/MIDIDrumKit",
        video: "https://drive.google.com/file/d/1UEt-WDiX_0FNeBJO6ARFE_o8q73-7gdB/view?usp=sharing",
        description: "Midi drum kit created with Arduino io and processing; Built using piezo sensors, old cd's and a wooden encasing. "
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.marginBottom = '20px';

        const img = document.createElement('img');
        img.src = project.img;
        img.alt = project.title;
        img.style.width = "300px";
        img.style.marginBottom = "10px";

        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.justifyContent = 'space-between';
        titleContainer.style.width = '100%';
        titleContainer.style.alignItems = 'center';

        const title = document.createElement('h3');
        title.textContent = project.title;
        title.style.margin = "0px 0";
        title.style.fontSize = "20px";
        title.style.fontWeight = "bold";

        const links = document.createElement('div');
        links.style.display = 'flex';
        links.style.gap = '10px';

        const githubLink = document.createElement('a');
        githubLink.href = project.link;
        githubLink.textContent = "GitHub";
        githubLink.target = "_blank";

        const videoLink = document.createElement('a');
        videoLink.href = project.video;
        videoLink.textContent = "Video";
        videoLink.target = "_blank";

        links.appendChild(githubLink);
        links.appendChild(videoLink);

        titleContainer.appendChild(title);
        titleContainer.appendChild(links);

        const description = document.createElement('p');
        description.textContent = project.description;
        description.style.textAlign = 'center';
        description.style.margin = "10px 0";

        card.appendChild(img);
        card.appendChild(titleContainer);
        card.appendChild(description);

        container.appendChild(card);
    });
}

renderProjects();
