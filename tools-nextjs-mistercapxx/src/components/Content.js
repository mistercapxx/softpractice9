import contentStyle from '@/styles/Content.module.css';
import Card from './Card.js';
import travels from '@/data/travels.js';

const travelCards = travels.map((travelDestination) => {
  return (
    <div key={travelDestination.id}>
      <Card data={travelDestination} />
      <hr className={contentStyle.divider} />
    </div>
  );
});

export default function Content() {
  return travelCards;
}

