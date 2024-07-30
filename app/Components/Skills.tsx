import React from 'react'
import SkillsItem from "./SkillsItem"
import SkillsLanguage from "./SkillsLanguage"

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">Experience & <span className="text-purple-900">Skills</span></h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-l md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsItem title="Flutter Developer" year="2023 - 2024" body="I have experience in developing cross-platform mobile applications using Flutter and Dart." />
                    <SkillsItem title="Web Developer" year="2022 - 2024" body="I specialize in frontend development using HTML, CSS, and JavaScript frameworks such as Next.js." />
                    <SkillsLanguage skill1="Flutter/Dart" skill2="React-Native/JavaScript" skill3="Next JS/TypeScript" level1="w-[95%]" level2="w-[90%]" level3="w-[90%]" />
                </div>
                <div>
                    <SkillsItem title="Coder" year="2021 - 2024" body="As a C/C++ developer, I excel in algorithm design, data structures, and problem-solving." />
                    <SkillsItem title="React-Native Developer" year="2024 - 2024" body="Developed cross-platform mobile applications with a focus on smooth UX and efficient performance." />
                    <SkillsLanguage skill1="C/C++" skill2="Python" skill3="SQL" level1="w-[95%]" level2="w-[85%]" level3="w-[95%]" />
                </div>
            </div>
        </div>
    )
}

export default Skills
