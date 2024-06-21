import React from 'react';
import SkillGage from './SkillGage';

const SkillPage = () => {
    return (
        <div>
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