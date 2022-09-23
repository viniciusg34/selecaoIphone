// Funcionalidades
import Header from '../../components/Header/Header'
import React, { useEffect, useState} from 'react';
import { apiLol } from '../../services/api'

// CSS
import '../../assets/styles/admin/admin.css'
import { TextField } from '@mui/material';
import Swal from 'sweetalert2/dist/sweetalert2.js'

// Imagens
import ilustrativa from '../../assets/images/ilustrativa2.png';


const Admin = () => {

    // Salvar
    const [produto, setProduto] = useState('');
    const [cor, setCor] = useState('');
    const [armazenamento, setArmazenamento] = useState('');
    const [garantia, setGarantia] = useState('');
    const [preco, setPreco] = useState('');
    const [foto, setFoto] = useState('');

    const Salvar = () => {
        if (produto !== '' && cor !== '' && armazenamento !== '' && garantia !== '' && preco !== '' && foto !== '') {
           
        }
   }

    return(
        <>
            <Header></Header>
            <div className='admin'>
                <form className='alinhamentoAdmin'>
                    <div className='cardPrincipal'>
                        <div className='bodyCardPrincipal'>
                            <div className='separadorBodyAdm'>
                                <div className='divPadraoAdmin'>
                                    <TextField sx={{width:1000}} id="filled-basic" label="Nome do produto:" variant="filled" />
                                </div>
                                <div className='divPadraoAdmin'>
                                    <TextField sx={{width:1000}} id="filled-basic" label="Cor" variant="filled" />
                                </div>
                                <div className='divPadraoAdmin'>
                                    <TextField sx={{width:1000}} id="filled-basic" label="Armazenamento" variant="filled" />
                                </div>
                                <div className='divPadraoAdmin'>
                                    <TextField sx={{width:1000}} id="filled-basic" label="Garantia" variant="filled" />
                                </div>
                                <div className='divPadraoAdmin'>
                                    <TextField sx={{width:1000}} id="filled-basic" label="Preço" variant="filled" />
                                </div>
                                <div className='divPadraoAdmin'>
                                    <TextField sx={{width:1000}} id="filled-basic" label="Imagem" variant="filled" />
                                </div>
                                <div className='divPadraoAdmin'>
                                    <TextField
                                        id="filled-multiline-static"
                                        label="Descrição"
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        sx={{width:1000}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='newCell' onClick={Salvar}>Enviar</button>
                </form>
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