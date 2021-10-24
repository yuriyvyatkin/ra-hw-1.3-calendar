import getDays from '../getDays';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

function TableBody({ date }) {
  const currentDay = date.getDate();

  const days = getDays(date);
  const lastChildIndex = days.length - 1;

  return (
    <tbody>
      {days.map((week, index) => {
        return (
          <TableRow
            week={week}
            currentDay={currentDay}
            key={week.join('')}
            firstWeek={index === 0}
            lastWeek={index === lastChildIndex}
          />
        );
      })}
    </tbody>
  );
}

TableBody.propTypes = propTypes;

export default TableBody;
