

const Checkbox = ({ isChecked, onClick }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* O Efeito de Pulse */}
      {isChecked && (
        <div className="absolute h-full w-full animate-ping rounded-full bg-betel-red opacity-20 [animation-fill-mode:forwards] [animation-iteration-count:1]"></div>
      )}

      {/* Botão */}
      <button
        onClick={(e) => {
          if (onClick) onClick(e);
        }}
        type="button"
        className={`group relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-betel-red bg-[#141011] outline-none transition-colors duration-300 md:h-[60px] md:w-[60px]`}
      >
        <img
          src="/betel-favicon.svg"
          alt=""
          className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 brightness-0 invert ${
            isChecked 
              ? 'scale-100 opacity-100' 
              : 'scale-90 opacity-0 group-hover:opacity-40 group-hover:scale-100'
          }`}
        />
      </button>
    </div>
  );
};

export default Checkbox;
