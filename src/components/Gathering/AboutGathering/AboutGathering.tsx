import React from 'react';
import { ReactComponent as Hexagon } from 'src/assets/images/gathering/hexagon.svg';
import Drones from 'src/assets/images/gathering/aboutGathering/drones.jpg';
import DronesMobile from 'src/assets/images/gathering/aboutGathering/about_project_mob.jpg';
import styles from './AboutGathering.module.scss';
import { aboutGatheringListItem } from './const';

const AboutGathering = () => {
  return (
    <section className={styles.aboutGathering}>
      <div className={styles.aboutGatheringWrapper}>
        <h2>ПРО ПРОЄКТ</h2>

        <div className={styles.descriptionGathering}>
          <h4>
            «Здіймемо рокіт» — це спільний проєкт кофаундингової компанії{' '}
            <a href="https://www.gen.tech/" target="_blank" rel="noreferrer">
              Genesis
            </a>{' '}
            i фонду компетентної допомоги армії{' '}
            <a href="https://savelife.in.ua/" target="_blank" rel="noreferrer">
              «Повернись живим».
            </a>
            <br />
            Протягом двох місяців ми зібрали понад 15 млн грн та забезпечили 112, 114 та 241 бригади{' '}
            <a href="https://tro.mil.gov.ua/" target="_blank" rel="noreferrer">
              Сил територіальної оборони
            </a>{' '}
            ЗСУ комплектами аеророзвідки.
          </h4>
          <div className={styles.descriptionsWrapper}>
            <p>
              Завдяки активній підтримці відповідального бізнесу та благодійників нам вдалося
              зібрати на 4 млн більше від запланованої суми, що дозволило придбати додатковий
              комплект для ще однієї, четвертої бригади тероборони.
            </p>
            <p>Дякуємо компаніям з екосистеми Genesis, партнерам та всім благодійникам проєкту!</p>
          </div>
        </div>

        <div className={styles.descriptionImgWrapper}>
          <img src={Drones} className={styles.desktop} alt="Дрони" loading="lazy" />
          <img src={DronesMobile} className={styles.mobile} alt="Дрони" loading="lazy" />
        </div>

        <h2>ЗМІЦНЮЄМО АЕРОРОЗВІДКУ СИЛ ТРО ЗСУ</h2>

        <div className={styles.descriptionWhatNeed}>
          <h4>Бригадні комплекти вже допомагають підрозділам:</h4>

          <div className={styles.whatNeedListWrapper}>
            {aboutGatheringListItem.map(({ id, text }) => (
              <div key={id} className={styles.whatNeedItem}>
                <div>
                  <Hexagon width="24px" height="21px" />
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGathering;
