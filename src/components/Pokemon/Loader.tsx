import { usePokedex } from '@hooks/usePokedex';
import { Box, CircularProgress } from '@mui/material';
import { useEffect, useRef } from 'react';

export default function Loader() {
  const loaderRef = useRef<Element | null>(null);
  const { loadNextPage } = usePokedex();

  useEffect(() => {
    const handleObserver = (el: IntersectionObserverEntry[]) => {
      if (!!el?.[0]?.isIntersecting) {
        loadNextPage();
      }
    };

    let _ref: Element | null;
    const observer = new IntersectionObserver(handleObserver);

    if (!!loaderRef.current) {
      _ref = loaderRef.current;

      observer.observe(loaderRef.current);
    }

    return () => {
      if (!!_ref) {
        observer.unobserve(_ref);
      }
    };
  }, [loadNextPage]);

  return (
    <Box
      ref={loaderRef}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 56,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
