const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <div className="countdown">
          <p>{hours}</p>
        </div>
        <p>:</p>
        <div className="countdown">
          <p>{minutes}</p>
        </div>
        <p>:</p>
        <div className="countdown">
          <p>{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCounter;
