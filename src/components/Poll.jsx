import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './Poll.css';

Chart.register(ArcElement, Tooltip, Legend);

function Poll() {
    const [votes, setVotes] = useState(() => {
        const savedVotes = localStorage.getItem('votes');
        return savedVotes ? JSON.parse(savedVotes) : new Array(10).fill(0);
    });
    const labels = [
        '大谷映美里', '大場花菜', '音嶋莉沙', '齋藤樹愛羅', '佐々木舞香',
        '髙松瞳', '瀧脇笙古', '野口衣織', '諸橋沙夏', '山本杏奈'
    ]; // ラベルを固定

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes]);

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index]++;
        setVotes(newVotes);
    };

    const resetVotes = () => {
        const resetVotes = new Array(10).fill(0);
        setVotes(resetVotes);
        localStorage.setItem('votes', JSON.stringify(resetVotes));
    };

    const totalVotes = votes.reduce((a, b) => a + b, 0);
    const data = {
        labels: labels,
        datasets: [{
            data: votes,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FFCD56', '#C9CB3F', '#FF6384', '#C0C0C0'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FFCD56', '#C9CB3F', '#FF6384', '#C0C0C0'],
            borderWidth: 0,
            borderColor: 'transparent'
        }]
    };

    return (
        <div className="poll-container">
            <h4 style={{ fontWeight: 'bold' }}>Who do you like among "=LOVE"?</h4>
            <br />
            {votes.map((_, index) => (
                <div key={index} className="option-container">
                    <span>{labels[index]}</span>
                    <button onClick={() => handleVote(index)}>♡</button>
                </div>
            ))}
            <br />
            <div className="graph-container">
                <Pie data={data} />
            </div>
        </div>
    );
}

export default Poll;