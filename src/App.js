import React, { Suspense, useEffect } from "react";
import { Routes } from "routes/routes";
import { connect } from "react-redux";
import { compose } from "redux";
import { Route, Switch, withRouter } from "react-router-dom";
import _ from "lodash/core";

import { autoLogin } from "redux/auth-reducer";
import { getMusicAlbumsData } from "redux/musicalbums-reducer";
import { getMyOwnPlayLists } from "redux/musicalplaylists-reducer";

// ---------Main Components
import { Root } from "containers/Root";
// --------Logged in user
import { Header } from "containers/Header";
import { Body } from "containers/Body";
import { Sidebar } from "containers/Sidebar";
import { Feed } from "containers/Feed";
import { Widgets } from "containers/Widgets";
import { Welcome } from "containers/Welcome";
import { About } from "containers/About";
import { Profile } from "containers/Profile";
import { MusicPlayerPanel } from "containers/MusicPlayerPanel";
import { ErrorRoute } from "pres-components/ErrorRoute";
import { Preloader } from "pres-components/Preloader";
// ---------Not logged in user
import { Login } from "containers/Login";
import { RegistrationBlock } from "containers/RegistrationBlock";
// -----Lazy components
const Music = React.lazy(() => import("containers/Music"));
const MusicList = React.lazy(() =>
  import("containers/Music/components/MusicList")
);
const ArtistsList = React.lazy(() =>
  import("containers/Music/components/Artists")
);
const ArtistItemRouter = React.lazy(() =>
  import("containers/Music/components/ArtistItemRouter")
);
const AlbumsList = React.lazy(() =>
  import("containers/Music/components/Albums")
);
const PlayLists = React.lazy(() =>
  import("containers/Music/components/PlayLists")
);
const CreateAlbum = React.lazy(() =>
  import("containers/Music/components/CreateAlbum")
);
const OwnPlayListsRouter = React.lazy(() =>
  import("containers/Music/components/OwnPlayListsRouter")
);
const MusicPlayer = React.lazy(() =>
  import("containers/Music/components/MusicPlayer")
);
const LoginRoute = React.lazy(() => import("containers/LoginRoute"));
const ConfirmEmailRoute = React.lazy(() =>
  import("pres-components/ConfirmEmailRoute")
);
const ConfirmedEmailRoute = React.lazy(() =>
  import("pres-components/ConfirmedEmailRoute")
);

