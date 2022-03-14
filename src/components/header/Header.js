import React from 'react'


const Header = () => {
   
    return (
        <div className='header-modulo'>
            <div className='titulo-header'>
                <h2>Gestão de Módulos</h2>

            </div>

            <nav class="dropdownG">
                <button class="buttonUser" ><span><i className="bi-person-circle fs-6"></i> </span></button>
                <div class="dropdown-contentt " >
                    <a style={{ fontWeight: 'bolder', fontSize:'15px' }}>Rafael Rodrigues</a> <hr style={{ margin: '0', padding: '0', color: '#00000050' }} />

                    <a href="#">Perfil</a>  
                    <a href="#">Notificações</a>
                    <a href="#">Trocar Senha</a>


                </div>
            </nav>
        </div>
    )
}

export default Header
