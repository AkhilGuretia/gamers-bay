import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/Image-Url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'
import Emojis from './Emojis'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden" >
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <Emojis rating={game.rating_top} />
            </CardBody>
        </Card>
    )
}

export default GameCard