const App = (props) => {
  useEffect(() => {
    props.autoLogin();
    props.getMusicAlbumsData();
    props.getMyOwnPlayLists();

    // eslint-disable-next-line
  }, []);

  if (!!localStorage.getItem("token")) {
    return (
      <Root component={<MusicPlayerPanel />} {...props}>
        <Switch>
          <Route
            path={Routes.MAIN}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Body>
                  <Sidebar {...props} />
                  <Feed {...props} />
                  <Widgets />
                </Body>
              </>
            )}
          />

          <Route
            path={Routes.MUSIC}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <Music />
                  </Body>
                </Suspense>
              </>
            )}
          />
          <Route
            path={Routes.MUSIC_LIST}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <MusicList />
                  </Body>
                </Suspense>
              </>
            )}
          />
          <Route
            path={Routes.MUSIC_LIST_ARTISTS}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <ArtistsList />
                  </Body>
                </Suspense>
              </>
            )}
          />
          <Route
            path={Routes.MUSIC_LIST_ALBUMS}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <AlbumsList />
                  </Body>
                </Suspense>
              </>
            )}
          />
          <Route
            path={Routes.MUSIC_LIST_PLAYLISTS}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <PlayLists />
                  </Body>
                </Suspense>
              </>
            )}
          />
          <Route
            exact
            path={Routes.MUSIC_LIST_CREATE_PLAYLIST}
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <CreateAlbum />
                  </Body>
                </Suspense>
              </>
            )}
          />
          {props.musicAlbums.map((e, index) => (
            <Route
              key={_.uniqueId(`d-r1_${e}`)}
              path={Routes.MUSIC_LIST_ARTISTS + `/${e.author}`}
              exact
              render={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...props} />
                    <Body>
                      <ArtistItemRouter nameArtist={e.author} />
                    </Body>
                  </Suspense>
                </>
              )}
            />
          ))}
          {props.musicAlbums.map((e, index) => (
            <Route
              key={_.uniqueId(`d-r2_${e}`)}
              path={Routes.MUSIC_PLAYER + `/${e.author}/${e.title}`}
              exact
              render={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...props} />
                    <Body>
                      <MusicPlayer
                        nameArtist={e.author}
                        albumTitle={e.title}
                        img={e.albumcoverUrl}
                      />
                    </Body>
                  </Suspense>
                </>
              )}
            />
          ))}
          {props.ownPlayLists.map((e, index) => (
            <Route
              key={_.uniqueId(`d-r3_${e}`)}
              path={`/music-playlists/${e.title}/`}
              exact
              render={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...props} />
                    <Body>
                      <OwnPlayListsRouter
                        id={e._id}
                        img={e.playlistcoverUrl}
                        title={e.title}
                        description={e.description}
                        tracks={e.tracks}
                        {...props}
                      />
                    </Body>
                  </Suspense>
                </>
              )}
            />
          ))}

          <Route
            path={Routes.WELCOME}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Body>
                  <Sidebar {...props} />
                  <Welcome {...props} />
                  <Widgets />
                </Body>
              </>
            )}
          />
          <Route
            path={Routes.FRIENDS}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Preloader />
              </>
            )}
          />
          <Route
            path={Routes.GROUPS}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Preloader />
              </>
            )}
          />
          <Route
            path={Routes.MESSAGES}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Preloader />
              </>
            )}
          />

          <Route
            path={Routes.PROFILE}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Profile {...props} />
              </>
            )}
          />
          {Routes.PROFILE_ABOUT.map((e, index) => (
            <Route
              key={_.uniqueId(`d-r4_${e}`)}
              path={e}
              exact
              render={() => (
                <>
                  <Header {...props} />
                  <Profile {...props} />
                  <About {...props} />
                </>
              )}
            />
          ))}
          <Route
            path={Routes.PROFILE_FRIENDS}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Profile {...props} />
                <h1>Friends</h1>
              </>
            )}
          />
          <Route
            path={Routes.PROFILE_PHOTOS}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Profile {...props} />
                <h1>Photos</h1>
              </>
            )}
          />
          <Route
            path={Routes.PROFILE_ARCHIVE}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Profile {...props} />
                <h1>Archive</h1>
              </>
            )}
          />
          <Route
            path={Routes.PROFILE_VIDEOS}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Profile {...props} />
                <h1>Videos</h1>
              </>
            )}
          />
          <Route render={() => <ErrorRoute />} />
        </Switch>
      </Root>
    );
  } else {
    return (
      <Root>
        {props.fetching ? (
          <Preloader />
        ) : (
          <>
            <Switch>
              <Route
                path={Routes.MAIN}
                exact
                render={() => (
                  <>
                    <Login {...props} />
                    <RegistrationBlock {...props} />
                  </>
                )}
              />
              <Route
                path={Routes.LOGIN}
                exact
                render={() => (
                  <>
                    <Suspense fallback={<Preloader />}>
                      <LoginRoute {...props} />
                      <RegistrationBlock {...props} />
                    </Suspense>
                  </>
                )}
              />
              <Route
                path={Routes.CONFIRM_EMAIL}
                exact
                render={() => (
                  <Suspense fallback={<Preloader />}>
                    <ConfirmEmailRoute {...props} />
                  </Suspense>
                )}
              />

              <Route
                path={Routes.CONFIRMED_EMAIL}
                exact
                render={() => (
                  <Suspense fallback={<Preloader />}>
                    <ConfirmedEmailRoute />
                  </Suspense>
                )}
              />

              <Route render={() => <ErrorRoute />} />
            </Switch>
          </>
        )}
      </Root>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    fetching: state.authReducer.fetching,
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching,
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    autoLogin,
    getMusicAlbumsData,
    getMyOwnPlayLists,
  })
)(App);
