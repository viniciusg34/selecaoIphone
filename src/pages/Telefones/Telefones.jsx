import '../../assets/styles/telefones/telefones.css'
import Header from '../../components/Header/Header'
import React, { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import MultiActionAreaCard from '../../components/Card/Card';



 const Telefones = () =>{

    const Iphones = [
        {
         "produto": "Iphone 8 plus",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 1",
         "foto": "https://imgs.extra.com.br/14871686/1xg.jpg?imwidth=500",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "cinza",
          "cor4": "vermelho"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲128gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "1"
        },
        {
         "produto": "Iphone X",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 2",
         "foto": "https://a-static.mlcdn.com.br/1500x1500/iphone-x-apple-256gb-cinza-espacial-4g-tela-58-retina-cam-12mp-selfie-7mp-ios-11-proc-chip-a11/magazineluiza/218966800/8589edbc8ed16002fd88e6347eb655a2.jpg",
         "cor": {
          "cor2": "Prateado",
          "cor3": "Cinza"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲256gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "2"
        },
        {
         "produto": "Iphone XR",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 3",
         "foto": "https://www.romapy.com/7507-large_default/apple-iphone-xr-64gb-azul-mrya2bza.jpg",
         "cor": {
          "cor1": "Azul",
          "cor2": "Coral",
          "cor3": "Preto",
          "cor4": "Branco",
          "cor5": "Vermelho",
          "cor6": "Amarelo"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲128gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "3"
        },
        {
         "produto": "Iphone XS",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 4",
         "foto": "https://www.romapy.com/2492-large_default/apple-iphone-xs-512gb-prata-mt9m2bza-a2097.jpg",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "cinza"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "4"
        },
        {
         "produto": "Iphone XS Max",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 5",
         "foto": "https://www.romapy.com/570-large_default/apple-iphone-xs-max-64gb-dourado-mt5c2lla-1921.jpg",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "cinza"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "5"
        },
        {
         "produto": "Iphone 11",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 6",
         "foto": "https://www.oficinadanet.com.br/imagens/obj_item/504/2021-iphone-11.jpg",
         "cor": {
          "cor1": "Verde",
          "cor2": "Roxo",
          "cor3": "Preto",
          "cor4": "Branco",
          "cor5": "Vermelho",
          "cor6": "Amarelo"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲128gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "6"
        },
        {
         "produto": "Iphone 11 Pro",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 7",
         "foto": "https://media.gettyimages.com/photos/iphone-11-pro-max-silver-smartphone-picture-id1190002706?s=612x612",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "cinza",
          "cor4": "Verde meia-noite"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "7"
        },
        {
         "produto": "Iphone 11 Pro Max",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 8",
         "foto": "https://static.turbosquid.com/Preview/2019/09/30__19_51_31/1mainturbo.jpg9BB47823-73BA-4490-9D70-EA547F88AD9ELarge.jpg",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "cinza",
          "cor4": "Verde meia-noite"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "8"
        },
        {
         "produto": "Iphone 12",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 9",
         "foto": "https://lzd-img-global.slatic.net/g/p/c320aaab9149b28f011f89ed0409d84f.jpg_720x720q80.jpg_.webp",
         "cor": {
          "cor1": "Verde",
          "cor2": "Roxo",
          "cor3": "Preto",
          "cor4": "Branco",
          "cor5": "Vermelho",
          "cor6": "Azul"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲128gb",
          "am3": "📲256gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "9"
        },
        {
         "produto": "Iphone 12 Pro",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 9",
         "foto": "https://lojaibyte.vteximg.com.br/arquivos/ids/208898-1200-1200/iphone-12-pro-apple-dourado-256gb-desbloqueado-mgmr3bz-a-01.jpg?v=637406966203670000",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "Grafite",
          "cor4": "Azul-Pacífico"
         },
         "armazenamento": {
          "am1": "📲128gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "10"
        },
        {
         "produto": "Iphone 12 Pro Max",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 9",
         "foto": "https://www.ideals-sa.com/wp-content/uploads/2021/09/12-pro-max-123.jpg",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "Grafite",
          "cor4": "Azul-Pacífico"
         },
         "armazenamento": {
          "am1": "📲128gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "11"
        },
        {
         "produto": "Iphone 12 mini",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 12",
         "foto": "https://www.notebookcheck.info/uploads/tx_nbc2/4_to_3_Teaser_Apple_iPhone_12_mini.jpg",
         "cor": {
          "cor1": "Verde",
          "cor2": "Roxo",
          "cor3": "Preto",
          "cor4": "Branco",
          "cor5": "Vermelho",
          "cor6": "Azul"
         },
         "armazenamento": {
          "am1": "📲64gb",
          "am2": "📲128gb",
          "am3": "📲256gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "12"
        },
        {
         "produto": "Iphone 13",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 13",
         "foto": "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-2-1060x706.jpg",
         "cor": {
          "cor1": "Verde",
          "cor2": "Rosa",
          "cor3": "Preto",
          "cor4": "Branco",
          "cor5": "Vermelho",
          "cor6": "Azul"
         },
         "armazenamento": {
          "am1": "📲128gb",
          "am2": "📲256gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "13"
        },
        {
         "produto": "Iphone 13 mini",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 14",
         "foto": "https://www.iplace.com.br/ccstore/v1/images/?source=/file/v6080789222809372315/products/219184.00-apple-iphone-13-mini-512gb-estelar-mlkc3bz-a.jpg&height=1000&width=1000&quality=0.9",
         "cor": {
          "cor1": "Verde",
          "cor2": "Rosa",
          "cor3": "Preto",
          "cor4": "Branco",
          "cor5": "Vermelho",
          "cor6": "Azul"
         },
         "armazenamento": {
          "am1": "📲128gb",
          "am2": "📲256gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "14"
        },
        {
         "produto": "Iphone 13 Pro ",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 15",
         "foto": "https://www.iplace.com.br/ccstore/v1/images/?source=/file/v2887144442625989623/products/220964.00-apple-iphone13-pro-128gb-verde-alpino-mncy3bz-a.jpeg&height=1000&width=1000&quality=0.9",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "Grafite",
          "cor4": "Azul-Sierra",
          "cor5": "Verde-alpino"
         },
         "armazenamento": {
          "am1": "📲128gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "15"
        },
        {
         "produto": "Iphone 13 Pro Max",
         "descricao": "Todos os telefones testados e com garantia, para mais informações entre em contato conosco via Whatsapp",
         "preco": "preco 16",
         "foto": "https://www.iplace.com.br/ccstore/v1/images/?source=/file/v7115370190364626444/products/219192.00-apple-iphone-13-pro-max-128gb-azul-sierra-mll93bz-a.jpg&height=1000&width=1000&quality=0.9",
         "cor": {
          "cor1": "Dourado",
          "cor2": "prateado",
          "cor3": "Grafite",
          "cor4": "Azul-Sierra",
          "cor5": "Verde-alpino"
         },
         "armazenamento": {
          "am1": "📲128gb",
          "am2": "📲256gb",
          "am3": "📲512gb"
         },
         "garantia": "lacrados: 1 ano de garantia, não lacrados: 2 meses de garantia",
         "id": "16"
        }
       ]

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
                        Iphones.map( (item) =>{
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