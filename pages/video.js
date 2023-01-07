import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";

function HomePage() {
  const estiloDaHomePage = {
    display: "flex",
    flexDirection: "column",
    flex: 1
  };

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <div style={estiloDaHomePage}>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Corpo
          playlists={config.playlists}
        />
      </div>
    </>
  );
}

export default HomePage

const StyledCorpo = styled.div`
  width: 100%;
  height: 900px;
  flex: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: ${({ theme }) => theme.backgroundLevel1};
`;

const StyledParteUm = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  width: 70%;
  height: 100%;
  padding: 30px;
  align-items: center;
  div {
    display: block
  }
`;

const StyledParteDois = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  width: 30%;
  height: 100%;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  div {
    display: block
  }
`;

const StyledPlayer = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  width: 100%;
  iframe{
    width: 674.3px;
    height: 379.3px;
  }
`;

const StyledRecomendado = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  height: 100%;
  
  img {
    width: 130px;
  }

  .recomendado {
    overflow-y: scroll;
    scroll-snap-type: y mandatory; 
    height: 100%;
  }

  .video {
    margin-top: 10px;
    flex: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bolder;
    justify-content: left;
  }

  a:hover {
    color: ${({ theme }) => theme.textColorBase};
  }

  a {
    color: ${({ theme }) => theme.textColorBase};
  }
`;

const StyledInfoCanal = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  font-size: 14px;
  font-weight: bolder;
  width: 100%;
  height: 36px;
  margin-top: 10px;
  margin-bottom: 10px;
  
  flex: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: left;

  img {
      width: 35px;
      height: 35px;
      border-radius: 50%
  }

  .nome-canal {
    flex: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .canal {
    color: ${({ theme }) => theme.textColorBase};
    border-radius: 7%;
    height: 36px;
    padding-top: 0.5px;
    padding-left: 0.5px;
    padding-right: 10px;
    padding-bottom: 0.5px;
    background-color: ${({ theme }) => theme.borderBase};
    flex: auto;
    overflow: hidden;
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-right: 2%;
  }

  .inscreva {
    color: ${({ theme }) => theme.backgroundBase};
    border-radius: 7%;
    width: 130px;
    height: 36px;
    padding: 10px;
    flex: auto;
    overflow: hidden;
    display: inline-block; 
    align-items: center;
    justify-content: left;
    margin-right: 28%;
  }

  .like {
    color: ${({ theme }) => theme.backgroundBase};
    border-radius: 7%;
    width: 61px;
    height: 36px;
    padding: 10px;
    background-color: ${({ theme }) => theme.borderBase};
    margin-right: 2px;
    flex: auto;
    overflow: hidden;
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-right: 2%;
  }

  .compartilhar {
    color: ${({ theme }) => theme.textColorBase};
    border-radius: 7%;
    width: 130px;
    height: 36px;
    padding: 10px;
    margin-right: 2px;
    flex: auto;
    overflow: hidden;
    display: inline-block; 
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.borderBase};
  }
`;

const StyledInfoVideo = styled.div`
  font-size: 14px;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  padding: 10px;
`;

function Corpo({ ...props }) {
  const [infoVideo, setInfoVideo] = React.useState(false);
  const [infoCanal, setInfoCanal] = React.useState(false);
  const playlistNames = Object.keys(props.playlists);
  const [liked, setLike] = React.useState(false);
  const [desliked, setDeslike] = React.useState(false);

  return (
    <StyledCorpo>
      <StyledParteUm>
        <StyledPlayer>
          <iframe
            src="https://www.youtube.com/embed/5MzOCxSWrrc"
            title="YouTube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
          <h2>Do Zero ao React | Como fazer o React e aprender a ideia do Virtual DOM na prática</h2>
        </StyledPlayer>
        <StyledInfoCanal>
          <div className="canal">
            <div className="nome-canal">
              <img src="https://www.alura.com.br/assets/img/imersoes/imersao-react-5/mario.1665420911.png" />
              <span>Mário Souto</span>
            </div>
          </div>
          <div className="inscreva" 
            style={{ 
              backgroundColor: infoCanal ? "red" : "gray", 
              width: infoCanal ? "133px" : "105px"
            }}
          >
            {infoCanal ?
              <span><a onClick={() => setInfoCanal(false)}>Inscreva-se</a> | 🔔</span> :
              <span><a onClick={() => setInfoCanal(true)}>Inscrito</a> | 🔔</span>
            }
          </div>
          {liked?
            <div className="like">
              <span title="gostei"><a onClick={() => setLike(false)}>👍🏿</a></span>|
              <span title="não gostei"><a onClick={() => {setDeslike(true); setLike(false)}}>👎🏻</a></span>
            </div>
            :
            desliked?
            <div className="like">
              <span title="gostei"><a onClick={() => {setLike(true); setDeslike(false)}}>👍🏻</a></span>|
              <span title="não gostei"><a onClick={() => setDeslike(false)}>👎🏿</a></span>
            </div>
            :
            <div className="like">
              <span title="gostei"><a onClick={() => setLike(true)}>👍🏻</a></span>|
              <span title="não gostei"><a onClick={() => setDeslike(true)}>👎🏻</a></span>
            </div>
          }
          <div className="compartilhar">
            <span><a title="Compartilhar">➦ Compartilhar</a></span>
          </div>
        </StyledInfoCanal>
        <StyledInfoVideo>
          <span>{`27.418 visualizações  |  3 de jul. de 2020`}</span>
          <br />
          <br />
          <span>{`
            Como o react funciona? Já parou pra pensar como o React renderiza as coisas na tela da suas apps?
            Nesse vídeo vamos fazer do ZERO uma implementação em cima da API do React atual, fazendo toda a 
            parte de renderização e entendendo como o Virtual DOM, JSX entre outras coisas bases para a 
            renderização do React funcionar, ficou curioso? Bora ver! ⚛
          `}</span>
          <br />
          <br />
          {infoVideo ?
            <span>
              🔸Quer ver mais conteúdos meus? Segue ai!
              <br />
              ■ https://twitter.com/omariosouto
              <br />
              ■ https://instagram.com/omariosouto
              <br />
              ■ https://t.me/hipstersfrontend<br />
              <a onClick={() => setInfoVideo(false)}>Ver menos</a>
            </span>
            :
            <span>...<a onClick={() => setInfoVideo(true)}>Ver mais</a></span>
          }
        </StyledInfoVideo>
      </StyledParteUm>
      <StyledParteDois>
        <StyledRecomendado>
          <h5>Recomendados</h5>
          <div className="recomendado">
          {playlistNames.map((playlistName) => {
            const videos = props.playlists[playlistName];
            return (
              <div>
                {videos.map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <div className="video">
                        <img src={video.thumb} />
                        <span> 
                          {video.title.toUpperCase().substr(0, 14)}...
                        </span>
                      </div>
                    </a> 
                  )
                })}
              </div>
            )
          })}
          </div>
        </StyledRecomendado>
      </StyledParteDois>
    </StyledCorpo>
  );
}

