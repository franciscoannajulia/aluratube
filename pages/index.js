import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorite } from "../src/components/Favorites";

function HomePage() {
  const estiloDaHomePage = {
    display: "flex",
    flexDirection: "column",
    flex: 1
  };

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div style={estiloDaHomePage}>
        <Menu 
          valorDoFiltro={valorDoFiltro} 
          setValorDoFiltro={setValorDoFiltro} 
        />
        <Header />
        <Timeline
          searchValue={valorDoFiltro} 
          playlists={config.playlists} 
          favorites={config.favorites}
        >
          Conteúdo
        </Timeline>
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage

const StyledBanner = styled.div`
    background-image: url(${config.banner});
    background-repeat: no-repeat;
    background-size: cover;
    height: 230px;
`;

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
    .banner {
      img {
        width: 100%;
        position: relative;
      }
    }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  const favoritesNames = Object.keys(props.favorites);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
      {/* <StyledFavorite>
        {favoritesNames.map((favorite) => {
          const users = props.favorites[favorite];
  
          return (
            <section>
              <h2>{favorite}</h2>
              <div>
                {users.map((user) => {
                  return (
                    <a href={user.url}>
                      <img src={user.picture} />
                      <span>
                        {user.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })} 
      </StyledFavorite>*/}
    </StyledTimeline>
  );
}

function Favorites(props) {
  const favoritesNames = Object.keys(props.favorites);

  return (
    <StyledFavorite>
      {favoritesNames.map((favorite) => {
        const users = props.favorites[favorite];

        return (
          <section>
            <h2>{favorite}</h2>
            <div>
              {users.map((user) => {
                return (
                  <a href={user.url}>
                    <img src={user.picture} />
                    <span>
                      {user.name}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledFavorite>
  );
}
