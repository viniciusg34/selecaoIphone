import '../../assets/styles/telefones/telefones.css'
import Header from '../../components/Header/Header'
import React, { useEffect, useState} from 'react';
import { apiLol } from '../../services/api'
import { Modal } from '../../components/Modal/Modal';
import MultiActionAreaCard from '../../components/Card/Card';



 const Telefones = () =>{

    const [champion, setChampion] = useState([])
    const champions = () =>{
        apiLol.get(`/champions`)
        .then(resultado =>{
            console.log(resultado.data)
            setChampion(resultado.data)
        })
    }
    
    useEffect(()=>{    
        champions()
    }, [])
    
    // const [champion, setChampion] = useState([])
    // useEffect(() => {

    //     let quantidadeClasses = classe.length;

    //     for (let index = 0; index < quantidadeClasses; index++) {
    //         apiLol.get(`/classe/${index + 1}/hero`)
    //             .then(resultado => {
    //                 setChampion(champion => champion.concat(resultado.data))
    //             });
    //     }
    // },  [classe.length]);

    // useEffect(() => {
    //     console.log(champion)
    // },  [champion]);

    const [modalChampion, setModalchampion] = useState('hide')
    const abrirFecharModal = (estadoAtual) =>{
        
        if(estadoAtual === 'hide'){
            setModalchampion('Show')
        }
        else{
            setModalchampion('hide')
        }
    }

    return(
        <>
            <Header/>
            <div className='main'>
                <Modal modal={modalChampion} fechar={abrirFecharModal} onClick={() => abrirFecharModal(modalChampion)} />
                <div className='containerCards'>
                    {
                        champion.map( (item) =>{
                            return(
                                <MultiActionAreaCard obj={item} key={item.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Telefones