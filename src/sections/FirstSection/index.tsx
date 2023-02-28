import {FC} from "react";
import BannerImg from '../../assets/banner.jpg'
import styles from './styles.module.scss'

const FirstSection:FC=()=>{
    return(
        <div className={styles.firstSection}>
            <img src={BannerImg} alt="banner image"/>
        </div>
    )
}

export default FirstSection
