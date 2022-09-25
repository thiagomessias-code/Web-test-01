import React from 'react'
import { Container } from './styles'
import { useForm } from 'react-hook-form'
import Button from '../Button';
export default function Form() {
  
  
const {register, formState:{errors}, handleSubmit} = useForm();

const onSubmit = (e) => {
  let telefono = "351965752380";
  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
      NOME: %0A
      ${e.name}
      %0A
      E-MAIL: %0A
      ${e.email}
      %0A
      CONTATO: %0A
      ${e.contato}
      %0A
      CÓDIGO: %0A
      ${e.codigo}
      %0A
      OPERADORA: %0A
      ${e.operadora}`;
      window.open(url)
  console.log(e)
}

  

  return (
    <Container>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)} >
            <fieldset>
              <legend>Teste a cobertura na sua morada e descubra as ofertas exclusivas que temos para si!</legend>
              <div className="mb-3">
                
                <label className='form-label'>Nome</label>
                <input type="text" {...register("name", { required: true })} 
              className="form-control" />
               <small>{errors.name?.type === 'required' && "*Campo nome Obrigatorio"}</small>
              </div>
              <div className="mb-3">
                <label  className="form-label">E-MAIL</label>
                <input type="email"  {...register("email", { required: "*Campo e-mail Obrigatorio"} )} className="form-control" />
                <small>{errors.email?.message}</small>
                
              </div>
              <div className="mb-3">
                <label  className="form-label">CONTATO</label>
                <input  className="form-control"  {...register("contato", { required: "*Campo e-mail Obrigatorio", maxLength: 12})}/>
                <small>{errors.contato?.type === "maxLength" && "Digite um numero válido"}</small>
              </div>
              <div className="mb-3">
                <label  className="form-label">CÓDIGO POSTAL</label>
                <input  className="form-control"  {...register("codigo", {required: "Campo Postal Obrigatório", maxLength: 7})}/>
                <small>{errors.codigo?.type === "maxLength" && "Digite um numero válido"}</small>
              </div>
              <div className="mb-3">
                <label  className="form-label">QUAL A SUA OPERADORA ATUAL?</label>
                <input className="form-control"  {...register("operadora")}/>
              </div>
              <div className="mb-3">
                
              </div>
              <Button type="submit" className="btn btn-primary" >Enviar</Button>
            </fieldset>
          </form>
        </div>
<script src='Form.js'></script>
    </Container>
  )
}
