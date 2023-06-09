import React from 'react'
import {styled} from '@mui/system';

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
})

const Label = styled('p')({
    color : '#b9bbbe',
    textTransform : 'uppercase',
    fontWeight : '600',
    fontSize : '16px'
})

const Input = styled('input')({
    flexGrow : 1,
    height: '40px',
    border : '1px solid black ',
    borderRadius : '5px',
    color : '#dcddde',
    background:"#35393f",
    margin : 0,
    fontSize : '16px',
    padding : "0px 5px"

})


const InputWithLabel = (props : any) => {
  const {label , setValue , value , type , placeholder } = props;
  const handleValueChange = (event : any )=>{
    setValue(event.target.value);
  }
    return (

        <Wrapper>

            <Label>{label}</Label>
            <Input 
            type = {type}
            value ={value}
            placeholder = {placeholder}
            onChange={handleValueChange}/>
            
        </Wrapper>
        
  )
}

export default InputWithLabel