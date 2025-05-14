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
            url: 'https://moodtalk.netlify.app'
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
    let visibleProjects = 0;
    
    // Function to detect number of columns in the portfolio grid
    function detectGridColumns() {
        // First, ensure the grid is visible to get proper measurements
        if (portfolioGrid.style.display === 'none') {
            portfolioGrid.style.display = 'grid';
        }
        
        // Get the computed style of the grid
        const gridStyle = window.getComputedStyle(portfolioGrid);
        
        // Parse the grid-template-columns value to count columns
        const columnsValue = gridStyle.getPropertyValue('grid-template-columns');
        
        // If auto-fill/auto-fit is used, we need to count actual items per row
        // We'll create a temporary item to measure
        const tempItem = document.createElement('div');
        tempItem.style.height = '0';
        tempItem.style.margin = '0';
        tempItem.style.padding = '0';
        tempItem.style.border = '0';
        portfolioGrid.appendChild(tempItem);
        
        // Get the left position of the temp item
        const tempItemPos = tempItem.getBoundingClientRect().left;
        
        // Remove the temporary item
        portfolioGrid.removeChild(tempItem);
        
        // Create a second temporary item to detect when wrapping occurs
        const tempItems = [];
        let columns = 0;
        let lastLeft = 0;
        
        // Add items until we detect wrapping (when left position starts decreasing)
        for (let i = 0; i < 12; i++) {
            const item = document.createElement('div');
            item.style.height = '0';
            item.style.margin = '0';
            item.style.padding = '0';
            item.style.border = '0';
            portfolioGrid.appendChild(item);
            tempItems.push(item);
            
            const left = item.getBoundingClientRect().left;
            
            // If left position is less than or equal to the previous item, we've wrapped
            if (i > 0 && left <= lastLeft) {
                columns = i;
                break;
            }
            
            lastLeft = left;
        }
        
        // Clean up all temp items
        tempItems.forEach(item => portfolioGrid.removeChild(item));
        
        // If we couldn't detect columns, fall back to screen width detection
        if (columns === 0) {
            // Fallback: use screen width to guess
            if (window.innerWidth >= 992) {
                columns = 3;
            } else {
                columns = 2;
            }
        }
        
        return columns;
    }
    
    // Function to determine how many projects to show based on grid columns
    function getVisibleProjectsCount() {
        const columns = detectGridColumns();
        // Always show 2 rows
        return columns * 2;
    }
    
    // Initialize visible projects based on grid layout
    visibleProjects = getVisibleProjectsCount();
    
    // Update visible projects when window is resized
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const newVisibleCount = getVisibleProjectsCount();
            if (newVisibleCount !== visibleProjects) {
                // Only re-populate if we're still showing the initial set
                // (to avoid resetting the grid after user clicks "see more")
                const activeFilter = document.querySelector('.filter-btn.active');
                if (activeFilter) {
                    const filter = activeFilter.dataset.filter;
                    const currentProjects = filter === 'all' ? 
                        portfolioProjects : 
                        portfolioProjects.filter(project => project.category === filter);
                    
                    // Only reset if we haven't clicked "see more"
                    if (visibleProjects <= Math.min(6, currentProjects.length)) {
                        visibleProjects = newVisibleCount;
                        populatePortfolio(currentProjects);
                    }
                }
            }
        }, 250); // Debounce resize events
    });
    
    // Helper function to get current projects being displayed
    function getCurrentProjects() {
        const activeFilter = document.querySelector('.filter-btn.active');
        if (!activeFilter) return portfolioProjects;
        
        const filter = activeFilter.dataset.filter;
        return filter === 'all' ? 
            portfolioProjects : 
            portfolioProjects.filter(project => project.category === filter);
    }
    
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
                // Determine how many more to show based on actual grid columns
                const columns = detectGridColumns();
                
                // Increase the number of visible projects
                visibleProjects += columns * 2; // Add two more rows
                
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
            
            // Reset visible projects count based on grid layout
            visibleProjects = getVisibleProjectsCount();
            
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
