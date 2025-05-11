// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (!expanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll Progress Indicator
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', function() {
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / height) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
        
        // Show/hide scroll to top button
        if (windowScroll > 200) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        
        // Add animation classes to elements when they come into view
        const fadeElements = document.querySelectorAll('.skill-category, .portfolio-item, .about-card, .stat-item, .contact-info, .contact-form');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
        
        // Add floating animation to the profile image
        const profileImage = document.querySelector('.profile-image');
        if (profileImage && !profileImage.classList.contains('float')) {
            profileImage.classList.add('float');
        }
    });
    
    // Setup profile image flip effect
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        // Replace the simple image with the flip card structure
        const profileImage = heroImage.querySelector('.profile-image');
        if (profileImage) {
            const imageUrl = profileImage.src;
            const profileCard = document.createElement('div');
            profileCard.className = 'profile-card';
            
            profileCard.innerHTML = `
                <div class="profile-front">
                    <img src="${imageUrl}" alt="Bodi Mao's profile picture">
                </div>
                <div class="profile-back">
                    <img src="image.png" alt="Bodi Mao's alternate picture">
                </div>
            `;
            
            // Replace the simple image with our flip card
            profileImage.parentNode.replaceChild(profileCard, profileImage);
        }
    }
    
    // Portfolio Projects Data
    const portfolioProjects = [
        {
            id: 1,
            title: 'Aviliabler',
            category: 'website',
            image: 'Availabler.png',
            description: 'A real‑time availability management platform designed to eliminate unnecessary back‑and‑forth and idle waiting in professional settings.',
            tools: ['Web Development', 'UX Design', 'Real-time Platform'],
            url: 'https://availabler.netlify.app'
        },
        {
            id: 2,
            title: 'DateResume',
            category: 'website',
            image: 'DateResume.png',
            description: 'Elevate your serious love life with DateResume. Just like in job hunting, create a "dating résumé," target vetted profiles, and build meaningful relationships.',
            tools: ['Web Development', 'Matching Platform', 'UX Design'],
            url: 'https://dateresume.netlify.app'
        },
        {
            id: 3,
            title: 'MoodTalk',
            category: 'website',
            image: 'MoodTalk.png',
            description: 'Integrates journaling, digital phenotyping, and telehealth into an AI-powered platform for continuous mental health support.',
            tools: ['AI Platform', 'Mental Health', 'Telehealth'],
            url: 'https://splendid-liger-c344e6.netlify.app'
        },
        {
            id: 4,
            title: 'hinText',
            category: 'website',
            image: 'hinText.png',
            description: 'A client-side text encryption and decryption tool designed to bypass social media censorship while safeguarding user privacy.',
            tools: ['Encryption', 'Privacy Tool', 'Web Development'],
            url: 'https://v0-hin-text-web-app.vercel.app'
        },
        {
            id: 5,
            title: 'InquirHere',
            category: 'product',
            image: 'InquirHere.png',
            description: 'A paid crowdsourced Q&A platform that combines economic incentives. Users post questions with a set price and select the best answer.',
            tools: ['UX Design', 'Q&A Platform', 'Product Design'],
            url: 'https://www.behance.net/gallery/214102447/InquirHere-UX-design-case-study'
        },
        {
            id: 6,
            title: 'DebaTeam',
            category: 'product',
            image: 'DebaTeam.png',
            description: 'A smartphone-based co-located crowdsourcing platform that captures structured debates and real-world voice data for AI speech recognition and NLP models.',
            tools: ['Mobile App', 'AI Data Collection', 'UX/UI Design'],
            url: 'https://www.behance.net/gallery/214246125/DebaTeam-UXUI-Mobile-App-Case-Study'
        },
        {
            id: 7,
            title: 'Smart Speaking Glove',
            category: 'product',
            image: 'Glove.png',
            description: 'A wearable device that converts hand movements into speech using finger sensors, enabling accessible communication without requiring sign language knowledge.',
            tools: ['Accessibility', 'Wearable Device', 'Product Design'],
            url: 'https://www.behance.net/gallery/200491767/Smart-Speaking-Glove'
        },
        {
            id: 8,
            title: 'YouRowden',
            category: 'product',
            image: 'YouRowden.png',
            description: 'An app that streamlines booking, navigation, and social interaction at the University of Melbourne\'s Rowden White Library.',
            tools: ['UX Research', 'App Design', 'User Experience'],
            url: 'https://www.behance.net/gallery/214590669/YouRowden-UX-Research-Design-Case-Study'
        },
        {
            id: 9,
            title: 'Smart Donation Bin',
            category: 'product',
            image: 'Bin.png',
            description: 'An app that lets users browse, claim, and donate clothes via QR codes at recycling bins, streamlining clothing reuse through a simple, interactive platform.',
            tools: ['Sustainability', 'App Design', 'QR Integration'],
            url: 'https://www.behance.net/gallery/200109011/Smart-Donation-Bin'
        },
        {
            id: 10,
            title: 'Usability Research for SEEK Website',
            category: 'research',
            image: 'Seek.png', 
            description: 'Comprehensive usability research and evaluation of the SEEK job search platform, identifying key improvement areas and user pain points.',
            tools: ['Usability Testing', 'User Research', 'Heuristic Evaluation'],
            url: 'https://www.behance.net/gallery/208024899/Usability-Research-for-SEEK-Website'
        },
        {
            id: 11,
            title: 'Accessibility Review: Commonwealth Bank App',
            category: 'research',
            image: 'Bank.png',
            description: 'Detailed accessibility analysis of the Commonwealth Bank mobile application, with recommendations for improving inclusive design.',
            tools: ['Accessibility', 'WCAG Guidelines', 'UX Research'],
            url: 'https://www.behance.net/gallery/200491031/Accessibility-Review-Commonwealth-Bank-App'
        },
        {
            id: 12,
            title: 'Heuristic Evaluation: MyMacca\'s App',
            category: 'research',
            image: 'Mac.png',
            description: 'Systematic evaluation of the MyMacca\'s mobile app using Nielsen\'s heuristics, identifying usability issues and providing design recommendations.',
            tools: ['Heuristic Analysis', 'UX Evaluation', 'Mobile App Research'],
            url: 'https://www.behance.net/gallery/214780035/Heuristic-Evaluation-Case-Study-MyMaccas-App'
        }
    ];
    
    // Populate Portfolio Grid
    const portfolioGrid = document.querySelector('.portfolio-grid');
    let visibleProjects = 4; // Number of initially visible projects
    
    function populatePortfolio(projects) {
        if (!portfolioGrid) return;
        
        portfolioGrid.innerHTML = '';
        
        if (projects.length === 0) {
            portfolioGrid.innerHTML = '<p class="no-results">No projects found matching this category.</p>';
            return;
        }
        
        // Only show the first 'visibleProjects' number of projects
        const projectsToShow = projects.slice(0, visibleProjects);
        
        projectsToShow.forEach(project => {
            const portfolioItem = document.createElement('article');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.dataset.category = project.category;
            
            // Create category label based on project category
            let categoryLabel = '';
            switch(project.category) {
                case 'website':
                    categoryLabel = 'Website';
                    break;
                case 'product':
                    categoryLabel = 'Product Design';
                    break;
                case 'research':
                    categoryLabel = 'UX Research';
                    break;
                default:
                    categoryLabel = project.category;
            }
            
            // Create tools HTML
            let toolsHtml = '';
            if (project.tools && project.tools.length > 0) {
                toolsHtml = '<div class="portfolio-tools">';
                project.tools.forEach(tool => {
                    toolsHtml += `<span class="portfolio-tool">${tool}</span>`;
                });
                toolsHtml += '</div>';
            }
            
            portfolioItem.innerHTML = `
                <div class="portfolio-image-container">
                    <img src="${project.image}" alt="${project.title}" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <a href="${project.url}" target="_blank" rel="noopener" class="portfolio-view-btn" aria-label="View details of ${project.title}">
                            <i class="fas fa-external-link-alt" aria-hidden="true"></i> View Project
                        </a>
                    </div>
                </div>
                <span class="portfolio-category ${project.category}">${categoryLabel}</span>
                <div class="portfolio-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${toolsHtml}
                </div>
            `;
            
            portfolioGrid.appendChild(portfolioItem);
        });
        
        // Add "See More" button if there are more projects to show
        if (projects.length > visibleProjects) {
            const loadMoreContainer = document.createElement('div');
            loadMoreContainer.className = 'load-more-container';
            loadMoreContainer.style.width = '100%';
            loadMoreContainer.style.display = 'flex';
            loadMoreContainer.style.justifyContent = 'center';
            loadMoreContainer.style.marginTop = '2rem';
            
            const loadMoreBtn = document.createElement('button');
            loadMoreBtn.className = 'btn primary load-more-btn';
            loadMoreBtn.innerHTML = `
                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                See More
            `;
            
            loadMoreBtn.addEventListener('click', function() {
                // Increase the number of visible projects
                visibleProjects += 4;
                
                // If we've reached the end, remove the button on next click
                if (visibleProjects >= projects.length) {
                    visibleProjects = projects.length;
                    loadMoreContainer.remove();
                }
                
                // Re-populate the grid with the updated number of visible projects
                populatePortfolio(projects);
            });
            
            loadMoreContainer.appendChild(loadMoreBtn);
            portfolioGrid.appendChild(loadMoreContainer);
        }
    }
    
    // Initial portfolio population
    populatePortfolio(portfolioProjects);
    
    // Portfolio Filtering with animation
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class and aria-selected from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            // Add active class and aria-selected to clicked button
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            const filter = this.dataset.filter;
            
            // Reset visible projects count when changing filters
            visibleProjects = 4;
            
            // Apply filter with animation
            portfolioGrid.style.opacity = '0';
            portfolioGrid.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                if (filter === 'all') {
                    populatePortfolio(portfolioProjects);
                } else {
                    const filteredProjects = portfolioProjects.filter(project => project.category === filter);
                    populatePortfolio(filteredProjects);
                }
                
                portfolioGrid.style.opacity = '1';
                portfolioGrid.style.transform = 'translateY(0)';
            }, 300);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Add active state to nav link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.7rem 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = '';
            }
        }
    });
    
    // Highlight active section in navigation
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Implement dark/light mode toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    
    if (themeToggleBtn) {
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark-theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        }
        
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // Update button icon and aria-label
            if (document.body.classList.contains('dark-theme')) {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn.primary');
    ctaButtons.forEach(button => {
        button.classList.add('pulse');
    });
    
    window.addEventListener('scroll', highlightActiveSection);
});
