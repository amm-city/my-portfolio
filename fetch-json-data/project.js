export async function loadProjects() {
    const res = await fetch('../json-fake-db/projects.json');
    if(!res.ok) throw new Error("Response is not Ok");
    const data = await res.json();

    const projectsContainer = document.querySelector(".project-menu");
    const porjects = data.map(project => `<li class="card project-card">
                    <div class="preview-img"><img src="${project.img}" alt="npta-os"></div>
                    <ul class="p-info">
                        <li class="p-title">${project.name}</li>
                        <li class="p-lang">${project.languages}</li>
                        <li class="p-desc">
                            ${project.description}
                        </li>
                        <li class="p-link">
                            <div class="btn-group">
                                <a href="${project.link}" target="_blank" class="link btn btn-primary">${project.type}</a>
                                <a href="${project.git}" target="_blank" class="source-code btn btn-secondary">Source Code</a>
                            </div>
                        </li>
                    </ul>
                </li>`).join('');
    
    projectsContainer.innerHTML += porjects;
}