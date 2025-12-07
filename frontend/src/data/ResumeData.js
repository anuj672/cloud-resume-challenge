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
          "Migrated 16 legacy Oracle ADF production applications to containerized Python FastAPI microservices, driving ~$45K in annual cost savings.",
          "Built a reusable FastAPI service template with OracleDB integration and JWT authentication, reducing team development effort by 40%+.",
          "Designed and implemented Jenkins CI/CD pipelines to automate build, test, and deployment workflows, enabling 5+ production releases per week.",
          "Integrated OpenTelemetry with Dynatrace to enable distributed tracing and prevent 10+ recurring production incidents monthly.",
          "Collaborated with DBAs and security teams to optimize SQL performance and modernize authentication flows."
        ],
      },
      {
        company: "Colorcon Inc",
        role: "Software Engineer Intern (DevOps Team)",
        location: "Harleysville, PA",
        dates: "Jan 2024 – May 2024",
        description: [
          "Developed an AWS Elastic Beanstalk deployment proof-of-concept to rapidly ship Python applications.",
          "Automated database deployment workflows, saving 2+ DBA hours per week and improving release reliability.",
        ],
      },
      {
        company: "Colorcon Inc",
        role: "DevOps Engineer Intern",
        location: "Harleysville, PA",
        dates: "Jun 2023 – Aug 2023",
        description: [
          "Built three Jenkins CI/CD pipelines using Groovy and Bash, reducing release times from 3 hours to 15 minutes.",
          "Migrated 16 applications from SVN to GitHub Enterprise, improving version control and team collaboration.",
        ],
      },
      {
        company: "North Carolina State University",
        role: "DevOps Project Assistant",
        location: "Raleigh, NC",
        dates: "Aug 2023 – Dec 2023",
        description: [
          "Automated backups for a 40+ GB production Ruby on Rails system using Bash, cron, Python, and rsync, ensuring full data recoverability.",
          "Created monitoring scripts to validate backups and trigger failure alerts, reducing manual oversight by 50%.",
        ],
      },
      {
        company: "HSBC",
        role: "Cloud DevOps Engineer",
        location: "Pune, India",
        dates: "Sep 2020 – May 2022",
        description: [
          "Resolved 90+ weekly GCP operational tickets, handling ~35% of team workload across production cloud systems.",
          "Deployed Terraform-managed IAM roles and infrastructure, improving security posture and environment consistency.",
          "Trained 20+ global engineers across USA, UK, Poland, India, and China on Jenkins, GitHub, Terraform, and cloud logging practices.",
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