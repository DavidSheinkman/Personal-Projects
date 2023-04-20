import styles from './TipsList.module.css';

function TipsList(props) {
  console.log(props)
  const tips = props.tips.map((tip) => (
    <li key={tip.id}>{tip.company}</li>
  ));

  return <ul className={styles.list}>{tips}</ul>;
}

export default TipsList;
