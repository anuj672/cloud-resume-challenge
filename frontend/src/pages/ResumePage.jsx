import React from 'react';
import 'css/pages/resume.css';

import ResumeData from 'data/ResumeData';
import ResumeHeader from 'components/resume/ResumeHeader';
import ResumeSection from 'components/resume/ResumeSection';
import ResumeSkills from 'components/resume/ResumeSkills';
import ResumeCertifications from 'components/resume/ResumeCertifications';


export default function Resume() {
  return (
    <>   

        <ResumeHeader props={ ResumeData.header }></ResumeHeader>
        {/* Education */}
        <ResumeSection
            title="Education"
            items={ResumeData.education}
            renderItem={(item) => (
            <div className="item_heading">
                <div className="info">
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                </div>
                <div className="details">
                <div className="location">{item.location}</div>
                <div className="dates">{item.dates}</div>
                </div>
            </div>
            )}
        />

        {/* Experience */}
        <ResumeSection
            title="Experience"
            items={ResumeData.experience}
            renderItem={(item) => (
            <>
                <div className="item_heading">
                <div className="info">
                    <h3>{item.role} — {item.company}</h3>
                </div>
                <div className="details">
                    <div className="location">{item.location}</div>
                    <div className="dates">{item.dates}</div>
                </div>
                </div>
                <ul>
                {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                ))}
                </ul>
            </>
            )}
        />
        {/* Skills and Certifications */}

            <ResumeSkills skills={ResumeData.skills} />
            <ResumeCertifications certifications={ResumeData.certifications} />

    </>
  );
}
