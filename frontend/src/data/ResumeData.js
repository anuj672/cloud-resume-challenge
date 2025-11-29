const ResumeData = {
    header: {
      name: "Anuj Naresh Chetwani",
      location: "Lansdale, PA",
      email: "anujchetwani@gmail.com",
      phone: "+1 919-931-2129",
    },
  
    education: [
      {
        school: "North Carolina State University",
        degree: "Master of Science in Electrical Engineering",
        location: "Raleigh, NC",
        dates: "Aug 2022 - May 2024",
      },
    ],
  
    experience: [
      {
        company: "Colorcon Inc",
        role: "Software Engineer (DevOps Team)",
        location: "Harleysville, PA",
        dates: "May 2024 – Present",
        description: [
          "Saved ~$45K annually by migrating 16 production applications from Oracle ADF to containerized Python FastAPI microservices.",
          "Reduced development effort by 40% by creating a reusable FastAPI template with OracleDB integration and JWT authentication.",
          "Enabled fully automated releases (5+ per week) with a Jenkins CI/CD pipeline to build, test, and deploy microservices.",
          "Integrated OpenTelemetry logging into Dynatrace to prevent critical production incidents.",
        ],
      },
      {
        company: "Colorcon Inc",
        role: "Software Engineer Intern (DevOps Team)",
        location: "Harleysville, PA",
        dates: "Jan 2024 – May 2024",
        description: [
          "Designed an AWS Elastic Beanstalk deployment POC enabling fast delivery of Python applications.",
          "Automated database application deployments, saving 2+ DBA hours weekly with CI/CD workflows.",
        ],
      },
      {
        company: "Colorcon Inc",
        role: "DevOps Engineer Intern",
        location: "Harleysville, PA",
        dates: "Jun 2023 – Aug 2023",
        description: [
          "Built 3 Jenkins CI/CD pipelines using Groovy + Bash, reducing release time from 3 hours to 15 minutes and enabling 1,000+ deployments.",
          "Migrated 16 applications from SVN to GitHub Enterprise, improving version control and collaboration.",
        ],
      },
      {
        company: "North Carolina State University",
        role: "DevOps Project Assistant",
        location: "Raleigh, NC",
        dates: "Aug 2023 – Dec 2023",
        description: [
          "Implemented a backup solution for a production Ruby on Rails website using Bash, cron, Python, and rsync to ensure full recoverability of 40+ GB of data.",
        ],
      },
      {
        company: "HSBC",
        role: "Cloud DevOps Engineer",
        location: "Pune, MH",
        dates: "Sep 2020 – May 2022",
        description: [
          "Resolved 90+ weekly operational tickets, handling 35% of the team workload while managing Terraform deployments, CI/CD pipelines, and Docker publishing.",
          "Led GCP operations enablement for a global team of 20+, training colleagues on GitHub, Jenkins, Terraform & logging solutions.",
        ],
      },
    ],
  
    skills: {
      coding: ["Python", "C++", "Java", "HTML", "Terraform", "Ansible", "SQL", "Bash", "Groovy"],
      tools: [
        "AWS", "GCP", "Git", "GitHub Actions", "Jira", "Linux", "Jenkins", "Kubernetes",
        "Docker", "Flask", "Azure DevOps", "Dynatrace", "FastAPI", "WSO2", "Postman", "OracleDB"
      ],
      networking: ["TCP/IP", "DNS", "OSI model", "Firewalls", "VPC"],
    },
  
    projects: [
      {
        title: "AWS Cloud Architecture",
        dates: "Aug 2023",
        description: [
          "Engineered secure AWS cloud foundations for a banking application using VPC, Shield, VPC Flow Logs, and CloudWatch."
        ],
      },
      {
        title: "AWS Cloud Resume",
        dates: "Aug 2024",
        description: [
          "Developed a scalable portfolio website using S3, CloudFront, DynamoDB, and Lambda to track visitor counts."
        ],
      },
      {
        title: "AWS Weather Dashboard",
        dates: "Jan 2025",
        description: [
          "Designed a weather visualization system using Lambda and S3 with secrets stored in SSM and charts in QuickSight."
        ],
      },
    ],
  
    certifications: [
      {
        title: "AWS Solutions Architect – Associate",
        url: "https://www.credly.com/badges/ea429b8c-4dac-42b1-998b-dc978ab9b420",
      },
      {
        title: "AWS Developer – Associate",
        url: "https://www.credly.com/badges/b66659ce-d6bf-4733-90c7-f86bab208efd",
      },
      {
        title: "AWS SysOps Administrator – Associate",
        url: "https://www.credly.com/badges/278ef75a-7c1e-47ea-be00-fcdadbb7b695",
      },
      {
        title: "AWS AI Practitioner",
        url: "https://www.credly.com/badges/2ffd8c50-c76d-4819-a251-d5480c120051",
      },
      {
        title: "GCP Associate Cloud Engineer",
        url: "https://www.credly.com/badges/a807dda1-d28a-4785-ae99-fb08bf53dcb6",
      },
      {
        title: "HashiCorp Certified: Terraform Associate (003)",
        url: "https://www.credly.com/badges/5f028034-43bc-4388-9fdc-4e345edcb81b",
      },
    ],
  };
 
  
export default ResumeData;