import NetBibleApi from "./data-sources/net-bible-api";
import BollsApi from "./data-sources/bolls-api";

export class DataFetcher {

  public static async getBook(translation: string, bookId: number, chapterNumber: number) {
		if (translation === 'ESV') {
			return await new BollsApi().getESVBookFromBolls(bookId, chapterNumber);
		}
		else {
			return await new NetBibleApi().getNETBook(bookId, chapterNumber);
		}
  }
}