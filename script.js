document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const experiences = [
        {
            title: "AI/ML Engineer - Stage 1",
            date: "April 2026",
            location: "SLIIT",
            description: "Successfully completed the rigorous, foundational engineering phase of the Artificial Intelligence and Machine Learning curriculum at SLIIT.",
            side: "left"
        },
        {
            title: "Web Design for Beginners",
            date: "March 2026",
            location: "University of Moratuwa",
            description: "Gained a solid foundation in modern web design principles and interface structures through the Department of Information Technology's specialized program.",
            side: "right"
        },
        {
            title: "AI/ML Engineer - Stage 2",
            date: "April 2026",
            location: "SLIIT",
            description: "Advanced into high-level implementations, deep diving into complex model optimization and engineering workflows in the Stage 2 AI/ML program at SLIIT.",
            side: "left"
        },
        {
            title: "Front-End Web Development",
            date: "April 2026",
            location: "University of Moratuwa",
            description: "Developed advanced competencies in building responsive, interactive, and user-centric web applications under the Department of Information Technology.",
            side: "right"
        },
        {
            title: "Agile Project Management in ICT Projects",
            date: "March 2026",
            location: "University of Moratuwa",
            description: "Mastered modern Agile framework implementations and iterative delivery strategies tailored for technology projects, certified by the Department of Computer Science and Engineering",
            side: "left"
        },
        {
            title: "Foundations of Project Management",
            date: "March 2026",
            location: "University of Moratuwa",
            description: "Acquired core project lifecycle and management methodologies through the specialized training program conducted by the Department of Civil Engineering.",
            side: "right"
        },
    ];

    const skills = [
        { name: "Programming Languages", icon: "fas fa-code", level: "85%", desc: "Java, Python, JavaScript, TypeScript, C" },
        { name: "Web & Frontend Technologies", icon: "fab fa-html5", level: "90%", desc: "HTML, CSS, Angular, React.js" },
        { name: "Databases & Storage", icon: "fas fa-database", level: "80%", desc: "MySQL, MongoDB" },
        { name: "Tools & Methodologies", icon: "fas fa-tools", level: "85%", desc: "Git / Version Control, Jira, Agile Methodology, OOP" }
    ];

    const projects = [
        {
            id: 1,
            title: "TutorSphere – Online Learning Platform",
            image: "tutorsphere.png.jpg",
            category: "Web Development / Architecture",
            date: "Oct 2025 - Nov 2025",
            shortDesc: "A centralized digital ecosystem designed to streamline supplemental education in Sri Lanka, focusing on STEM and ICT fields.",
            fullDesc: "TutorSphere is a centralized, end-to-end digital ecosystem designed to streamline supplemental education in Sri Lanka. Focused specifically on STEM and ICT fields, the platform bridges the gap between students seeking quality guidance and educators operating in fragmented social media spaces. It transforms traditional, manual tutoring operations into an automated, data-driven web application featuring intelligent scheduling, progress tracking, and AI-powered learning assistance.",
            tech: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Responsive Design"],
            github: "https://github.com/MinaraMunasinghe/tutorsphere-platform.git",
            liveDemo: "https://www.tutorsphere.me/"
        },
        {
            id: 2,
            title: "Evoria –  Event Management Platform",
            image: "evoria.png.png",
            category: "Full-Stack Development / Mobile Architecture",
            date: "May 2026",
            shortDesc: "A centralized digital ecosystem designed to streamline event lifecycle operations, focusing on community and professional gatherings.",
            fullDesc: "Evoria is a centralized, end-to-end digital ecosystem designed to streamline event lifecycle operations. Focused specifically on community and professional gatherings, the platform bridges the gap between attendees seeking seamless experiences and organizers operating in fragmented planning spaces.It automates the entire event lifecycle from secure email OTP verification, waitlists, and interactive ticketing to real-time event analytics, automated push notifications, and digital QR check-ins.",
            tech: ["Node.js", "React Native", "TypeScript", "MongoDB", "Express", "Expo SDK"],
            github: "https://github.com/MinaraMunasinghe/evoria-event-management-system.git"
        }
    ];

    // --- Selectors ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const timelineContainer = document.getElementById('experience-timeline');
    const skillsGrid = document.getElementById('skills-grid');
    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // --- Theme Management ---
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

        // Update profile pic filter or source if needed
        const profilePic = document.getElementById('profile-pic');
        if (newTheme === 'light') {
            profilePic.style.filter = "brightness(0.9) contrast(1.1)";
        } else {
            profilePic.style.filter = "none";
        }
    });

    // --- Rendering Functions ---
    function renderTimeline() {
        timelineContainer.innerHTML = experiences.map((exp, index) => `
            <div class="timeline-item ${exp.side} animate-fade" style="animation-delay: ${index * 0.1}s">
                <div class="timeline-content">
                    <span class="date">${exp.date}</span>
                    <h3>${exp.title}</h3>
                    <p style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-secondary);">${exp.location}</p>
                    <p>${exp.description}</p>
                </div>
            </div>
        `).join('');
    }

    function renderSkills() {
        skillsGrid.innerHTML = skills.map((skill, index) => `
            <div class="skill-card animate-fade" style="animation-delay: ${index * 0.1}s">
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${skill.desc}</p>
                <div style="background: var(--border-color); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="width: ${skill.level}; background: var(--accent-color); height: 100%; transition: width 1.5s ease-in-out;"></div>
                </div>
                <p style="text-align: right; font-size: 0.8rem; margin-top: 0.5rem; font-weight: 700; color: var(--accent-color);">${skill.level}</p>
            </div>
        `).join('');
    }

    function renderProjects() {
        projectsGrid.innerHTML = projects.map((project, index) => `
            <div class="project-card animate-fade" style="animation-delay: ${index * 0.1}s" data-id="${project.id}">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-overlay">
                    <p style="color: var(--accent-color); font-weight: 700; font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase;">${project.category}</p>
                    <h3 style="margin: 0.5rem 0;">${project.title}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary);">${project.shortDesc}</p>
                </div>
            </div>
        `).join('');

        // Add event listeners to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectId = parseInt(card.getAttribute('data-id'));
                const project = projects.find(p => p.id === projectId);
                openProjectModal(project);
            });
        });
    }

    // --- Modal Functions ---
    function openProjectModal(project) {
        modalBody.innerHTML = `
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--accent-color);">${project.title}</h2>
            <p style="color: var(--text-secondary); font-weight: 600; margin-bottom: 2rem;">${project.category}</p>
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
                <div>
                    <h4 style="margin-bottom: 1rem;">Project Overview</h4>
                    <p>${project.fullDesc}</p>
                </div>
                <div>
                    <h4 style="margin-bottom: 1rem;">Technologies</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${project.tech.map(t => `<span style="padding: 4px 12px; background: var(--glass-bg); border: 1px solid var(--accent-color); border-radius: 50px; font-size: 0.8rem;">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div style="margin-top: 3rem; display: flex; gap: 1rem;">
                <a href="${project.liveDemo || '#'}" target="_blank" rel="noopener noreferrer" class="btn">Live Demo</a>
                <a href="${project.github || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Github Repo</a>
            </div>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scroll
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // --- Init ---
    renderTimeline();
    renderSkills();
    renderProjects();

    // Smooth scroll for nav links (native scroll on mobile for reliable anchoring)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const target = document.querySelector(href);
            if (!target) return;

            // Mobile: use native anchor jump — respects html scroll-padding
            if (window.matchMedia('(max-width: 768px)').matches) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
