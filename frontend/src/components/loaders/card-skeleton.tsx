const CardSkeleton = () => {
  return (
    <div className="flex items-center mt-4 space-x-3 animate-pulse">
      <div className="avatar bg-gray-200 h-12"></div>
      <div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
