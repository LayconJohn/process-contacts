import xlsx from "xlsx";
import People from "../../domain/entity/People";

export default interface XlsxClient {
    processWorkbook(filePath: string): People[]
}