// Card.jsx
const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center rounded-3xl border border-betel-ice/10 bg-betel-graphite p-8 shadow-xl md:flex-row md:p-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
