import { useEffect, useState } from 'react';
import { getCountries } from '../service/country-service';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getCountries()
      .then(data => setCountries(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { countries, error, isLoading };
};
