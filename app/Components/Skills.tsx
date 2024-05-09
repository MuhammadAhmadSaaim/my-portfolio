import React from 'react'
import SkillsItem from "./SkillsItem"
import SkillsLanguage from "./SkillsLanguage"

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">Experience & <span className="text-purple-900">Skills</span></h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-l md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsItem title="Flutter Developer" year="2023 - 2024" body="lorem" />
                    <SkillsItem title="Flutter Developer" year="2023 - 2024" body="lorem" />
                    <SkillsLanguage skill1="HTML" skill2="CSS" skill3="JS" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div>
                    <SkillsItem title="Flutter Developer" year="2023 - 2024" body="lorem" />
                    <SkillsItem title="Flutter Developer" year="2023 - 2024" body="lorem" />
                    <SkillsLanguage skill1="DART" skill2="CSS" skill3="MERN" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
            </div>
        </div>
    )
}

export default Skills
