const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* Generate 15 fake cards (5 columns x 3 rows) */}
      {Array(15).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-badge"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;