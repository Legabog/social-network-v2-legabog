import { pathToRegexp } from "path-to-regexp"

export const getRoutesPath = (path, countBlocks) => {
    const pathArray = path.split("/")
    return `/${pathArray.slice(1, countBlocks + 1).join("/")}`;
}

export const Routes = {
    MAIN: "/",
    // Authorized user
    // Music
    MUSIC: `/music`,
    MUSIC_LIST: `/music-list`,
    MUSIC_LIST_ARTISTS: `/music-list/artists`,
    MUSIC_LIST_ALBUMS: `/music-list/albums`,
    MUSIC_LIST_PLAYLISTS: `/music-list/playlists`,
    MUSIC_LIST_CREATE_PLAYLIST: `/music-list/playlists/create`,
    MUSIC_PLAYER: `/music-player`,
    // Profile
    PROFILE: `/profile`,
    PROFILE_ABOUT : [
        `/profile/about`,
        `/profile/about_overview`,
        `/profile/about_work_and_education`,
        `/profile/about_places`,
        `/profile/about_contact_and_basic_info`,
        `/profile/about_family_and_relationships`,
        `/profile/about_details`,
        `/profile/about_life_events`,
    ],
    PROFILE_FRIENDS: `/profile/friends`,
    PROFILE_PHOTOS: `/profile/photos`,
    PROFILE_ARCHIVE: `/profile/archive`,
    PROFILE_VIDEOS: `/profile/videos`,
    
    WELCOME: `/welcome`,
    MESSAGES: `/messages`,
    GROUPS: `/groups`,
    FRIENDS: `/friends`,
    // Unauthorized user
    LOGIN: `/login`,
    CONFIRM_EMAIL: `/confirm_email`,
    CONFIRMED_EMAIL: `/confirmed_email`

}

export const authorizedUserRoutes = [
    Routes.MAIN,
    Routes.WELCOME,
    Routes.MESSAGES,
    Routes.GROUPS,
    Routes.FRIENDS,

    Routes.MUSIC,
    Routes.MUSIC_LIST,
    Routes.MUSIC_LIST_ARTISTS,
    Routes.MUSIC_LIST_ALBUMS,
    Routes.MUSIC_LIST_PLAYLISTS,
    Routes.MUSIC_LIST__CREATE_PLAYLIST,
    Routes.MUSIC_PLAYER,


    Routes.PROFILE,
    Routes.PROFILE_ABOUT,
    Routes.PROFILE_FRIENDS,
    Routes.PROFILE_PHOTOS,
    Routes.PROFILE_ARCHIVE,
    Routes.PROFILE_VIDEOS,
]

export const unauthorizedUserRoutes = [
    Routes.MAIN,
    Routes.LOGIN,
    Routes.CONFIRM_EMAIL,
    Routes.CONFIRMED_EMAIL
]

export class Route {
    constructor() {
        this._route = ``
    }

    _routesByPath = new Map(Object.values(Routes).map(routePath => [routePath, new Route(routePath)]))

    _regexp = pathToRegexp(this._route)
    _compiled = pathToRegexp.compile(this._route)


    get(routePath) {
        return this._routesByPath.get(routePath)
    } 

    exists(pathname) {
        for (const route of this._routesByPath.values()) {
            if (route.test(pathname)) {
                return true
            }
        }

        return false
    }

    test(pathname) {
        return this._regexp.test(pathname)
    }
    
    exec(pathname) {
        return this._regexp.exec(pathname)
    }

    toPath(params) {
        return this._compiled(params)
    }

    toString() {
        return this._route
    }

}
