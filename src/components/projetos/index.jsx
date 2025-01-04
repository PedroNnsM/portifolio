const Mockdata = [
    {
        nome: 'Menu para redes sociais',	
        link:`https://menu-social.vercel.app/`,
        descricao: 'Uma aplicação para o menu social desenvolvida junto com a rocketseat utilizando html e css para montar um menu de links para redes sociais.',
            
        
    },
]




export function Projetos( link, nome, descricao ){
    <>
        <div className="brand">
            <a href={link} target="_blanck">
            <img src={menuSocial} />
            <span>
              <p>
                {descricao}
              </p>
            </span>
            <h2>{nome}</h2>
            </a>
        </div>
    
    </>
} 