import React from 'react'
import profileImage from "../Images/nanaka.jpg";
import copypenImage from "../Images/copypen.jpg";
import fuwawariImage from "../Images/fuwawari.png";
import funfesImage from "../Images/funfes.jpg";
import RedesignerImage from "../Images/redesigner_transparent.png";

const Works = () => {
    return (
        <div>
            <img src={profileImage} className="fadeIn" style={{ width: '100vw', height: '100vh', objectFit: 'cover', borderRadius: '0', position: 'fixed', top: '0', left: '0', zIndex: '-1', opacity: '1.0' }} />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="text-center">
                <h2 style={{ letterSpacing: '4px', fontWeight: '380' }}>
                    Works
                </h2>

                <a href="https://student.redesigner.jp/students/e9d78f9a30ea8c296c368168c9f03a3e" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', right: '0px', top: '15%', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))' }}>
                    <img src={RedesignerImage} style={{ width: '80px', height: 'auto' }} />
                </a>

                <br /><br /><br /><br /><br /><br /><br /><br /><br />

                <h3 style={{ letterSpacing: '4px', fontWeight: '100' }}>
                    01<br /><br /><br />
                </h3>
                <img src={copypenImage} style={{ width: '400px', height: 'auto', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))' }} /><br /><br />
                <h3 style={{ letterSpacing: '4px', fontWeight: '300' }}>
                    Copypen
                </h3>
                <br /><br />
                <h8 style={{ fontWeight: '600' }}>
                    指先に感じる触感を楽しみながら、<br />
                    コピー＆ペーストをペン単体で実行できるデバイスです。<br />
                    プロジェクト「Interaction Elements」で製作しました。
                </h8>

                <br /><br /><br /><br /><br /><br />

                <h3 style={{ letterSpacing: '4px', fontWeight: '100' }}>
                    02
                </h3>
                <img src={fuwawariImage} style={{ width: '400px', height: 'auto', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))' }} />
                <h3 style={{ letterSpacing: '4px', fontWeight: '300' }}>
                    ふわわり
                </h3>
                <br /><br />
                <h8 style={{ fontWeight: '600' }}>
                    タオルの色でコミュニケーション可否の<br />
                    意思疎通を行うサービスデザインをしました。<br />
                    ３年次授業「ユーザ・センタード・デザイン」の成果物になります。
                </h8>

                <br /><br /><br /><br /><br /><br />

                <h3 style={{ letterSpacing: '4px', fontWeight: '100' }}>
                    03
                </h3>
                <img src={funfesImage} style={{ width: '400px', height: 'auto', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))' }} />
                <h3 style={{ letterSpacing: '4px', fontWeight: '300' }}>
                    未来祭2022
                </h3>
                <br /><br />
                <h8 style={{ fontWeight: '600' }}>
                    ３年ぶりとなる大型の対面開催に向けて、未来祭実行委員で力を合わて学園祭を務め上げました。<br />
                    私はイベントセクションリーダーいう役職を務めました。
                </h8>

                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
        // <div>
        //     <section class="page-section" id="skill">
        //         <div className="service">
        //             <div class="text-center">
        //                 <h5 class="section-subheading text-muted mb-5">
        //                     私が制作した作品一覧です
        //                 </h5>
        //             </div>
        //             <div class="row text-center">
        //                 <div class="col-md-4 services">
        //                     <img src={copypenImage} />
        //                     <h4 class="my-3"><p>Copypen</p></h4><br></br>
        //                     <p class="text-muted">
        //                         指先に感じる触感を楽しみながら、コピペーストをペン単体で実行できるデバイスです。
        //                         プロジェクト「Interaction Elements」で製作しました。<br></br>
        //                     </p>
        //                 </div>
        //                 <div class="col-md-4">
        //                     <img src={fuwawariImage} />
        //                     <h4 class="my-3"><p>ふわわり</p></h4><br></br>
        //                     <p class="text-muted">
        //                         タオルの色でコミュニケーション可否の意思疎通を行うサービスデザインをしました。
        //                         ３年次授業「ユーザ・センタード・デザイン」の成果物になります。<br></br><br></br><br></br>
        //                     </p>
        //                 </div>
        //                 <div class="col-md-4">
        //                     <img src={funfesImage} />
        //                     <h4 class="my-3"><p>未来祭2022</p></h4><br></br>
        //                     <p class="text-muted">
        //                         ３年ぶりとなる大型の対面開催に向けて、未来祭実行委員で力を合わて学園祭を務め上げました。
        //                         私はイベントセクションリーダーいう役職を務めました。<br></br>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </section >
        // </div>
    )
}

export default Works