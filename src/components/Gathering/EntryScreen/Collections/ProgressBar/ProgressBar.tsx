import styles from  './ProgressBar.module.scss'
import { useMemo } from 'react';

const ProgressBar = ({ amount } : { amount?: number }) => {

  const percentage = useMemo(()=>{
    if (amount) {
      return ((amount / 10732080) * 100).toFixed(1);
    } else {
      return 0
    }
  },[amount])

  return (
    <div className={styles.progress__wrapper}>
      <div className={styles.progress} style={{ width: `${ percentage >= 100 ? 100 : percentage}%` }}/>
      <p>{percentage}%</p>
    </div>
  )
}

export default ProgressBar