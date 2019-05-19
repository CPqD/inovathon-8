import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckService } from '../../../services/check.service';
import { CheckSummaryModel, StatusEnum } from '../../../models/check.model';
import { DateFormatConverter } from '../../../utils';
import { ToastrService } from 'ngx-toastr';
import { ResponseMessageModel } from '../../../models/response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  public response: CheckSummaryModel = new CheckSummaryModel();
  public Status = StatusEnum;
  public date: string;
  public isLoading: boolean = false;
  public paciente;
  public medicamentos = [{
    dosagem: '',
    uso: '',
    nome: ''
  }];
  constructor(private route: ActivatedRoute, private checkService: CheckService,
              private toaster: ToastrService,  private modalService: NgbModal,
              private router: Router, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }

  private toasterSucesso(message): void {
    this.toaster.success(message, 'Sucesso!', { timeOut: 5000, closeButton: true, progressBar: true });
  }
  public saveChanges(id, dateJson: string): void {
    const body = {
      prescription: {
        idPaciente: this.paciente,
        idMedico: 1,
        dataReceita: DateFormatConverter.frontToBack(dateJson),
        medicamentos: this.medicamentos
      },
      account: '8d50f43e94016543818580a0f35dd2ebe469ffb6a0fbda0a8a1312b59d0af0de'
    };
    this.isLoading = true;
    this.checkService.setReceipt(body).then((resp: ResponseMessageModel) => {
      this.toasterSucesso(resp.message);
      this.router.navigate(['/check-management/outstanding'], {queryParams: {returning: true}});
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      this.isLoading = false;
    });
  }
  public adicionarNovo() {
    this.medicamentos.push({
      dosagem: '',
      nome: '',
      uso: ''
    });
    this.medicamentos = this.medicamentos.slice();
    this.ref.markForCheck();
  }
}
