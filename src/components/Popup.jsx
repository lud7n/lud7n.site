import React from 'react';

function Popup({ isOpen, close }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={close}>
            <div className="popup-content" onClick={e => e.stopPropagation()} >
                <h3>保有資格一覧</h3><br />
                <h6>基本情報技術者</h6>
                <h6>情報セキュリティマネジメント</h6>
                <h6>漢字検定 準２級・２級・準１級</h6>
                <h6>色彩検定 ２級</h6>
                <h6>普通自動車免許</h6>
                <h6>数学検定 準１級１次</h6>
                <h6>日商簿記３級</h6>
                <br />
                <h6 onClick={close}>close</h6>
            </div>
        </div>
    );
}

export default Popup;