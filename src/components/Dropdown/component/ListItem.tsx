import React from 'react'
import { MenuItem, MenuItemProps} from '@mui/material'
import { ListItemProps } from './types'

export const ListItem = <C extends React.ElementType>(props: MenuItemProps<C, {component?: C}> & ListItemProps ) => {
  return <MenuItem {...props}>{props.children}</MenuItem>
}
