import { motion } from 'framer-motion';
import { useState } from 'react';

const pointsData = [
  { title: 'Convenience', details: 'A rent-a-car website offers the convenience of booking a vehicle from the comfort of your home or anywhere with an internet connection. It saves time and eliminates the need to visit a physical rental office' },
  { title: 'Wide Selection', details: 'Customers can browse and choose from a wide selection of vehicles, including various makes, models, sizes, and features, to suit their specific needs and preferences.' },
  { title: 'Transparent Pricing', details: 'Rent-a-car websites often provide transparent pricing with clear breakdowns of rental fees, taxes, and additional charges, helping customers understand the total cost upfront.' },
  { title: 'Online Reservations', details: 'Users can easily make online reservations, select pickup and drop-off locations, specify rental dates and times, and even add optional extras like GPS or child seats.' },
  { title: 'Availability Information', details: ' Real-time availability information ensures that customers know which vehicles are currently in stock and can plan their trips accordingly.' },
  { title: 'Flexible Booking', details: 'Customers have the flexibility to choose rental durations that suit their needs.' },
  { title: 'Customer Reviews', details: 'Many rent-a-car websites include customer reviews and ratings, allowing prospective renters to make informed decisions based on the experiences of previous customers.' },
  { title: 'Mobile Accessibility', details: 'Mobile-friendly websites and dedicated apps make it easy for users to book cars on the go, enhancing accessibility and convenience.' },
  { title: 'Payment Options', details: 'Multiple payment options, including credit cards, debit cards, and online payment gateways, provide flexibility for customers to pay in their preferred method.' },
  { title: 'Insurance Coverage', details: 'Information about available insurance options and coverage details helps customers make choices that suit their level of protection.' },
];

const RentServices = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(event.target.value);
    if (!isNaN(selectedIndex)) {
      setSelectedService(selectedIndex);
    }
  };

  return (
    <div className="container mx-auto py-4">
      <div className="max-w-md mx-auto">
        <select
          className="block w-full mx-auto border-gray-300 rounded-sm shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          value={selectedService !== null ? selectedService.toString() : ''}
          onChange={handleServiceSelect}
        >
          <option value="">View Our Services</option>
          {pointsData.map((point, index) => (
            <option key={index} value={index.toString()}>
              {point.title}
            </option>
          ))}
        </select>
        {selectedService !== null && (
          <motion.div
            className="mt-4 p-4 bg-red-700 rounded-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h2 className="text-xl font-semibold">{pointsData[selectedService].title}</h2>
            <p className="mt-2">{pointsData[selectedService].details}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RentServices;
