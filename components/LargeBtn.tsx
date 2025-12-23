"use client";

interface IBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function LargeBtn({ children, onClick }: IBtnProps) {
  return (
    <button
      className="flex justify-center items-center px-6 py-3 bg-primary dark:bg-secondary"
      onClick={onClick}
    >
      <p className="text-title-lg leading-title-lg font-bold text-secondary dark:text-primary">
        {children}
      </p>
    </button>
  );
}

export { LargeBtn };
