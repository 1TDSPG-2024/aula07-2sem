import { Header } from "../../style/styled";
import Menu from "../Menu/Menu";
import { Lista } from "../../types";
import { listaProdutos } from "../../listaProdutos";

export default function Cabecalho(props:{listaProps:Lista[]}){

  return(
    <Header>
      <h1>Cabeçalho</h1>

        <div>
          {props.listaProps.map((produto)=>(
            <p key={produto.id}>{produto.nome}</p>
          ))}
        </div>

      <Menu/>
    </Header>
  );
}