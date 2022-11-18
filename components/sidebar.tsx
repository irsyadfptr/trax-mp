import NextImage from 'next/image'
import NextLink from 'next/link'

import {
    Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay
} from '@chakra-ui/layout';

import {
    MdHome, MdLibraryMusic, MdFavorite, MdPlaylistPlay, MdPlaylistAdd, MdSearch
} from 'react-icons/md';
import { usePlaylist } from '../lib/hooks';

const navMenu = [
  {icon: MdHome, text: "Home", route: "/"},
  {icon: MdSearch, text: "Search", route: "/search"},
  {icon: MdLibraryMusic, text: "My Library", route: "/library"},
];
const navPlaylist = [
  {icon: MdPlaylistAdd, text: "Create Playlist", route: "/"},
  {icon: MdFavorite, text: "Liked Songs", route: "/Favorites"},
]

const Sidebar = () => {   
  const { playlists } = usePlaylist()
    
    return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.text}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.text}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginTop="20px" marginBottom="20px">
          <List spacing={2}>
            {navPlaylist.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.text}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.text}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="71%" overflowY="auto" paddingY="10px">
          <List spaceing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist.id}>
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: '/playlist/[id]',
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
    )
}

export default Sidebar