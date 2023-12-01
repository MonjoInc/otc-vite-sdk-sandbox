/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Awards } from './Awards';
import type { Imdb } from './Imdb';

export type MovieCreate = {
    plot?: (string | null);
    genres?: (Array<string> | null);
    runtime?: (number | null);
    cast?: (Array<string> | null);
    poster?: (string | null);
    title?: (string | null);
    fullplot?: (string | null);
    languages?: null;
    released?: (string | null);
    directors?: (Array<string> | null);
    rated?: (string | null);
    awards?: (Awards | null);
    lastupdated?: (string | null);
    year: number;
    imdb?: (Imdb | null);
    countries?: (Array<string> | null);
    type?: (string | null);
    tomatoes?: null;
    num_mflix_comments?: (number | null);
};

