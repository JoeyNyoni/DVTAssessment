import { Url } from "url";
import { Artist } from "./Artist";

export class Album {
    id: number;
    title: string;
    upc: string;
    link: Url;
    share: Url;
    cover: Url;
    cover_small: Url;
    cover_medium: Url;
    cover_big: Url;
    cover_xl: Url;
    md5_image: string;
    genre_id: number;
    genres: object[];
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    release_date: Date;
    record_type: string;
    available: boolean;
    alternative: object;
    tracklist: Url;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    contributors: any[];
    artist: Artist;
}