import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.total / props.goal;

    return (
        <div className="container">
            <h1>Student Score Calculator</h1>

            <table>
                <tbody>
                    <tr>
                        <td><b>Name</b></td>
                        <td>{props.name}</td>
                    </tr>

                    <tr>
                        <td><b>School</b></td>
                        <td>{props.school}</td>
                    </tr>

                    <tr>
                        <td><b>Total Marks</b></td>
                        <td>{props.total}</td>
                    </tr>

                    <tr>
                        <td><b>Total Subjects</b></td>
                        <td>{props.goal}</td>
                    </tr>

                    <tr>
                        <td><b>Average Score</b></td>
                        <td>{average}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CalculateScore;