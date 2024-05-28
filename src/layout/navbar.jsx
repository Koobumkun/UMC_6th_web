import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar(){
    function login(e){
        if(e.target.innerText === "로그인"){
            e.target.innerText = "로그아웃";
        }
        else{
            e.target.innerText = "로그인";
        }
    }
    return(
        <Nav>
            <Logo>UMC Movie</Logo>
            <MenuBar>
                <Link to="/"><Button onClick={login}>로그인</Button></Link>
                <Link to="/popular"><Button>Popular</Button></Link>
                <Link to="/now"><Button>Now Playing</Button></Link>
                <Link to="/top"><Button>Top Ranked</Button></Link>
                <Link to="/upcoming"><Button>Upcoming</Button></Link>
            </MenuBar>
        </Nav>
    )
}

const Nav = styled.div`
background-color: white;
width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    height: 40px;
    z-index: 999;
`
const Logo = styled.div`
    display: flex;
    height: 30px;
    margin: 5px;
    margin-left: 15px;
`
const MenuBar = styled.div`
    display: flex;
    justify-content: space-around;
    height: 40px;
    margin-right: 15px;
`
const Button = styled.div`
    display: flex;
    height: 30px;
    margin: 5px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`