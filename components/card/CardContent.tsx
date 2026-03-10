import { CardProps } from '../../types/Card';

export default function CardContent({ children }: CardProps) {
  return (
    <div className="px-5.5 py-4">
      {children}
    </div>
  );
}