import styles from "./labcard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function LabCard() {
  return (
    <>
      <div className={styles.lab_card}>
        <h4>Laboratório:</h4> IFES Campus Serra
        <p>
          <span>Turma:</span> SI
        </p>
        <p>
          <span>Máquinas:</span> 3
        </p>
        <p className={styles.image_text_windows}>
          <span></span> Windows 10
        </p>
        <div className={styles.lab_card_actions}>
          <Link to="/">
            <BsPencil /> Editar
          </Link>
          <button>
            <BsFillTrashFill /> Remover
          </button>
        </div>
      </div>

      <div className={styles.lab_card}>
        <h4>Laboratório:</h4> IFES Campus Serra
        <p>
          <span>Turma:</span> Engenharia C. Automação
        </p>
        <p>
          <span>Máquinas:</span> 8
        </p>
        <p className={styles.image_text_ubuntu}>
          <span></span> Ubuntu
        </p>
        <div className={styles.lab_card_actions}>
          <Link to="/">
            <BsPencil /> Editar
          </Link>
          <button>
            <BsFillTrashFill /> Remover
          </button>
        </div>
      </div>

      <div className={styles.lab_card}>
        <h4>Laboratório:</h4> IFES Campus Serra
        <p>
          <span>Turma:</span> Técnico em Redes
        </p>
        <p>
          <span>Máquinas:</span> 15
        </p>
        <p className={styles.image_text_ubuntu}>
          <span></span> Debian
        </p>
        <div className={styles.lab_card_actions}>
          <Link to="/">
            <BsPencil /> Editar
          </Link>
          <button>
            <BsFillTrashFill /> Remover
          </button>
        </div>
      </div>
    </>
  );
}

export default LabCard;
