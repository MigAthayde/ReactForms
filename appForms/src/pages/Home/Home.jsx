import './homeStyle.css'

function Home(){

  const usuarios = [
    {
      id: 73469,
      nome: 'João da Silva',
      email: 'joao.silva@example.com',
      senha: '123456'
    },
    {
      id: 56567,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      senha: '123456'
    },
    {
      id: 12345,
      nome: 'Pedro Santos',
      email: 'pedro.santos@example.com',
      senha: '123456'
    }
  ]

  return(
    <>
      <div className='containerCadastro'>
        <form id='formCadastro'>
          <h1>Cadastro de Usuário</h1>
          <input type="text" placeholder="Nome de Usuário"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder='Senha' />
          <button type="button">Cadastrar</button>
        </form>

        <div className='containerCards'>
          {usuarios.map((usuario) => (
            <div key={usuario.id} className='card'>
              <p>Nome: <span>{usuario.nome}</span></p>
              <p>Email: <span>{usuario.email}</span></p>
            </div>
          ))}
        </div>
      </div>
    </>
  )

}

export default Home;