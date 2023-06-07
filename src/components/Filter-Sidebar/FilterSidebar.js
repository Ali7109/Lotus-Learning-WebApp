import React from 'react';

const FilterSidebar = ({ filterSidebarProps }) => {
  return (
    <div className='border border-2 bor-lightGray rounded p-2 p-sm-3'>
      <p>{filterSidebarProps.title}</p>

      {filterSidebarProps.filters.map((filter, index) => {
        return (
          <div key={index + filter.filterTitle}>
            <hr />
            <div>
              <p>{filter.filterTitle}</p>
              {filter.filterOptions.map((filterOption, index) => {
                return (
                  <div className='form-check my-2' key={index + filterOption}>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value={filterOption}
                      id={filterOption}
                    />
                    <label
                      className='form-check-label fs-14'
                      htmlFor={filterOption}
                    >
                      {filterOption}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className='d-flex'>
        <button className='btn'>Clear</button>
        <button className='btn'>Search</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
