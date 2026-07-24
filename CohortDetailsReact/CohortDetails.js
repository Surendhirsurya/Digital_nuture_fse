import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

    return (
        <div className={styles.box}>

            <h3
                className={
                    props.cohort.status.toLowerCase() === "ongoing"
                        ? styles.ongoing
                        : styles.completed
                }
            >
                {props.cohort.cohortCode}
            </h3>

            <dl>
                <dt>Technology</dt>
                <dd>{props.cohort.technology}</dd>

                <dt>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>

                <dt>Current Status</dt>
                <dd>{props.cohort.status}</dd>

                <dt>Coach</dt>
                <dd>{props.cohort.coachName}</dd>

                <dt>Start Date</dt>
                <dd>{props.cohort.startDate}</dd>

                <dt>End Date</dt>
                <dd>{props.cohort.endDate}</dd>
            </dl>

        </div>
    );
}

export default CohortDetails;