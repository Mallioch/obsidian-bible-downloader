import GetBookData from 'src/book-data';
import DataSource from './data-source';
import ApiDataObject from 'src/api-data-object';

export default class NetBibleApi implements DataSource {

    sourceIdentifier = "NET";

    public async getNETBook(bookId: number, chapterNumber: number) {

		const bookData = GetBookData();
		const book = bookData.find(x => x.id === bookId.toString());

		const url = `https://labs.bible.org/api/?passage=${book?.abbreviation} ${chapterNumber}&type=json`;
    	const response = await fetch(url);

		const data: Array<ApiDataObject> = await response.json();

		let contents = '';
		data.forEach((v: ApiDataObject) => {
			contents += '###### ' + v.verse + '\n';
			contents += v.text.trim() + '\n';
		});

		return contents;
	}
}