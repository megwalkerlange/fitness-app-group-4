import react from 'react';

function currentSearchResults(value) {
  <ul className="list-group search-results">
    {value.data.map(result => (
      <li key={result} className="list-group-item">
        <p>{result.name} </p>
      </li>
    ))}
  </ul>;
}

export default currentSearchResults;
