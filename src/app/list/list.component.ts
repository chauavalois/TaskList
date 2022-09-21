import { AppService } from '../app.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from '../model/task.model';
import { AppRoutingModule } from 'src/app/app.routing.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(private appService: AppService) { }

  @ViewChild('closeModal') closeModal: ElementRef

  public taskList: Task[] = [];
  public taskNovo: Task = new Task();
  public taskEdicao: Task = new Task();

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.appService.getAll().subscribe(
      tasks => this.taskList = tasks
    );
  }

  saveTask(task: Task) {
    if (task.title && task.description && task.hour) {
      if (task.id) { //editar tarefa
        this.appService.update(task).subscribe({
          next: () => {
            alert('Edições salvas com sucesso');
            this.getAll();
            this.closeModal.nativeElement.click();
          },
        });
      } else { //nova tarefa
        this.appService.save(task).subscribe({
          next: () => {
            alert('Salvo com sucesso');
            this.getAll();
            this.taskNovo = new Task();
          },
        });
      }
    } else {
      alert("Prencha todos os campos para salvar uma nova tarefa")
    }
  }

  funcaoParaCapturarTaskParaEditar(task: Task) {
    this.taskEdicao.id = task.id;
    this.taskEdicao.title = task.title;
    this.taskEdicao.description = task.description;
    this.taskEdicao.hour = task.hour;
  }


  deleteTask(taskId: number) {
    if (confirm('Tem certeza que deseja excluir a tarefa?')) {
      this.appService.delete(taskId).subscribe({
        next: () => {
          alert('Excluído com sucesso');
          this.getAll();
        },
      });
    }
  }
}
