const DiagonalLines = () => {
  return (
    <div className="absolute left-0 top-0 flex gap-4 opacity-90">
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className="h-[600px] w-2 bg-landi-red"
          style={{
            transform: 'skewX(-15deg)',
          }}
        />
      ))}
    </div>
  );
};

export default DiagonalLines;
