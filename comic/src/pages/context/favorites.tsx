import { createContext } from "react";
import { ComicData } from '../types/shared_types'

export type favoritesContextType = {
	favorites: ComicData[],
	setFavorites: React.Dispatch<React.SetStateAction<ComicData[]>>
}

export const favoritesContext = createContext<favoritesContextType | null>(null);