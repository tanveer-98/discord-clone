import React from 'react'
import Box from '@mui/material/Box';
import {styled} from '@mui/system';

const BoxWrapper = styled('div')({
    width: '100%',
    height : '100%',
    display: 'flex',
    alignItems : 'center',
    justifyContent: 'center',
    background: 'blue'
})
interface IAuthBox{
    children : React.ReactNode
}
const AuthBox = ({children} : IAuthBox) => {
  return (
    <div>
        <BoxWrapper>
            <Box
            sx={{
                width: 700,
                height :"100%", 
                bgcolor : '#36393f',
                borderRadius : '5px',
                boxShadow : '0 2px 10px 0 rgb(0 0 0/ 20%)',
                display : 'flex',
                flexDirection : 'column',
                padding : '25px'
            }}
            >
                {children}
            </Box>
        </BoxWrapper>

    </div>
  )
}

export default AuthBox