import { useState } from "react";

type Props = {
  name: string;
  options: string[];
  query: string;
  onQueryChange: (query: string) => void;
};

const TypeaheadDropdown = ({ name, options, query, onQueryChange }: Props) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onQueryChange(value);

    // Filter options based on the query
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setIsOpen(value.length > 0);
  };

  const handleOptionClick = (option: string) => {
    onQueryChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        name={name}
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full py-2 px-4 border flex flex-col items-center justify-center border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 text-slate-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:text-slate-300"
        placeholder="Type to search..."
      />
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-slate-600"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeaheadDropdown;
