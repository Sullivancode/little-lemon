import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './CustomDropdown.module.css'; // Import your CSS file

const CustomDropdown = ({ options, onSelect, placeholder, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={Styles.customDropdown}>
      <div className={Styles.dropdownHeader} onClick={handleToggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {isOpen && (
        <ul className={Styles.dropdownList}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelectOption(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
};

export default CustomDropdown;
