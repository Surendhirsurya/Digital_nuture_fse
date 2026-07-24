import React from "react";

function IndianPlayers() {

    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Hardik",
        "Jadeja"
    ];

    // Destructuring
    const [odd1, even1, odd2, even2, odd3, even3] = players;

    const T20players = [
        "Surya Kumar",
        "Rinku Singh",
        "Ishan Kishan"
    ];

    const RanjiPlayers = [
        "Prithvi Shaw",
        "Cheteshwar Pujara",
        "Hanuma Vihari"
    ];

    // Merge Arrays
    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (
        <div>

            <h2>Odd Team Players</h2>

            <ul>
                <li>{odd1}</li>
                <li>{odd2}</li>
                <li>{odd3}</li>
            </ul>

            <h2>Even Team Players</h2>

            <ul>
                <li>{even1}</li>
                <li>{even2}</li>
                <li>{even3}</li>
            </ul>

            <h2>Merged T20 and Ranji Trophy Players</h2>

            <ul>
                {
                    mergedPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

        </div>
    );
}

export default IndianPlayers;