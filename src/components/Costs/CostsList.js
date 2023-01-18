import CostItem from './CostItem';

import './CostsList.css';

const CostsList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">You didn't buy anything</h2>;
  }
  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostsList;