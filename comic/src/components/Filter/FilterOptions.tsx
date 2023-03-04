import styles from '../../styles/filter/FilterOptions.module.css'
import { karla } from '../../fonts/index'

type FilterOptionProps = {
	updateFilter(event: React.ChangeEvent): void;
}

export default function FilterOptions({ updateFilter }: FilterOptionProps) {
	return (
		<div className={`${styles.filterOptionsContainer} ${karla.variable}`}>
			<select name="characterFilter" id="characterFilter" onChange={updateFilter} className={styles.filterFields}>
				<option value="">Character</option>
				<option value="1009368">Iron Man</option>
				<option value="1009220">Captain America</option>
				<option value="1009664">Thor</option>
				<option value="1009268">Deadpool</option>
				<option value="1009562">Scarlet Witch</option>
				<option value="1009189">Black Widow</option>
				<option value="1009707">Wasp</option>
				<option value="1010763">Gamora</option>
			</select>
			<select name="creatorFilter" id="creatorFilter" onChange={updateFilter} className={styles.filterFields}>
				<option value="">Creator</option>
				<option value="12787">Kate Leth</option>
				<option value="24">Brian Michael Bendis</option>
				<option value="30">Stan Lee</option>
				<option value="32">Steve Ditko</option>
				<option value="196">Jack Kirby</option>
			</select>
		</div>
	)
}