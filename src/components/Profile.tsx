import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

const { level } = useContext(ChallangesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/William-Romeu-Bronstrup.png" alt="William"/>

            <div>
                <strong>William Romeu Brönstrup</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>   
                Level { level }</p>
            </div>
        </div>
    );
}