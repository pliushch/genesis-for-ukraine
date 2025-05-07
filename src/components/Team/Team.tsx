import React from 'react';
import styles from './Team.module.scss';
import Title from '../Title';
import novikova from 'src/assets/images/team/novikova.jpg';
import leonova from 'src/assets/images/team/leonova.jpg';
import shybko from 'src/assets/images/team/shybko.jpg';
import vlasenko from 'src/assets/images/team/vlasenko.jpg';
import panchenko from 'src/assets/images/team/panchenko.jpg';
import volovyk from 'src/assets/images/team/volovyk.jpg';
import kozel from 'src/assets/images/team/kozel.jpg';
import nagirnyak from 'src/assets/images/team/nagirnyak.jpg';
import pisareva from 'src/assets/images/team/pisareva.jpg';
import yamnenko from 'src/assets/images/team/yamnenko.png';

const teamList = [
  {
    img: vlasenko,
    name: 'Мирослава Власенко',
    position: 'HR Business Partner в Quarks',
    direction: 'Координатор фонду',
  },
  {
    img: panchenko,
    name: 'Марія Панченко',
    position: 'People Operations Director',
    direction: 'Координатор фонду',
  },
  {
    img: volovyk,
    name: 'Воловик Яніна',
    position: 'Internal Communications Lead',
    direction: 'Контент та звітність',
  },
  {
    img: kozel,
    name: 'Ярина Козел',
    position: 'Internal Engagement Specialist',
    direction: 'Пошук екіпірування та речей ',
  },
  {
    img: pisareva,
    name: 'Ксенія Писарева',
    position: 'Internal Communications Specialist',
    direction: 'Контент та пошуки екіпірування й речей',
  },
  {
    img: shybko,
    name: 'Олександра Шибко',
    position: 'Event Manager в Admin',
    direction: 'Пошук екіпірування та операційна підтримка',
  },
  {
    img: nagirnyak,
    name: 'Світлана Нагірняк',
    position: 'HR Administrator в Admin',
    direction: 'Логістика й пошук екіпірування та речей',
  },
  {
    img: yamnenko,
    name: 'Ямненко Катерина',
    position: 'People Partner в Admin',
    direction: 'Пошук екіпірування та речей ',
  },
  {
    img: novikova,
    name: 'Вікторія Новікова',
    position: 'Office Manager в Admin',
    direction: 'Пошук екіпірування та речей ',
  },
  {
    img: leonova,
    name: 'Олеся Леонова',
    position: 'Administrative Assistant в Admin',
    direction: 'Пошук екіпірування та речей ',
  },
];

const Team = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>Команда фонду</Title>
      <ul className={styles.list}>
        {teamList.map(({ name, img, position, direction }) => (
          <li key={name} className={styles.item}>
            <img className={styles.img} src={img} alt="team" width={120} height={120} />
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
            <p className={styles.direction}>{direction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
