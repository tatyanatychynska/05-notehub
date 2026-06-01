import axios from "axios";
import type { NewNoteBody, Note } from "../types/note";

const NOTEHUB_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;
axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${NOTEHUB_TOKEN}`;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number,
  perPage: number,
): Promise<FetchNotesResponse> => {
  const {data} = await axios.get<FetchNotesResponse>("/notes", {
    params: { ...(search && { search }), page, perPage },
  });
  return data;
};

export const createNote = async (newNote: NewNoteBody) => {
  const res = await axios.post<Note>("/notes", newNote);
  return res.data;
};

export const deleteNote = async (noteId: string) => {
  const res = await axios.delete<Note>(`/notes/${noteId}`);
  return res.data;
};
