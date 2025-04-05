"use client";

const FilteredError = ({ error }) => {
  return (
    <div id="error">
      <h2>An Error occurred!</h2>
      <p>Invalid Path. {error.message}</p>
    </div>
  );
};

export default FilteredError;
