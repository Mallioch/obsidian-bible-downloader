import DataSource from "./data-source"
import ApiDataObject from "src/api-data-object";
import { DataFetchResult } from "src/data-fetcher";

export default class BollsApi implements DataSource {

    sourceIdentifier = "Bolls API";

    public async getESVBookFromBolls(bookId: number, chapterNumber: number): Promise<DataFetchResult> {
		const url = 'https://bolls.life/get-chapter/ESV/' + bookId + '/' + chapterNumber.toString() + '/';
    	const response = await fetch(url);

		const data: Array<ApiDataObject> = await response.json();

		return {
			content: data.map(x => { return { verseIdentifier: x.verse, text: x.text.trim() } }),
			source: this.sourceIdentifier,
			httpStatusCode: response.status
		}
	}

}