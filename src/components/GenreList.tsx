import useGenres, { Genre } from '../hooks/useGenres'
import { HStack, Image, List, ListItem, Button, Heading } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/Image-Url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {

    const { data, isLoading } = useGenres();

    if (isLoading) return <GenreListSkeleton />;

    return (
        <>
            <Heading fontSize="2xl" marginTop={9} marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY="10px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button whiteSpace="normal" textAlign="left" onClick={() => onSelectGenre(genre)}
                                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                variant="link" fontSize="md" >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList;