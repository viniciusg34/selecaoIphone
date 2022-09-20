// Funcionalidades
import Header from '../../components/Header/Header'
import React, { useEffect, useState} from 'react';
import { apiLol } from '../../services/api'

// CSS
import '../../assets/styles/admin/admin.css'

// Imagens
import ilustrativa from '../../assets/images/ilustrativa2.png';

const Admin = () => {

    return(
        <>
            <Header></Header>
            <div className='main'>
                <section className='alinhamento'>
                    <div className='cardPrincipal'>
                        <div className='headerCard'></div>
                        <div className='alinhamentoImagem'>
                            <img src={ilustrativa} alt="Imagem do celular" />
                        </div>
                        <div className='bodyCardPrincipal'>
                            <h1 className='produto'>Iphone 8 plus</h1>
                            <h2>Cor:</h2>
                            <input type="text" />
                            <h2>Armazenamento</h2>
                            <input type="text" />
                            <h2>Garantia</h2>
                            <input type="text" />
                            <h2>Preço</h2>
                            <input type="text" />
                            <h3>Descrição</h3>
                            <input type="text" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Admin

//  {
//   "produto": "Iphone 8 plus",
//   "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
//   "preco": "preco 1",
//   "foto": "http://loremflickr.com/640/480/technics",
//   "cor": {
//    "cor1": "Dourado",
//    "cor2": "prateado",
//    "cor3": "cinza",
//    "cor4": "vermelho"
//      tem até 6
//   },
//   "armazenamento": {
//    "am1": "📲64gb",
//    "am2": "📲128gb"
//     tem até 4
//   },
//   "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
//   "id": "1"
//  }