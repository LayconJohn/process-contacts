import People from "../../domain/entity/People";
import ExcelJS from "exceljs";

export interface ExceljsClient {
    processWorkbook(people: People[]): Promise<Buffer | ExcelJS.Buffer>;
    saveBuffer(fileBuffer: Buffer): void;
}