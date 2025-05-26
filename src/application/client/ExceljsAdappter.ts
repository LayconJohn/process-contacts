import People from "../../domain/entity/People";
import { ExceljsClient } from "../../infra/client/ExceljsClient";
import ExcelJS from "exceljs";
import fs from "fs";

export class ExceljsAddapter implements ExceljsClient {
    async processWorkbook(people: People[]): Promise<Buffer | ExcelJS.Buffer> {
        const columns = [
            { header: "Nome", key: "name", width: 20 },
            { header: "Telefone", key: "phone", width: 20 },
        ];
    
        const report = new ExcelJS.Workbook();
        const mainTable = report.addWorksheet("Relatório");
        mainTable.columns = columns;
        people && mainTable.addRows(people);

        const fileBuffer = await report.xlsx.writeBuffer();
        return fileBuffer;
    }

    saveBuffer(fileBuffer: Buffer): void {
        fs.writeFileSync("public/lista-envio.xlsx", fileBuffer)
    }

}