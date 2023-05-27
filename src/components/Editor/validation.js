const sections = [
    "basicInfo",
    "objective",
    "workExp",
    "skills",
    "project",
    "education",
    "achievement",
    "other"
];
export const nextSection = (activeSectionKey) => {
    for( let i = 0; i < sections.length; i++){
        if(sections[i] === activeSectionKey && i < sections.length-1){
            return sections[++i];
        }
    }
    return sections[0];
}

export const prevSection = (activeSectionKey) => {
    for( let i = 0; i < sections.length; i++){
        if(sections[i] === activeSectionKey && i>0){
            return sections[--i];
        }
    }
    return sections[0];
}