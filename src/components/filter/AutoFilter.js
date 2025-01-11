"use client"
import { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { useGlobalContext } from '@/src/lib/GlobalContext'
import { autoBodyStyles, colors } from '@/src/data/auto'
import Select from 'react-select'
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2.5rem;
  padding: 1.5rem;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;



const SearchInput = styled.input`
  width: 80%;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 2px solid transparent;
  background: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchButton = styled.button`
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FilterSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const BasicFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: ${props => props.showAdvanced ? '1rem' : '0'};
`;

const AdvancedFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  transition: all 0.3s ease;
  max-height: ${props => props.show ? '1000px' : '0'};
  overflow: hidden;
  opacity: ${props => props.show ? '1' : '0'};
`;

const ToggleButton = styled.button`
  background: transparent;
  color: #666;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    color: #333;
  }
`;


export default function AutoFilter2() {
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const [showAdvanced, setShowAdvanced] = useState(false)


  const { brands } = useGlobalContext()

  const searchOnChange = (e) => {
    // ... (copy the searchOnChange function)
  }

  const handleSelectBrand = (item) => {
    // ... (copy the handleSelectBrand function)
  }

  const handleKeyDown = (e) => {
    // ... (copy the handleKeyDown function)
  }

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder='Marka, Rəng, Kuza, Yanacaq ...'
          onChange={searchOnChange}
          onKeyDown={handleKeyDown}
          value={search}
        />
        <SearchButton>
          <SearchIcon className="w-5 h-5" />
          <span>Axtar</span>
        </SearchButton>
      </SearchContainer>


      <div>
        <FilterSection>
          <BasicFilters>
            <Select
              placeholder="Marka"
              options={brands.map(brand => ({ value: brand.id, label: brand.name }))}
              isSearchable
            />
            <Select
              placeholder="Model"
              options={[]} // Populate based on selected brand
              isSearchable
            />
            <Select
              placeholder="İl-dən"
              options={Array.from({ length: 2024 - 1960 }, (_, i) => ({
                value: 2024 - i,
                label: `${2024 - i}`
              }))}
              isSearchable
            />
            <Select
              placeholder="İl-ə"
              options={Array.from({ length: 2024 - 1960 }, (_, i) => ({
                value: 2024 - i,
                label: `${2024 - i}`
              }))}
              isSearchable
            />
          </BasicFilters>

          <ToggleButton onClick={() => setShowAdvanced(!showAdvanced)}>
            {showAdvanced ? '- Ətraflı axtarış' : '+ Ətraflı axtarış'}
          </ToggleButton>

          <AdvancedFilters show={showAdvanced}>
            <Select
              placeholder="Mühərrik həcmi-dən"
              options={Array.from({ length: 60 }, (_, i) => ({
                value: (i + 1) * 0.1,
                label: `${(i + 1) * 0.1}L`
              }))}
              isSearchable
            />
            <Select
              placeholder="Mühərrik həcmi-ə"
              options={Array.from({ length: 60 }, (_, i) => ({
                value: (i + 1) * 0.1,
                label: `${(i + 1) * 0.1}L`
              }))}
              isSearchable
            />
            <Select
              placeholder="Qiymət-dən"
              options={Array.from({ length: 100 }, (_, i) => ({
                value: (i + 1) * 1000,
                label: `${(i + 1) * 1000}₼`
              }))}
              isSearchable
            />
            <Select
              placeholder="Qiymət-ə"
              options={Array.from({ length: 100 }, (_, i) => ({
                value: (i + 1) * 1000,
                label: `${(i + 1) * 1000}₼`
              }))}
              isSearchable
            />
            <Select
              placeholder="Sürətlər qutusu"
              options={[
                { value: 'manual', label: 'Mexaniki' },
                { value: 'automatic', label: 'Avtomatik' },
                { value: 'robot', label: 'Robot' },
                { value: 'variator', label: 'Variator' }
              ]}
              isSearchable
            />
          </AdvancedFilters>
        </FilterSection>
      </div>


      {isSearching && searchResults.length > 0 && (
        <div className='absolute top-full left-0 w-[80%] mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>
          <p className='text-gray-600 text-sm font-medium px-4 pb-2 border-b'>Axtarış nəticəsi</p>
          <div className='max-h-[300px] overflow-y-auto'>
            {searchResults.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelectBrand(item)}
                className={`block px-4 py-2 transition-colors cursor-pointer ${selectedIndex === index
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-50'
                  }`}
              >
                <span className='text-base'>{item.displayName}</span>
                <span className='text-xs text-gray-500 ml-2'>
                  {item.type === 'brand' ? 'Marka' :
                    item.type === 'color' ? 'Rəng' :
                      'Kuzov'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
} 