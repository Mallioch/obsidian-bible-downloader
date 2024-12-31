import GetBookData from 'src/book-data';
import DataSource from './data-source';
import ApiDataObject from 'src/api-data-object';
import { DataFetchResult } from 'src/data-fetcher';

export default class NetBibleApi implements DataSource {

    sourceIdentifier = "Offical NET Bible API";

    public async getNETBook(bookId: number, chapterNumber: number) : Promise<DataFetchResult> {

		const bookData = GetBookData();
		const book = bookData.find(x => x.id === bookId.toString());

		const url = `https://labs.bible.org/api/?passage=${book?.abbreviation} ${chapterNumber}&type=json`;
    	const response = await fetch(url);

		const data: Array<ApiDataObject> = await response.json();

		return {
			content: data.map(x => { return { verseIdentifier: x.verse, text: x.text.trim() } }),
			source: this.sourceIdentifier,
			httpStatusCode: response.status
		}
	}
}