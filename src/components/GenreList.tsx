import React from 'react'
import useGenres from '../hooks/useGenres'
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/Image-Url';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {

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
                        <Text fontSize='lg'> {genre.name} </Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList