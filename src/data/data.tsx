import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoodReadsIcon from '../components/Icon/GoodReadsIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.png';
import heropic from '../images/hero.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Omar Sanchez',
  description: "Omar Sanchez Data Engineer, Software Engineer, and Entrepreneur.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  heroSrc: heropic,
  name: `Meet Omar Sanchez!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Data Full Stack Engineer </strong> graduated from 
        <strong className="text-stone-100"> Carnegie Mellon University </strong> with passion for Entrepreneurship. 
        I love to build products that solve real problems and have a positive impact on people's lives. I excel in 
        <strong className="text-stone-100"> fast-paced environments </strong> where I can use my technical and 
        leadership skills to build products that make a difference.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I'm not trying to change the world, I'm probably reading, going to the gym, updating myself, 
        watching Netflix or playing videogames.
        I'm always <strong className="text-stone-100">open to new ideas and opportunities</strong>, so feel free to 
        reach out!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: BriefcaseIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Omar Sanchez, a Data Engineer with 3 years of working experience who loves fast-paced environments 
  and being part of meaningful endeavors. I've built Data Warehouses and Data Lakes on AWS and GCP. I've fully owned the
   data warehousing and analytics of operations of a fintech (I was the full data stack). I recently graduated with a 
   master's degree from Carnegie Mellon University and I have extensive academic knowledge in Deep Learning and Machine 
   Learning.`,
  aboutItems: [
    {label: 'Location', text: 'Pittsburgh, PA', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Colombian', Icon: FlagIcon},
    {label: 'Interests', text: 'Entrepreneurship, Gym, Books, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Carnegie Mellon University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to work!', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'SQL',
        level: 10,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Bash',
        level: 6,
      },
      {
        name: 'Javascript/Typescript',
        level: 5,
      },
      {
        name: 'Java',
        level: 4,
      },
      {
        name: 'Cypher(Neo4j)',
        level: 4,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'BigQuery',
        level: 9,
      },
      {
        name: 'MySql',
        level: 7,
      },
      {
        name: 'AWS S3',
        level: 5,
      },
      {
        name: 'PostgreSQL',
        level: 4,
      },
      {
        name: 'Neo4J',
        level: 4,
      },
      {
        name: 'AWS Redshift',
        level: 3,
      },
    ],
  },
  {
    name: 'Data Tools',
    skills: [
      {
        name: 'DBT',
        level: 8,
      },
      
      {
        name: 'Looker (Data Studio)',
        level: 7,
      },
      {
        name: 'AWS Lambda',
        level: 7,
      },
      {
        name: 'AWS StepFunctions',
        level: 6,
      },
      {
        name: 'Airflow',
        level: 4,
      },
      {
        name: 'PySpark',
        level: 4,
      },
      {
        name: 'Google DataFlow',
        level: 3,
      },
    ],
  },
  {
    name: 'Software Engineer Skills',
    skills: [
      {
        name: 'AWS',
        level: 7,
      },
      {
        name: 'GCP',
        level: 5,
      },
      {
        name: 'REST APIs',
        level: 6,
      },
      {
        name: 'PyTest',
        level: 6,
      },
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'Terraform/IaC',
        level: 6,
      },
      {
        name: 'Selenium',
        level: 4,
      },
      {
        name: 'Regex',
        level: 6,
      },
      {
        name: 'React',
        level: 2,
      },
    ],
  },
  {
    name: 'Data Science/Analytics',
    skills: [
      {
        name: 'Jupyter Notebooks',
        level: 9,
      },
      {
        name: 'PyTorch',
        level: 6,
      },
      {
        name: 'Scikit-Learn',
        level: 5,
      },
      {
        name: 'Pandas',
        level: 6,
      },
      {
        name: 'WanDB',
        level: 4,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 2,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2023',
    location: 'Carnegie Mellon University',
    title: 'MS, Information Systems Management - Business Intelligence & Data Analytics',
    content: <ul>
      <li>● CQPA: 4.12/4.0</li>
      <li>● Coursework: 11-785 Introduction to Deep Learning, 10-601 Introduction to Machine Learning, 11-667 Large
            Language Models, 95-828 Machine Learning for Problem Solving, 95-865 Unstructured Data Analytics.</li>
      <li>● Worked as a Teaching Assistant (TA) for the courses Unstructured Data Analytics for two semesters and Object
    Oriented Programming with Java for 1 semester. Served as an officer at the Colombian Student Association.</li></ul>,
  },
  {
    date: 'December 2021',
    location: 'Universidad de La Sabana',
    title: 'BS, Economics and International Finance,',
    content: <p>● CQPA: 4.4/5.0 </p>,
  },
  {
    date: 'December 2020',
    location: 'Universidad de La Sabana',
    title: 'MS, Informatics Engineering, Universidad de La Sabana',
    content: <ul>
      <li>● CQPA: 4.5/5.0</li>
      <li>● Served on the team for the robotics football world championship “Robocup” in 2019 that reached semi-finalist status
in the “Shield Category”. Developed a path planning algorithm and main behaviors for the striker role.</li>
    </ul>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - Aug 2023',
    location: 'Amazon',
    title: 'Data Engineer',
    content: (
      <ul>
        <li>● Designed and developed an AWS-based batch NLP service for cleaning, storing, processing, and aggregating
        open-ended questions using AWS S3, AWS Athena, AWS Step Functions, AWS Lambda, and AWS Comprehend while
        employing only one-third of the time allotted for this.</li>
        <li>● Established a full CI/CD pipeline with unit and integration testing, for the deployment of the solution using AWS
        CloudFormation, PyTest, and internal DevOps tool.</li>
        <li>● Integrated the NLP service with a third-party API, serving as the user interface for enhanced UX.</li>
      </ul>
    ),
  },
  {
    date: 'Apr 2022 - Jul 2022',
    location: 'Factored',
    title: 'Data Engineer Trainee',
    content: (
      <ul>
      <li>● Retrieved data from REST APIs to generate automated reports using Python, AWS Lambda, Docker, AWS S3, AWS
        DynamoDB, AWS SNS, and AWS Step Functions. Deployed using Serverless Framework.</li>
      <li>● Designed and implemented a layered data lake using AWS S3, the AWS Glue data catalog, and PySpark.</li>
      <li>● Developed a pipeline to extract data from both PostgreSQL and S3 to create a data warehouse following Kimball’s
        modeling technique in AWS Redshift using Python, Airflow on AWS EC2, AWS Glue, Apache Spark, DBT, and SQL.</li>
      <li>● Implemented CI/CD pipelines to automate infrastructure deployment using GitHub Actions and Terraform.</li>
      <li>● Consumed and transformed streaming data to produce aggregated statistics, store data, and create real-time
        dashboards using Python, AWS Kinesis, AWS S3, and Splunk.</li>
    </ul>
    ),
  },
  {
    date: 'Dec 2021 - Apr 2022',
    location: 'Bluetab (an IBM Company)',
    title: 'Data Engineer',
    content: (
      <ul>
      <li>● Built, tested, and documented several data pipelines using Apache Spark, Control-M, and other proprietary big data
        tools including Datio for an international bank.</li>
      <li>● Deployed hundreds of Control-M data workflows and automated the creation of workflow-definition XML files using
        Python, RegEx, and Pandas, decreasing by a factor of 4 the time-to-production of new pipelines.</li>
      <li>● Ensured data quality and enforced rules of completeness, consistency, integrity, etc. according to data governance
        expectations.</li>
    </ul>
    ),
  },
  {
    date: 'May 2021 - Dec 2021',
    location: 'Scotiabank',
    title: 'Software Engineer Analyst',
    content: (
      <ul>
      <li>● Built a tool using Selenium Web Driver, Python, Bash, and Docker to automatically execute tests to evaluate the impact
        of change on risk metrics, making the whole process four times faster.</li>
      <li>● Led and orchestrated deployments from development to production using Jenkins and Bitbucket.</li>
    </ul>
    ),
  },
  {
    date: 'Feb 2020 - Apr 2021',
    location: 'Minka',
    title: 'Support Data Analyst',
    content: (
      <ul>
      <li>● Designed, built, and maintained single-handedly and proactively a GCP-hosted Bigquery data warehouse to support
        complex operation reports, accounting reports, and ad hoc analysis for an online pay tech company in Latin America.
        The data warehouse enabled a holistic view of a range of data sources (i.e. MySQL, Google Datastore, Google Cloud
        Logging, CSV files, spreadsheets, Neo4J/API). Leveraged the power of GCP (Cloud functions, Dataflow/Apache Beam,
        Dataprep, Bigquery, Google Cloud Storage, Pub/Sub ), Data Build Tool (DBT), Javascript, and Python. This helped the
        business fulfill several data needs and surface costly mistakes that required attention by the C-suite.</li>
      <li>● Designed, built, and maintained various analytical reports using SQL and Data Studio (now Looker) oriented to C-level
        executives.</li>
      <li>● Implemented integrations between Google Bigquery and Spreadsheets to serve different reports and tables to provide
        a familiar and friendly interface to the warehouse to non-technical users.</li>
      <li>● Developed several tools using Javascript and Node.js to automate and optimize operative processes decreasing by a
        factor of 10 the errors to be manually checked and fixed.</li>
      <li>● Identified, analyzed, and resolved complex errors within the service using SQL and Bigquery, leveraging a deep
        understanding of the REST API services and synchronous/asynchronous messaging styles.</li>
      <li>● Automated several REST API tests using Postman and Javascript, decreasing the testing time to just one-fifth.</li>
    </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Let\'s connect!',
  description: 'If you want to connect with me for new opportunities, collaboration, or just to say hi, I\'m always open to new ideas and opportunities.',
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'omar-sanchez-tb1',
      href: 'https://www.linkedin.com/in/omar-sanchez-tb1/',
    },
    {
      type: ContactType.Email,
      text: 'omarleonardosanchez@hotmail.com',
      href: 'mailto:omarleonardosanchez@hotmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pittsburgh PA, United States',
      href: 'https://maps.app.goo.gl/VnQ5N2yX1Uqxbtef8',
    },
    {
      type: ContactType.Instagram,
      text: '@Omarlsg98',
      href: 'https://www.instagram.com/Omarlsg98/',
    },
    {
      type: ContactType.Github,
      text: 'Omarlsg98',
      href: 'https://github.com/Omarlsg98',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/omar-sanchez-tb1/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Omarlsg98'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/Omarlsg98/'},
  {label: 'GoodReads', Icon: GoodReadsIcon, href: 'https://www.goodreads.com/user/show/69947538-omar-sanchez'},
];
