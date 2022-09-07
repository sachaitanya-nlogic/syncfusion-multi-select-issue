import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  data = [{ "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1031, "label": "2022 Spring (R02)", "startDate": "2022-02-28T00:00:00", "endDate": "2022-05-29T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1030, "label": "2021/2022 Winter (R01)", "startDate": "2021-11-29T00:00:00", "endDate": "2022-02-27T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1029, "label": "2021 Fall (R04)", "startDate": "2021-08-30T00:00:00", "endDate": "2021-11-28T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1028, "label": "2021 Summer (R03)", "startDate": "2021-05-31T00:00:00", "endDate": "2021-08-29T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1027, "label": "2021 Spring (R02)", "startDate": "2021-03-01T00:00:00", "endDate": "2021-05-30T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1026, "label": "2020/2021 Winter (R01)", "startDate": "2020-11-30T00:00:00", "endDate": "2021-02-28T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1025, "label": "2020 Fall (R04)", "startDate": "2020-08-31T00:00:00", "endDate": "2020-11-29T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1024, "label": "2020 Summer (R03)", "startDate": "2020-05-25T00:00:00", "endDate": "2020-08-30T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1023, "label": "2020 Spring (R02)", "startDate": "2020-02-24T00:00:00", "endDate": "2020-05-24T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1022, "label": "2019/2020 Winter (R01)", "startDate": "2019-11-25T00:00:00", "endDate": "2020-02-23T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1021, "label": "2019 Fall (R04)", "startDate": "2019-08-26T00:00:00", "endDate": "2019-11-24T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1020, "label": "2019 Summer (R03)", "startDate": "2019-05-27T00:00:00", "endDate": "2019-08-25T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1019, "label": "2019 Spring (R02)", "startDate": "2019-02-25T00:00:00", "endDate": "2019-05-26T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1018, "label": "2018/2019 Winter (R01)", "startDate": "2018-11-26T00:00:00", "endDate": "2019-02-24T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1017, "label": "2018 Fall (R04)", "startDate": "2018-08-27T00:00:00", "endDate": "2018-11-25T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1016, "label": "2018 Summer (R03)", "startDate": "2018-05-28T00:00:00", "endDate": "2018-08-26T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1015, "label": "2018 Spring (R02)", "startDate": "2018-02-26T00:00:00", "endDate": "2018-05-27T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1014, "label": "2017/2018 Winter (R01)", "startDate": "2017-11-27T00:00:00", "endDate": "2018-02-25T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1013, "label": "2017 Fall (R04)", "startDate": "2017-08-28T00:00:00", "endDate": "2017-11-26T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1012, "label": "2017 Summer (R03)", "startDate": "2017-05-29T00:00:00", "endDate": "2017-08-27T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1011, "label": "2017 Spring (R02)", "startDate": "2017-02-27T00:00:00", "endDate": "2017-05-28T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1010, "label": "2016/2017 Winter (R01)", "startDate": "2016-11-28T00:00:00", "endDate": "2017-02-26T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1009, "label": "2016 Fall (R04)", "startDate": "2016-08-29T00:00:00", "endDate": "2016-11-27T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1008, "label": "2016 Summer (R03)", "startDate": "2016-05-30T00:00:00", "endDate": "2016-08-28T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1007, "label": "2016 Spring (R02)", "startDate": "2016-02-29T00:00:00", "endDate": "2016-05-29T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1006, "label": "2015/2016 Winter (R01)", "startDate": "2015-11-30T00:00:00", "endDate": "2016-02-28T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1005, "label": "2015 Fall (R04)", "startDate": "2015-08-31T00:00:00", "endDate": "2015-11-29T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1004, "label": "2015 Summer (R03)", "startDate": "2015-06-01T00:00:00", "endDate": "2015-08-30T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1003, "label": "2015 Spring (R02)", "startDate": "2015-03-02T00:00:00", "endDate": "2015-05-31T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1002, "label": "2014/2015 Winter (R01)", "startDate": "2014-12-01T00:00:00", "endDate": "2015-03-01T00:00:00" }, { "dataSource": "RadioPPM", "dateRangeType": "CurrencyReleases", "id": 1001, "label": "2014 Fall (R04)", "startDate": "2014-09-01T00:00:00", "endDate": "2014-11-30T00:00:00" }]
  filterOptions = { type: 'CheckBox' };
  @ViewChild('grid') public grid!: GridComponent;

  constructor(){
    // this.grid.datasource
  }

  onRowCheckboxChange(dataSource: any, $event: any) {
    console.log("dataSource", dataSource, $event);
  }

  onRowSelected(args: any): void {
    const survey = args.data;
    this.onRowCheckboxChange(survey, { event: window.event!, checked: true });
    (args.row as any).querySelector('.e-control.e-checkbox').classList.add('e-check', 'e-focus');
    (args.row as any).querySelector('.e-icons.e-frame').classList.add('e-check', 'e-focus');
    (args.row as any).querySelector('.e-control.e-checkbox').checked = true;
  }

  onRowDeselected(args: any): void {
    console.log("args", args);
    // NOTE: args
      function deselect(parent: any, survey: any, row: any){
          if (window.event) {
              parent.onRowCheckboxChange(survey, { event: window.event!, checked: false });
          }
          (row as any).querySelector('.e-control.e-checkbox').classList.remove('e-check', 'e-focus', 'e-selectionbackground');
          (row as any).querySelector('.e-icons.e-frame').classList.remove('e-check', 'e-focus', 'e-selectionbackground');
          (row as any).querySelector('.e-control.e-checkbox').checked = false;
      }
      if ((args.row as any) .length && (args.row as any).length > 1){
          const survey: any = (args.data as any)[args.rowIndex!];
          deselect(this, survey, (args.row as any)[args.rowIndex!]);
      }
      else{
          const survey: any = <any>args.data;
          deselect(this, survey, args.row);
      }
  }

  // onRowDeselecting(event: any){
  //     function isRowClicked(row: any){
  //         if ((row as any)?.contains(window.event!.target)){
  //             return true;
  //         }
  //         return false;
  //     }

  //     if (event.row.length && event.row.length > 1){
  //         const clickedRowIndex = event.row.findIndex((r: any) => isRowClicked(r));
  //         if (clickedRowIndex != -1){
  //             // call onRowDeselected manually   
  //             event.row = event.row[clickedRowIndex];
  //             event.data = event.data[clickedRowIndex];
  //             this.onRowCheckboxChange(event.data, { event: window.event!, checked: false });
  //             setTimeout(() => { this.onRowDeselected(event); }, 0);
  //         }
  //         event.cancel = true;
  //         return;
  //     }
  //     else{
  //         if (!isRowClicked(event.row)){
  //             event.cancel = true;
  //             return;
  //         }
  //     }
  // }
}
