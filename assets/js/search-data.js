// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-accueil",
    title: "Accueil",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications classées par catégorie dans l&#39;ordre chronologique inverse. Générées par jekyll-scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-communications",
          title: "Communications",
          description: "Présentations orales, posters et interventions grand public.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/communications/";
          },
        },{id: "nav-enseignement",
          title: "Enseignement",
          description: "Supports de cours, calendriers et ressources pédagogiques.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Formations et expériences professionnelles principales",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bibliothèque",
          title: "Bibliothèque",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-allergie-aux-corticoïdes",
        
          title: "Allergie aux corticoïdes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Corticoides/";
          
        },
      },{id: "post-réaction-de-perfusion-à-la-vancomycine",
        
          title: "Réaction de perfusion à la vancomycine",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Reaction_perfusion_vancomycine_revue/";
          
        },
      },{id: "post-allergie-au-blé-et-au-gluten-maladie-coeliaque-intolérance-non-coeliaque-au-blé",
        
          title: "Allergie au blé et au gluten, maladie coeliaque, intolérance non coeliaque au blé...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Ble/";
          
        },
      },{id: "books-analyses-factorielles-simples-et-multiples",
          title: 'Analyses factorielles simples et multiples',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/analyses%20factorielles/";
            },},{id: "books-the-elements-of-statistical-learning",
          title: 'The Elements of Statistical Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/elements/";
            },},{id: "books-an-introduction-to-statistical-learning",
          title: 'An Introduction to Statistical Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/james/";
            },},{id: "books-statistique-exploratoire-multidimensionnelle-4ème-édition",
          title: 'Statistique exploratoire multidimensionnelle - 4ème édition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lebart/";
            },},{id: "books-méthodes-statistiques",
          title: 'Méthodes statistiques',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/methodes/";
            },},{id: "books-statistiques-pour-statophobes",
          title: 'Statistiques pour statophobes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/statophobes/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-affectation-en-internat-d-allergologie-à-l-ap-hp-pitié-salpêtrière",
          title: 'Affectation en internat d’allergologie à l’AP-HP Pitié-Salpêtrière.',
          description: "",
          section: "News",},{id: "news-nommé-représentant-des-membres-juniors-taskforce-angioedema-in-pregnancy-eaaci",
          title: 'Nommé représentant des membres juniors — taskforce “Angioedema in Pregnancy”, EAACI.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-tut-physique-et-tut-39-bdd",
          title: 'Tut’Physique et Tut&amp;#39;BDD',
          description: "Supports de cours rédigés dans le cadre du Tutorat de PACES de la Corporation des Carabins de Sorbonne Université.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/tut_physique/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_academique_complet.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%6E%64%6A%65%6C%61%6C.%79%61%6E%69%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yanis-bendjelal", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
