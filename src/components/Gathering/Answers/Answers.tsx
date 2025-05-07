import React, { useCallback, useState } from 'react';
import Accordion from './Accordion';
import { accordionAnswers } from './const';
import styles from './Answers.module.scss'

const Answers = () => {
  const [idAccordion, setIdAccordion] = useState<number>(0)

  const onOpen = useCallback((id: number) => {
    if (id === idAccordion) {
      setIdAccordion(0)
    } else {
      setIdAccordion(id)
    }
  }, [idAccordion])

  return (
    <section className={styles.answersBgColor}>
      <div className={styles.answersBg}>
      <div className={styles.wrapper}>
        <h2>Питання-відповіді</h2>
        {
          accordionAnswers.map((accordion, index)=>
            <Accordion
              key={accordion.id}
              isFirst={index === 0}
              id={idAccordion}
              onOpen={onOpen}
              accordion={accordion}
            />
          )
        }
      </div>
      </div>

    </section>
  );
};

export default Answers;