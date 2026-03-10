import { CardProps } from '../../../types/Card';

function CardHeader({children}: CardProps) {
  return (
    <header className="pr-5 pl-10 border-b border-gray-200 flex justify-between items-center">
        {children}
    </header>
  )
}

export default CardHeader
