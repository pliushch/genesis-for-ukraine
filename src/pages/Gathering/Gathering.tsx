import cn from 'classnames';
import FooterGathering from 'src/components/Gathering/FooterGathering';
import EntryScreen from 'src/components/Gathering/EntryScreen';
import AboutGathering from 'src/components/Gathering/AboutGathering';
import Companies from 'src/components/Gathering/Companies';
import Answers from 'src/components/Gathering/Answers';
import styles from './Gathering.module.scss'
import Slider from 'src/components/Gathering/Slider';

const Gathering = () => {
  return (
    <div className={cn(styles.gathering, styles.loaded)}>
      <EntryScreen />
      <AboutGathering />
      <Slider />
      <Companies />
      <Answers />
      <FooterGathering />
    </div>
  );
};

export default Gathering;