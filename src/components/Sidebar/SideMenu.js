import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo/ideia.svg'
import icon from '../../assets/aluna.png'
import MenuItem from './MenuItem';
import Footer from '../Footer/Footer'



/**
 * @author
 * @function SideMenu 
 **/

const MenuItems = [

    {
        name: 'Folgas',
        exact: true,
        to: `/folgas`,
        iconClassName: 'bi bi-calendar-day',
        subMenus: [
            { name: 'Cadastrar', to: `/cadastrar-folga` },
            { name: 'Consultar', to: `/consultar-folga` },
            { name: 'Solicitar', to: `/solicitar-folga` }
        ]
    },
    {
        name: 'Servidores',
        exact: true,
        to: `/servidores`,
        iconClassName: 'bi bi-file-earmark-person',
        subMenus: [
            { name: 'Cadastrar', to: `/cadastrar-servidores` },
            { name: 'Consultar', to: `/consultar-servidores` },

        ]
    },
    {
        name: 'Patrimônios',
        exact: true,
        to: `/patrimonios`,
        iconClassName: 'bi bi-upc',
        subMenus: [
            { name: 'Cadastrar', to: `/cadastrar-patrimonio` },
            { name: 'Consultar', to: `/consultar-patrimonio` },
            { name: 'Movimentar', to: `/movimentar-patrimonio` }
        ]
    },
    {
        name: 'Hotelaria',
        exact: true,
        to: `/hotelaria`,
        iconClassName: 'bi bi-house',
        subMenus: [
            { name: 'Cadastrar', to: `/cadastrar-reserva` },
            { name: 'Consultar', to: `/consultar-reserva` },

        ]
    }


];

const SideMenu = (props) => {

    const [inactive, setInactive] = useState(true);


    useEffect(() => {
        if (inactive) {
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.remove('active');
            })
        }
        props.onCollapse(inactive);

    }, [inactive]);


    return (
        <>


            <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
                <div className='top-section'>

                    <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
                        <i className={`bi ${inactive ? 'bi-list' : 'bi-x-circle'}`}></i>
                    </div>
                </div>


                <div className='divider'></div>

                <div className='main-menu'>
                    <ul >
                        <a href='/home' className='menu-item'>
                            <div className='menu-icon'>
                                <i className="bi bi-speedometer2"></i>
                            </div>
                            <span>DashBoard</span>
                        </a>

                        {
                            MenuItems.map((menuItem, index) => <MenuItem
                                key={index}
                                name={menuItem.name}
                                exact={menuItem.exact}
                                to={menuItem.to}
                                subMenus={menuItem.subMenus || []}
                                iconClassName={menuItem.iconClassName}
                                onClick={() => {
                                    if (inactive) {
                                        setInactive(false);
                                    }
                                }}
                            />)
                        }



                    </ul>
                </div>
                <div className={`footer ${inactive ? "inactive" : ""}`}>
                    <Footer/>

                </div>

            </div>

        </>
    )
}

export default SideMenu
