import { Url } from "url";

export class Artist {
    id: number;
    name: string;
    link: Url;
    share: Url;
    picture: Url;
    picture_small: Url;
    picture_medium: Url;
    picture_big: Url;
    picture_xl: Url;
    nb_album: number;
    nb_fan: number;
    radio: boolean;
    tracklist: Url;
}