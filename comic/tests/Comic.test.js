import next from 'next'
import moment from 'moment';
import { Comic } from "../src/pages/components/Comic";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, cleanup, waitForElement } from "@testing-library/react";

afterEach(cleanup);

const comic = {
	id: 1234,
	title: 'Test Title',
	issueNumber: 9876,
	dates: [
		{
			type: 'Test Date Type',
			date: '2019-10-07T00:00:00-0400'
		}
	],
	creators: {
		items: [
			{
				name: 'Test Creator Name'
			},
			{
				name: 'Test Creator Name 2'
			}
		]
	},
	thumbnail: {
		extension: 'jpg',
		path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
	}
}

test('<Comic /> with no props', () => {
	const { queryByTestId } = render(<Comic />);
	const comicWrapper = queryByTestId('comic-parent');
	expect(comicWrapper).not.toBeInTheDocument();
});

test('<Comic />' , async () => {
	const { queryByTestId, getByTestId, debug } = render(<Comic comicData={comic}/>);
	const creators = comic.creators.items.map(creator => creator.name).join(', ');
	const comicPublishDate = comic.dates[0].date
	const formattedPublishDate = moment(comicPublishDate).format('MMMM DD, YYYY');

	expect(getByTestId('comic-title').textContent).toBe(comic.title)
	expect(getByTestId('comic-issueNumber').textContent).toBe(`Issue: ${comic.issueNumber}`);
	expect(getByTestId('comic-publishDate').textContent).toBe(`Published: ${formattedPublishDate}`);
	expect(queryByTestId('comic-creators').textContent).toBe(`Creators: ${creators}`);
	// debug();
})