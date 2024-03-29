import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/layout";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [...Array(20).keys()];

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
