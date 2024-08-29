
//Criar uma lista rde produtos eletronicos com os seguintes dados:
// id,nome,precom,desc,imagem=path
type Lista = {
    id: number,
    nome: string,
    preco: number,
    desc: string,   
    imagem: string
}

export const listaProdutos:Lista[] = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 1500.00,
        desc: 'Celular com tela de 6 polegadas',
        imagem: "https://example.com/imagem1.jpg"
    },
    {
        id: 2,
        nome: 'Tablet',
        preco: 800.00,
        desc: 'Tablet com tela de 10 polegadas',
        imagem: "https://example.com/imagem2.jpg"
    },
    {
        id: 3,
        nome: 'Notebook',
        preco: 2500.00,
        desc: 'Notebook com processador Intel Core i7',
        imagem: "https://example.com/imagem3.jpg"
    },
    {
        id: 4,
        nome: 'Impressora',
        preco: 300.00,
        desc: 'Impressora laser com qualidade de impressão alta',
        imagem: "https://example.com/imagem4.jpg"
    },
    {
        id: 5,
        nome: 'Fone de Ouvido',
        preco: 200.00,
        desc: 'Fone de ouvido sem fio com qualidade de som alta',
        imagem: "https://example.com/imagem5.jpg"
    }
]