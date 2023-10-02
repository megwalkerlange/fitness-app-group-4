import react from 'react';

function currentSearchResults(value) {
  <ul className="list-group search-results">
    {value.results.map(result => (
      <li key={result} className="list-group-item">
        <p>{result} </p>
      </li>
    ))}
  </ul>;
}

export default currentSearchResults;
