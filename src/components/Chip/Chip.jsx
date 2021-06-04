const Chip = ({ label }) => {
  return (
    <div className="h-4 border-white border-2 rounded-lg text-white p-4 mr-2 mt-2 inline-flex items-center text-center">
      {label}
    </div>
  );
};

export default Chip;
