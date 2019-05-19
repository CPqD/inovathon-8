import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckService } from '../../../services/check.service';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { KeyCodeEnum } from '../../../models/keyboard.model';

@Component({
  selector: 'app-check-datatable',
  templateUrl: './check-datatable.component.html',
  styleUrls: ['./check-datatable.component.scss']
})

export class CheckDatatableComponent implements OnInit {
  @Input() status: number;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  public searchForm: FormGroup = new FormGroup({
    responsible: new FormControl(),
    month: new FormControl()
  });
  public filteredChecks: Array<any>;
  public isLoading: boolean = true;
  public totalValue;
  private checks: Array<any>;

  constructor(private checkService: CheckService, private router: Router, private route: ActivatedRoute) {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KeyCodeEnum.UpArrow) {
      this.table.element.getElementsByTagName('datatable-body')[0].scrollTop -= 20;
    }

    if (event.keyCode === KeyCodeEnum.DownArrow) {
      this.table.element.getElementsByTagName('datatable-body')[0].scrollTop += 20;
    }
  }

  ngOnInit() {
    const search = JSON.parse(localStorage.getItem('search'));
    let returning;
    this.route.queryParams.subscribe(params => {
      returning = params.returning;
    });
    if (returning) {
      this.searchForm.controls.month.setValue(search.month);
      this.searchForm.controls.responsible.setValue(search.responsible);
    } else {
      this.searchForm.controls.month.setValue('00');
    }
    this.checkService.getByStatus(this.status).then((resp) => {
      this.isLoading = false;
      this.checks = resp;
      this.filterRows({
        month: this.searchForm.get('month').value,
        responsible: this.searchForm.get('responsible').value,
        scroll: search.scroll
      });
    });

    this.searchForm.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.filterRows(value);
      });
  }
  private filterRows(value): void {
    let totalValue: number = 0;
    this.filteredChecks = this.checks.filter((check) => {
      let dateCompare: boolean = true;
      if (value.month && value.month !== '00') {
        const checkMonth =  new Date(check.date).getUTCMonth() + 1;
        dateCompare = Number(value.month) === checkMonth;
      }
      if ((!value.responsible || check.responsible.indexOf(value.responsible) > -1) && dateCompare) {
        totalValue += check.value;
        return true;
      }
      return false;
    });
    this.totalValue = totalValue;
    setTimeout(() => {
      this.table.element.getElementsByTagName('datatable-body')[0].scrollTop = value.scroll - 60;
    }, 0);

  }

  public onActivate(event): void {
    if (event.type === 'click') {
      localStorage.setItem('search', JSON.stringify({
        month: this.searchForm.get('month').value,
        responsible: this.searchForm.get('responsible').value,
        scroll: this.table.element.getElementsByTagName('datatable-body')[0].scrollTop
      }));
      this.router.navigateByUrl(`check-management/edit/${event.row.id}`);
    }
  }
}
