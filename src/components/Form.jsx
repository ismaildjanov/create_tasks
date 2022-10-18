import React, { useState } from 'react'
import styled from 'styled-components'

function Form({cancelForm, saveForm}) {

  const [inputValue, setInputValue] = useState('');

  return (
    <Wrapper>
        <Input value={inputValue} onChange={({target}) => setInputValue(target.value)} type="text" />

        <ButtonWrapper>
            <Button bgColor="#F2A762" onClick={cancelForm}>Cancel</Button>
            <Button bgColor="#62B6F2" onClick={() => {
              saveForm(inputValue)
              setInputValue('')
              }}>Save</Button>
        </ButtonWrapper>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.div`
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 27px;

  border: 0.5px solid #AFACAC;
  border-radius: 4px;
  outline: none;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-top: 12px;
`;

const Button = styled.button`
  height: 24px;
  width: 100%;
  background: ${(props) => props?.bgColor};
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;
`;
