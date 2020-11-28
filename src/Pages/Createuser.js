import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {motion} from 'framer-motion'
import { TextField, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
    logo: {
        position: 'absolute',
        top: 20,
        left: 40,
        zIndex: 1,
        opacity: 0

    },

    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#F8F8FF'
    },
    btn: {
       width: 300,
       color: 'white'
    },

    field: {
       width: '50%'
    }
})


function Createuser(prop) {
    const classes = useStyles()
    const [isanimate, setanimate] = useState(false)
    const [user, setuser] = useState('')

     const submitUser = async() => {
       await localStorage.setItem('MytodotaskUser', user)
        return prop.history.replace('/createtask')
     }

    useEffect(() => {
        setanimate(true)
    }, [])
    return (
        <div>
           <motion.div
         animate={{ x: isanimate ? 200 : 0, opacity: isanimate ? 1 : 0}}  
         transition={{ ease: 'easeOut', duration: '2'}}
         className={classes.logo}>
            Todobox
        </motion.div>
            <div className={classes.root}>
                <div className={classes.field} style={{fontSize: 30, margin: 5}}>Create User</div>
                <motion.div
                 className={classes.field}
                animate={{ opacity: isanimate ? 1 : 0 }}
                transition={{ ease: 'easeIn', duration: '2'}}
            >
                    <TextField 
                    id="filled-basic" 
                    label="createUser"
                    placeholder='enter any username eg. mario23'
                     variant="filled" fullWidth={true}  
                     value={user}
                     onChange={(e) => {setuser(e.target.value)}}
                     size="medium"
                     margin= 'dense' />
                </motion.div>
                <motion.div className={classes.field}>
                    <Button fullWidth={true} color="primary" variant="contained" size='large' disabled={user === '' ? true : false} onClick={submitUser}>
                        Next
                    </Button>
                 </motion.div>
            </div>
        </div>
    )
}

export default withRouter(Createuser)
