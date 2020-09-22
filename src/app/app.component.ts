import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PrimeNgTemplate';
  // single
  data1: TreeNode[] = [];
  selectedNodes1: TreeNode;
  // multiple with checkbox
  data3: TreeNode[] = [];
  selectedNodes3: TreeNode;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/data.json').subscribe((res: any) => {
      console.log('res', res);
      this.data1 = this.data1.concat(res.data1);
      this.data3 = this.data3.concat(res.data3);
    });
  }

  nodeSelect(event): void {
    debugger;
  }

  nodeUnselect(event): void {
  }

  setNewArray(event): void {
  }
}
