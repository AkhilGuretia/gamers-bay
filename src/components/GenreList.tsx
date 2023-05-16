import useGenres, { Genre } from '../hooks/useGenres'
import { HStack, Image, List, ListItem, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/Image-Url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {

    const { data, isLoading } = useGenres();

    return (
        <List>
            {isLoading && <GenreListSkeleton />}
            {data.map(genre => (
                <ListItem key={genre.id} paddingY="10px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button onClick={() => onSelectGenre(genre)}
                            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                            variant="link" fontSize="lg" >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList;