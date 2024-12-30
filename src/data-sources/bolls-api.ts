import DataSource from "./data-source"
import ApiDataObject from "src/api-data-object";

export default class BollsApi implements DataSource {

    sourceIdentifier = "Bolls";


    public async getESVBookFromBolls(bookId: number, chapterNumber: number) {
		const url = 'https://bolls.life/get-chapter/ESV/' + bookId + '/' + chapterNumber.toString() + '/';
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