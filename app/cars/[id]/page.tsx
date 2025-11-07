import { carsData } from '@/data/carsData';
import CarDetailClient from '@/components/CarDetailClient';

export function generateStaticParams() {
  return carsData.map((car) => ({
    id: car.id.toString(),
  }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = carsData.find(c => c.id === Number(params.id));

  if (!car) {
    return null;
  }

  const similarCars = carsData
    .filter(c => c.id !== car.id && (c.make === car.make || c.location === car.location))
    .slice(0, 3);

  return <CarDetailClient car={car} similarCars={similarCars} />;
}
