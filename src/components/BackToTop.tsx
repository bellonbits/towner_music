import { ChevronUp } from 'lucide-react';

interface BackToTopProps {
  show: boolean;
  onClick: () => void;
}

const BackToTop = ({ show, onClick }: BackToTopProps) => {
  return (
    <button
      className={`back-to-top ${show ? 'show' : ''}`}
      onClick={onClick}
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTop;
