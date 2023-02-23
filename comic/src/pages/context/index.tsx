import { createContext } from "react";
import { ComicData } from '../types/shared_types'

export type appContextType = {
	favorites: ComicData[],
	setFavorites: React.Dispatch<React.SetStateAction<ComicData[]>>
}

export const appContext = createContext<appContextType | null>(null);