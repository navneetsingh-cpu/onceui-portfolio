import { InlineCode } from '@/once-ui/components';

const person = {
  firstName: 'Navneet',
  lastName: 'Kahlon',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full Stack Developer',
  avatar: '/images/avatar.jpg',
  location: 'America/Toronto', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/navneetsingh-cpu',
  },
  // {
  //     name: 'LinkedIn',
  //     icon: 'linkedin',
  //     link: 'https://www.linkedin.com/company/once-ui/',
  // },
  // {
  //     name: 'X',
  //     icon: 'x',
  //     link: '',
  // },
  // {
  //     name: 'Email',
  //     icon: 'email',
  //     link: 'mailto:example@gmail.com',
  // },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Navneet, a developer at <InlineCode>Citi</InlineCode>, where I craft
      intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://www.linkedin.com/in/navneetskahlon/',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Navneet is a Toronto-based developer engineer with a passion for
        transforming complex challenges into simple, elegant solutions. His work
        spans modern web applications, interactive user interfaces, and the
        seamless integration of performance and technology across the front-end
        and back-end.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Citi',
        timeframe: '2022 - Present',
        role: 'Specialty Developer - Analyst',
        achievements: [
          <>
            Developed complex financial real-time streaming applications,
            including charts for data visualization.
          </>,
          <>
            Utilized ElectronJs to create desktop applications, enhancing
            accessibility and usability forend users in the financial industry.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //   {
          //     src: '/images/projects/project-01/cover-01.jpg',
          //     alt: 'Once UI Project',
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        company: 'Publicis Sapient',
        timeframe: '2021 - 2022',
        role: 'UI Developer',
        achievements: [
          <>
            Franklin Templeton Investments: Created a new website for
            franklintempleton.com and other various other countries' sites.
          </>,
          <>
            Experience in working with GraphQL queries and using the Apollo
            GraphQL library.
          </>,
        ],
        images: [],
      },
      {
        company: 'Crosscap Media Services',
        timeframe: '2019 - 2020',
        role: 'Front End Developer',
        achievements: [
          <>
            Created new responsive UI for the client while replacing old Flash
            /JSP UI Using latest javascript framework like Angular/React
          </>,
          <>
            Created a web app to annotate on pdfs, documents/images, videos and
            audio files tor eplace Adobe PDF in built annotation tool.
          </>,
        ],
        images: [],
      },
      {
        company: 'UnitedHealth Group',
        timeframe: '2016 - 2019',
        role: 'Front End / AEM Developer',
        achievements: [
          <>
            Led a cross-functional team to revamp the AEM content management
            workflow, resultingin improved team efficiency and reduced time to
            publish for web content.
          </>,
          <>
            Used AEM to give authors flexibility of changing position of
            components vertically on a page.
          </>,
        ],
        images: [],
      },
      {
        company: 'Capgemini',
        timeframe: '2012 - 2014',
        role: 'Associate Consultant',
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Education',
    institutions: [
      {
        name: 'Northern Illinois University',
        description: <>Studied MS in Management Information Systems</>,
      },
      {
        name: 'Shri Mata Vaishno Devi University',
        description: <>Studied Btech in Computer Science and Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Javascript',
        description: (
          <>Building next gen fullstack apps with Next.js, Angular, React</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'Java',
        description: (
          <>
            Expertise in backend Java Spring Boot for building secure, scalable
            back-end services.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
