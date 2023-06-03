export const validation = (type, value) => {
    switch (type) {
        case "phone":
            let pPattern = /^[0-9]{10}$/
            if(!pPattern.test(value)){
                return "Please enter a valid phone number!"
            }
            break;
        case "email":
            let pattern =/^.+@[a-zA-Z0-9]+\.[a-zA-Z]{2,63}$/;
            if(!pattern.test(value)){
                return "Please enter a valid email!"
            }
            break;
        case "percent":
            let perPattern = /^[0-9]{2}$/
            if(!(value == 100 || perPattern.test(value))){
                return "Please enter a valid percentage!"
            }
    }
    return "";
}

const sections = [
    "basicInfo",
    "objective",
    "skills",
    "workExp",
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