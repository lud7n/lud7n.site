import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './SkillGage.module.css';

const skills = [
    { name: "React", level: 45 },
    { name: "JavaScript", level: 40 },
    { name: "HTML", level: 60 },
    { name: "CSS", level: 65 },
    { name: "C++", level: 95 },
    { name: "C", level: 70 },
    { name: "Node.js", level: 25 },
    { name: "Illustrator", level: 65 },
    { name: "Figma", level: 75 },
    { name: "Premiere Pro", level: 25 },
    { name: "MySQL", level: 25 },
    { name: "Java", level: 30 },
];

const SkillPage = () => {
    return (
        <div className={styles.container}>
            {skills.map(skill => (
                <div key={skill.name} className={styles.skill}>
                    <div style={{ width: '100px', height: '100px' }}>
                        <CircularProgressbar
                            value={skill.level}
                            text={`Lv.${skill.level}`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                pathColor: `rgba(0,0,0, ${skill.level / 100})`,
                                textColor: '#000',
                                trailColor: '#d6d6d6',
                                backgroundColor: 'rgba(0,0,0, 0.1)',
                            })}
                        />
                        <div className={styles.skillName}>{skill.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default SkillPage;