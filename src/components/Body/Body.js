import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown, Eye, EyeOff } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    skills: "Skills",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    objective: "Objective",
    other: "Other",
  };
  const resumeRef = useRef();

  const [ hideVal, setHideVal ] = useState(true);

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.objective]: {
      id: sections.objective,
      sectionTitle: sections.objective,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  
  return (
    <div className={styles.container}>
      <p className={styles.heading}> 
        <button 
          className={styles.hide} 
          onClick={ () => { 
            setHideVal(!hideVal)
          }}
          title={hideVal ? "Show" : "Hide"}
          > 
          { hideVal ? <EyeOff /> : <Eye /> }
          
        </button>  
        Resume Builder 
      </p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
                <button>
                  Download <ArrowDown />
                </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        {  hideVal ?
            <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation} />
          : 
          <Resume
          className={styles.resume}
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor} />
        }
        
      </div>
    </div>
  );
}

export default Body;
