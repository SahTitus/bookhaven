import { findDuplicates, removeDuplicates } from '@utils/helpers';
import { useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

export const InputWithDropdown = ({ label, options, isRequired }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [duplicateValues, setDuplicateValues] = useState([])

  const handleRemoveDuplicates = () => {
    const uniqueOptions = removeDuplicates(inputValue)
    setInputValue(uniqueOptions)
    setDuplicateValues([]);
  }

  const handleInputChange = (e) => {

      setInputValue(e.target.value);
    
    setShowDropdown(true); // Show dropdown when typing
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setShowDropdown(false);
  };

  return (
    <div className="relative" >
      <input
        type={'text'}
        placeholder={label}
        className="w-full px-4 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        required={isRequired}
        onChange={handleInputChange}
        value={inputValue}
      />

      <div className="z-20 absolute right-0 top-0 mt-10 w-full bg-white rounded-md shadow-lg">

        {showDropdown && (
          <ul className='bg-slate-200 max-h-80 overflow-y-scroll'>
            {options?.map((option, index) => (
              <li
                key={index}
                className={` px-4 py-2 cursor-pointer  'hover:bg-slate-100'  `}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ArrowRight
        onClick={handleDropdownToggle}
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer"
      />
    </div>
  );
};
