import { Component, ViewChild } from '@angular/core';
import { CSVImportService } from 'src/app/services/csvimport-service';

@Component({
  selector: 'app-csv-import',
  templateUrl: './csvimport.component.html',
  styleUrls: ['./csvimport.component.css']
})
export class CSVImportComponent {

  @ViewChild('fileInput', { static: false }) fileInput: any;

  constructor(private csvImportService: CSVImportService) { }

  uploadCSV(event: Event): void {
    event.preventDefault();
    const file = this.fileInput.nativeElement.files[0];

    if (file) {
      this.csvImportService.importCSV(file)
        .then(data => {
          console.log('Données importées:', data);
          // Faites quelque chose avec les données importées ici
        })
        .catch(error => {
          console.error("Erreur lors de l'importation du CSV:'", error);
        });
    }
  }
}
