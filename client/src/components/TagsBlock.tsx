import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Skeleton from '@mui/material/Skeleton'

export const SideBlock = (props: {
  items: ['react', 'typescript', 'заметки']
  isLoading: boolean
}) => {
  return (
    <div>
      {' '}
      <Paper>
        <Typography variant='h6'>
          <div>tegs</div>
        </Typography>
        <div>hey</div>
      </Paper>
    </div>
    // <SideBlock title='Тэги'>
    //   <List>
    //     {(isLoading ? [...Array(5)] : items).map((name, i) => (
    //       <a style={{ textDecoration: 'none', color: 'black' }} href={`/tags/${name}`}>
    //         <ListItem key={i} disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon>
    //               <TagIcon />
    //             </ListItemIcon>
    //             {isLoading ? <Skeleton width={100} /> : <ListItemText primary={name} />}
    //           </ListItemButton>
    //         </ListItem>
    //       </a>
    //     ))}
    //   </List>
    // </SideBlock>
  )
}
