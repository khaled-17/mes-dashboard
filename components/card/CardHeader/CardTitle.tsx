import { CardProps } from '../../../types/Card';

export default function CardTitle({ children }: CardProps) {
  return (
    <div className="flex items-center gap-3 py-3">
      {children}
    </div>
  );
}
