import { useElementTextHeight } from 'src/hooks/useElementTextHeight';
import styles from './Accordion.module.scss'
import cn from 'classnames';
import React from 'react';

interface AccordionUi {
  id: number
  onOpen: (id: number) => void
  isFirst: boolean
  accordion: {
    id: number
    title: string
    content: React.JSX.Element
  }
}

const Accordion = ({ id, onOpen, accordion, isFirst }: AccordionUi) => {
  const isOpen = accordion.id === id
  const { height, ref } = useElementTextHeight<HTMLDivElement>()

  const classesAccordionTitle = cn({
    [styles.accordionTitle]: true,
    [styles.accordionTitleBorder]: !isFirst
  })

  return (
    <div className={styles.accordion} onClick={() => { onOpen(accordion.id) }}>
      <div className={classesAccordionTitle}>
        <h3>{accordion.title}</h3>
        <div className={styles.hexagonWrapper}>
          <p className={styles.hexagon}>
            <span className={styles.isOpen}>{isOpen ? '-' : '+'}</span>
          </p>
        </div>
      </div>
      <div className={styles.accordionContentWrapper} style={{ maxHeight: isOpen ? `${(height ?? 0) + 100}px` : 0 , paddingBottom: isOpen ? '46px' : 0}}>
        <div className={styles.accordionContent} ref={ref}>
          {accordion.content}
        </div>
      </div>
    </div>
  )
}

export default Accordion