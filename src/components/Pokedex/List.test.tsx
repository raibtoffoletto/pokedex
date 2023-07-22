import { render, screen } from '@tests';
import { describe, it, vi } from 'vitest';
import List from './List';

const collectionSize = Math.floor(Math.random() * 99);

const pokemons: IPokemon[] = new Array(collectionSize)
  .fill(null)
  .map((_, i) => ({ id: i + 1, name: `pokemon${i + 1}` }));

vi.mock('@hooks/usePokedex', () => {
  return {
    usePokedex: () => ({ pokemons, isLastPage: false }),
  };
});

describe('pokemon list component', () => {
  beforeEach(() => {
    const mockIO = vi.fn();

    mockIO.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
    });

    window.IntersectionObserver = mockIO;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render pokemon list', () => {
    const { container } = render(<List />);

    for (let i = 1; i <= collectionSize; i += 1) {
      expect(
        screen.getByText(new RegExp(`^pokemon${i}$`, 'i'))
      ).toBeInTheDocument();
    }

    expect(
      container.getElementsByClassName('MuiBox-root')?.[0]?.children?.length
    ).toEqual(collectionSize);
  });

  it('should have the loader present', async () => {
    render(<List />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
