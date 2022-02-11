import React from 'react';
import { Form } from './styles';
import logInImg from '../../assets/images/log-in.svg';

type FormProps = {
  logo: boolean
  name: string
  inputPlaceholder: string
}

export function FormButton(props: FormProps) {
  return (
    <Form>
      <input type="text" placeholder={props.inputPlaceholder}/>
      <button
        type='submit'
      >
        <img
          src={ logInImg }
          alt=""
          hidden={!props.logo}
        />
        { props.name }
      </button>
    </Form>
  );
}
