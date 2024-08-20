import React from 'react'

const Skills = ({skills}) => {
  return (
    <div>
         <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-4 space-y-4">
            {skills.map((skill) => (
              <div key={skill.label} className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-xl">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{skill.label}</p>
                  <div className="relative mt-1">
                    <div className="absolute inset-0 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Skills