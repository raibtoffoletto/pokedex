import Fallback from '@components/Fallback';
import PageTitle from '@components/PageTitle';
import List from '@components/Pokedex/List';
import { usePokedex } from '@hooks/usePokedex';

export default function Pokedex() {
  const { isReady } = usePokedex();

  return (
    <>
      <PageTitle title="Pokemon List" />

      {isReady ? <List /> : <Fallback />}
    </>
  );
}
