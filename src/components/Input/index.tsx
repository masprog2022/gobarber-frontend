
import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core'

import { IconBaseProps } from 'react-icons';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name,  icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilld, setIsFilld] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {

    setIsFocused(false)
    setIsFilld(!!inputRef.current?.value)

  }, [])

  useEffect(() => {

     registerField({
       name: fieldName,
       ref: inputRef.current,
       path: 'value'
     })

  }
    ,[fieldName, registerField])

  return (
    <Container isFilld={isFilld} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      defaultValue={defaultValue}
      ref={inputRef}
      {...rest} />
      {error}
    </Container>
  )
}

export default Input;
