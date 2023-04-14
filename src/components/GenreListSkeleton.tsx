import { HStack, List, ListItem, SkeletonText } from "@chakra-ui/react"

const GenreListSkeleton = () => {
    return (
        <List>
            <ListItem>
                <SkeletonText mt='4' noOfLines={20} spacing='8' skeletonHeight='4' />
            </ListItem>
        </List>
    )
}

export default GenreListSkeleton;