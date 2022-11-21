import { GradientLayout } from "../../components/gradientLayout"
import SongTable from "../../components/songsTable"
import { validateToken } from "../../lib/auth"
import prisma from "../../lib/prisma"

const randomBgColor = id => {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        'gray',
        "cyan",
        "purple",
        "pink",
    ]
    return colors[id-1] || colors[Math.floor(Math.random() * colors.length)]
}
    

const Playlist = ({playlist}) => {
    const color = randomBgColor(playlist.id)

    return (        
        <GradientLayout 
        color={color} 
        roundImage={false}
        title={playlist.name}
        subtitle="playlist" 
        description={`${playlist.songs.length} songs`}
        image={`https://picsum.photos/400?random=${playlist.id}`}>
            <SongTable songs={playlist.songs}/>
        </GradientLayout>
    )
}

export const getServerSideProps = async ({query, req}) => {
    let user;

    try {
        user = await validateToken(req.cookies.TRAX_ACCESS_TOKEN)
    } catch (error) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false
            }
        }
    }


    // const {id} = validateToken(req.cookies.TRAX_ACCESS_TOKEN)
    const [playlist] = await prisma.playlist.findMany({
        where: {
            id: +query.id,
            userId: user.id,
        },
        include: {
            songs: {
                include: {
                    artist: {
                        select: {
                            name: true,
                            id: true,
                        }
                    },
                },
            },
        },
    })

    return {
        props: {
            playlist,
        },
    }
}

export default Playlist