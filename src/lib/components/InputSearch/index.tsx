import React, { useState, useRef, useCallback, useEffect } from 'react';

import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import { useStyles } from './styles';

interface Props {
  loading: boolean;
  results?: number;
  searchValue(value: string): void;
  searchClear(): void;
}

const Search: React.FC<Props> = ({ loading, searchValue, searchClear }) => {
  const [isLoading, setIsLoading] = useState(loading);
  const classes = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const debounce = useCallback((func: Function, wait: number): Function => {
    let timeout: NodeJS.Timeout;

    return function executedFunction(...args: number[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const returnedFunction = debounce((event: any) => {
    /* Aqui podemos inserir a lógica
    | para realizar as buscas em
    |  nosso back-end.
    */
    if (event?.target?.value) {
      setIsLoading(true);
      searchValue(event.target.value);
    }
  }, 800);

  const handleClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    searchClear();
  }, [searchClear]);

  return (
    <Box className={classes.serchContainer}>
      <TextField
        label="Pesquisar"
        margin="normal"
        variant="outlined"
        type="text"
        className={classes.search}
        onKeyUp={(event) => returnedFunction(event)}
        inputRef={inputRef}
      />
      {inputRef.current && inputRef?.current?.value?.length > 0 && (
        <Button
          variant="text"
          style={{
            marginLeft: 1,
            height: 56,
          }}
          disabled={isLoading}
          onClick={handleClear}
        >
          <Tooltip
            title="Limpar campo de pesquisa"
            aria-label="Limpar campo de pesquisa"
          >
            {isLoading ? (
              <CircularProgress style={{ width: 20, height: 20 }} />
            ) : (
              <Clear style={{ width: 20, height: 20 }} />
            )}
          </Tooltip>
        </Button>
      )}
    </Box>
  );
};

export default Search;
