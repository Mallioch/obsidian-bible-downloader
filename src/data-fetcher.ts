import NetBibleApi from "./data-sources/net-bible-api";
import BollsApi from "./data-sources/bolls-api";

export interface Verse {
	text: string
	verseIdentifier: string
}

export interface DataFetchResult {
	content: Verse[]
	source: string
	httpStatusCode: number
}

export default class DataFetcher {

  	public static async getBook(translation: string, bookId: number, chapterNumber: number): Promise<DataFetchResult> {
		if (translation === 'ESV') {
			return await new BollsApi().getESVBookFromBolls(bookId, chapterNumber);
		}
		else {
			return await new NetBibleApi().getNETBook(bookId, chapterNumber);
		}
    }
}