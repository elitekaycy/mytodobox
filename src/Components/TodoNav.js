import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import DehazeIcon from '@material-ui/icons/Dehaze';
import CancelIcon from '@material-ui/icons/Cancel';
import { SwipeableDrawer } from '@material-ui/core';
import { IconButton } from '@material-ui/core'
import { TodoContext } from '../Context/TodoProv';
import SideTodoItemContainer from './SideTodoItemContainer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {withRouter} from 'react-router-dom';


const useStyle =  makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        fontSize: '25px',
        fontWeight: 'bold',
        margin: 10,
    },

    subheader: {
      fontWeight: 'regular',
      margin: 10
    },

    tasknav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },

    taskheader: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },

    rootlg: {
        position: 'fixed',
        width: '300px',
        height: '100vh',
        backgroundColor: 'white',
       
        display: 'flex',
        flexDirection: 'column',
         justifyContent: 'flex-start',
    },
    headerlg: {
        fontSize: 25,
        fontWeight: 'bold',
        height: 200,
        width: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F363F',
        color: 'white',
    },

    tasknavlg: {
        paddingTop: 15,
        display: 'flex',
        flexDirection:  'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    tasks: {
        marginTop: 20,
        width: '100%',
        display: 'flex',
        direction: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflowY: 'auto'
    },

   

    cancel: {
        position: 'absolute',
        top: 15,
        left: 15
    },

    rootcolor: {
        backgroundColor: 'white'
    },

    logout: {
        position: 'absolute',
        top: 150,
        left: 200
    }
})


function TodoNav(prop) {

    const [isopen, setisopen] = useState(false)
    const todos = useContext(TodoContext)
    const { breakpoint } = prop

    const Exitapp = async() => {
     await localStorage.removeItem('MytodotaskUser')
     await localStorage.removeItem('Mytodotask')

     prop.history.replace('/')
    }

    const RenderNav = () => {
      if(breakpoint === 'sm')
          return Todosm()
      else
          return Todolg()
    }

     const Todosm = () => {
         return (
             <div>
            <SwipeableDrawer open={isopen} swipeAreaWidth={5} onOpen={(e) => console.log(e)} onClose={(e) => console.log(e)}>
            {Todolg(<CancelIcon onClick={() => {setisopen(false)}} />)}
            </SwipeableDrawer>
            <div className={classes.root}>
            <div className={classes.tasknav}>
                <div>Todobox</div>
            <IconButton color="primary" onClick={() => {setisopen(true)}}><DehazeIcon /></IconButton>
            </div>
            <div className={classes.subheader}>You have {todos[0].length} tasks remaining in {localStorage.getItem('Mytodotask').toString()}</div>
        <div className={classes.taskheader}>{localStorage.getItem('Mytodotask').toString()}</div>
        </div>
        </div>
         )
     }

     const Todolg = (cancel = '') => {
         return (
            <div className={classes.rootlg}>
            <div className={classes.headerlg}>
             <div>Welcome {localStorage.getItem('MytodotaskUser').toString()}</div>
                <div className={classes.cancel}>{cancel}</div>
                <div className={classes.logout}>
                    <IconButton color="primary">
                    <ExitToAppIcon style={{color: 'white'}} onClick={Exitapp}/>
                    </IconButton>
                    </div>
            </div>
            <div className={classes.tasknavlg}>
         <div style={{fontWeight: 'bold'}}>{localStorage.getItem('Mytodotask').toString()}</div>
            </div>
            <div className={classes.tasks}>
                <SideTodoItemContainer />
            </div>
        </div>
         )
     }

    const classes = useStyle()
    return (
       RenderNav()
    )
}

export default withRouter(TodoNav)
