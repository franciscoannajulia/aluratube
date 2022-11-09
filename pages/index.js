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

  return (
    <>
      <CSSReset />
      <div style={estiloDaHomePage}>
        <Banner />
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} >
          Conteúdo
        </Timeline>
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage

const StyledBanner = styled.div`
    img {
      width: 100%;
      height: 350px;
    }
`;

function Banner() {
  return (
    <StyledBanner>
      <div>
        <img src={`https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`} />
      </div>
    </StyledBanner>
  );
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info {
      margin-top: 10px;
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

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
  