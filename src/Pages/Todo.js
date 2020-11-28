import React, {useEffect} from 'react'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid } from '@material-ui/core'
import TodoNav from '../Components/TodoNav'
import TodoMain from '../Components/TodoMain';
import { makeStyles } from '@material-ui/styles'
import {withRouter} from 'react-router-dom'

const useStyle = makeStyles({
    root: {
        backgroundColor: '#F8F8FF',
        minHeight: '100vh'
    }
})

function Todo(prop) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const classes = useStyle()
  
    const loadpage = () => {
        const user = localStorage.getItem('MytodotaskUser')
        //const task = localStorage.getItem('Mytodotask').toString()
        if(user === null)
        {
            prop.history.replace('/')
        }
    }

    useEffect(() => {
        loadpage()
    }, [])

    return (
        <Grid container direction='row' justify='center' alignItems='flex-start' wrap className={classes.root}>
         <Grid item xs={12} sm={12} md={2} lg={2}>
              <TodoNav breakpoint={ matches ? '' : 'sm'} />
         </Grid>
         <Grid item xs={12} sm={12} md={10} lg={10} justify='center'>
            <TodoMain/> 
         </Grid>
        </Grid>

    )
}

export default withRouter(Todo)
