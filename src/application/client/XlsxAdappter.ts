import People from "../../domain/entity/People";
import XlsxClient from "../../infra/client/XlsxClient";
import xlsx from "xlsx";

export default class XlsxAdapter implements XlsxClient {
    processWorkbook(filePath: string): People[] {
    const workbook = xlsx.readFile(`public/${filePath}`, {raw: true});
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const range = worksheet['!ref'] &&xlsx.utils.decode_range(worksheet['!ref']);
    const people = [];

    for(let rowNum = range.s.r; rowNum <= range.e.r; rowNum ++) {
        const person: People = new People("", "");

        //Coluna A (Nome)
        const cellA = worksheet[xlsx.utils.encode_cell({c: 0, r: rowNum})];
        if(cellA) person.updateName(cellA.v)

        //Coluna B (Telefone)
        const cellB = worksheet[xlsx.utils.encode_cell({c: 1, r: rowNum})];
        if(cellB) person.udpatePhone(cellB.v.toString());

        if(person.getName() && person.getPhone()) people.push(person)
    }

        return people
    }

}