import { Url } from "url";
import { Album } from "./album";
import { Artist } from "./Artist";

export class Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    unseen: boolean;
    isrc: string;
    link: Url;
    share: Url;
    duration: number;
    track_position: number;
    disk_number: number;
    rank: number;
    release_date: Date;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: Url;
    bpm: number;
    gain: number;
    available_countries: any[];
    alternative: object;
    contributors: any[];
    md5_image: string;
    artist: Artist;
    album: Album;
}