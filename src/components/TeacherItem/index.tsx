import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css'

function TeacherItem() {
  return (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars2.githubusercontent.com/u/66640847?s=460&u=4d133d176bba5a4515467352e7b3abbed298f216&v=4"
        alt="Douglas Piasente"
      />
      <div>
        <strong>Douglas Piasente</strong>
        <span>Inglês</span>
      </div>
    </header>

    <p>
      Professor de inglês que usa as melhores tecnologias disponíveis
      <br />
      <br />
      Apaixonado por ensinar um novo idioma a iniciantes de todas as idades e
      responsável pale criação dessa aplicação de professores
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 50,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;
