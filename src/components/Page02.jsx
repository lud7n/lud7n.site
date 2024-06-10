import React from 'react'
import mireiImage from "../Images/mireshien.jpg";

const Page02 = () => {
    return (
        <div className="text-center">
            <br /><br /><br /><br /><br /><br />
            <h2 style={{ letterSpacing: '4px', fontWeight: '380' }}>R6 高度情報技術者試験</h2><br></br>
            <img src={mireiImage} alt="" style={{ width: '400px', height: 'auto', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))' }} />
            <p class="service">
                おつかれさまです。
            </p>
        </div>
    )
}

export default Page02;