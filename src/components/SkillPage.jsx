import React from 'react';
import SkillGage from './SkillGage';
import profileImage from '../Images/nanaka.jpg';

const SkillPage = () => {
    return (
        <div>
            <img src={profileImage} className="fadeIn" style={{ width: '100vw', height: '100vh', objectFit: 'cover', borderRadius: '0', position: 'fixed', top: '0', left: '0', zIndex: '-1', opacity: '1.0' }} />
            <div class="text-center">
                <br /><br /><br /><br /><br /><br />
                <h2 style={{ letterSpacing: '4px', fontWeight: '380' }}>Skill</h2><br />
                <SkillGage />
                <br /><br /><br />
            </div>
        </div>
    );
};

export default SkillPage;