import styles from '../src/app/Linha.module.css'
import Subdivisao from "./Subdivisao"

export default function Linha(props) {
    return (
        <div className={styles.linha}>
           <Subdivisao preta={props.preta}/>       
           <Subdivisao preta={!props.preta}/>       
           <Subdivisao preta={props.preta}/>       
           <Subdivisao preta={!props.preta}/>       
           <Subdivisao preta={props.preta}/>       
           <Subdivisao preta={!props.preta}/>       
           <Subdivisao preta={props.preta}/>       
           <Subdivisao preta={!props.preta}/>       
        </div>
    )
}