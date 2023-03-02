import { createContext } from "react";

export type queryContextType = {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const queryContext = createContext<queryContextType>({
	query: '',
	setQuery: () => {}
});