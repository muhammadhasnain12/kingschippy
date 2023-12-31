import { MenueData, MenueData2, MenueDataRight } from '@/data/menue';
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";


const AccordionItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <RiArrowDropDownLine className='h-9 w-9 text-gray' />
      </div>
      {isOpen && (
        <div className="p-2">
          {items.map(item => (
            <div key={item.id} className="mb-2 flex justify-between gap-4">
              <div>
                <h3 className="text-md font-bold">{item.title}</h3>
                <p className='text-gray-500'>{item.description}</p>
              </div>
              <p className="font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const MenueAccordionRight = () => {

  return (
    <div className='py-0 md:py-6'>
      <div className="w-full mx-auto md:mt-8">
        {Object.keys(MenueDataRight).map(category => (
          <AccordionItem key={category} title={category} items={MenueDataRight[category]} />
        ))}
      </div>
    </div>
  )
}

export default MenueAccordionRight