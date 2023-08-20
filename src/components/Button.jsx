const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-1 border-coral-red bg-coral-red rounded-full text-white">
      {label}
      <img src={iconURL} alt="Arrow Right" className="ml-2 rounded-full" />
    </button>
  );
};

export default Button;
