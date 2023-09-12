import { Injectable } from '@angular/core';
import * as csvParser from 'csv-parser';
import * as fs from 'fs'; // Module de système de fichiers (pour Node.js)

@Injectable({
  providedIn: 'root'
})
export class CSVImportService {

  constructor() { }

  importCSV(file: File): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const results: any[] = [];
      fs.createReadStream(file.path) // Utilisez le chemin du fichier ici
        .pipe(csvParser())
        .on('data', (data: any) => {
          results.push(data);
        })
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error: any) => {
          reject(error);
        });
    });
  }
}
