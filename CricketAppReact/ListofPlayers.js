import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 84 },
        { name: "Shubman Gill", score: 72 },
        { name: "KL Rahul", score: 65 },
        { name: "Hardik Pandya", score: 58 },
        { name: "Ravindra Jadeja", score: 76 },
        { name: "R Ashwin", score: 68 },
        { name: "Mohammed Shami", score: 40 },
        { name: "Jasprit Bumrah", score: 35 },
        { name: "Kuldeep Yadav", score: 61 },
        { name: "Mohammed Siraj", score: 55 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <br />

            <h2>Players with Score Below 70</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        below70.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default ListofPlayers;