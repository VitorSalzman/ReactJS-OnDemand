import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SidebarDashboard from "../../components/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import barrinhaService from "../../services/barrinhaState";
//import Container from "@material-ui/core/Container";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LabCard from "../laboratorios/index";
import CadastroProject from "../create_laboratory/index";
import { Navbartop } from "../../components/navbartop/navbartest";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(24),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function Dashboard() {
  const classes = useStyles();
  const [labs, setLabs] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const subscribe = barrinhaService.onBarrinha().subscribe((state) => {
      if (state) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    });
  });

  return (
    <>
      {/* <CssBaseline /> */}
      {/*<SidebarDashboard />*/}
      <Navbartop />
      {/* <Footer /> */}
      {/*<Content
        initial={{ marginLeft: 200 }}
        animate={{ marginLeft: collapsed ? 64 : 168 }}
      >
        <div className={styles.placeholder_color}>
          <h1>Meus laboratórios</h1>
  </div>
      </Content>*/}
      <div className={styles.project_container}>
        <div className={styles.create_header}>
          <Link className={styles.botton} to="/create_laboratory">
            <button type="button">Criar laboratório</button>
          </Link>
        </div>
        <div>
          <LabCard />
          <p>
            <h1>
              Bem vindo ao <span> Lab On Demand</span>, Vitor! Comece a
              gerenciar os seus projetos agora mesmo!
            </h1>
          </p>
        </div>
      </div>
    </>
  );
}

const Content = styled(motion.div)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export default Dashboard;
