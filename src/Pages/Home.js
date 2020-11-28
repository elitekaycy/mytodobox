import React, {useEffect, useState} from 'react'
import { Button  } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import heroimg from '../Components/images/heroimg.jpg'
import { motion } from 'framer-motion'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
    logo: {
        position: 'absolute',
        top: 20,
        left: 40,
        color: 'white',
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
        backgroundImage: 'url('+heroimg+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
    },

    heroheader: {
        fontSize: '60px',
        color: 'white',
        margin: 8,
        zindex: 1,
        lineHeight: 1.5,
        opacity: 0
    },

    herosubheader: {
        color: 'white',
        zindex: 1,
        margin: 8,
        textAlign: 'center',
        maxWidth: 500,
        opacity: 0,
        transform: 'translateY(100)'
    },
    btn: {
       width: 300,
       color: 'white'
    }
})

function Home(props) {
    const classes =  useStyles()
    const [isanimate, setanimate] = useState(false)

    const loadpage = () => {
        const user = localStorage.getItem('MytodotaskUser')
        //const task = localStorage.getItem('Mytodotask').toString()
 
        if(user !== null)
        {
            props.history.replace('/todo')
        }
    }

    useEffect(() => {
        setanimate(true)
    }, [])

    const pushRoute = () => {
        return props.history.replace('/createuser')
    }

    return (
        <div>
            {loadpage()}
        <motion.div
         animate={{ x: isanimate ? 200 : 0, opacity: isanimate ? 1 : 0}}  
         transition={{ ease: 'easeOut', duration: '2'}}
         className={classes.logo}>
            Todobox
        </motion.div>
        <div className={classes.root}>
            <motion.div
             animate={{opacity: isanimate ? 1 : 0}} 
             transition={{ ease: 'easeIn', duration: 2}}
              className={classes.heroheader}>
                  Todo box  
            </motion.div>

            <motion.div 
            animate={{ y: isanimate ? 10 : 0, opacity: isanimate ? 1 : 0}}
            transition={{ease: 'easeIn', duration: 1}}
            className={classes.herosubheader}>Fugiat sint laboris in sunt quis ullamco quis eu laboris sit et mollit occaecat. Eu sint aute ullamco non amet esse anim eu sint. Ad ea dolore labore occaecat voluptate tempor laborum cillum ullamco id. Laborum duis nostrud ea cupidatat duis reprehenderit et.</motion.div>
           
           
             <motion.div
              animate={{ y: isanimate ? 15 : 0, opacity: isanimate ? 1 : 0}}
              whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 }
              }}
              transition={{ease: 'easeIn', duration: 1}}
              className={classes.btn}><Button variant="contained" size="medium" color="secondary" fullWidth={true} onClick={pushRoute}>Get started</Button></motion.div>
        </div>
        </div>
    )
}

export default withRouter(Home)
