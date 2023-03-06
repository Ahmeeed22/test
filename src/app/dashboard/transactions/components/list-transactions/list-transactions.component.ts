import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from '../../transactions.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';
import { ComfirmationComponent } from 'src/app/shared/comfirmation/comfirmation.component';
import { Item } from 'src/app/shared/ddl-searcheble/models/item';
import { DdlSearchableComponent } from 'src/app/shared/ddl-searcheble/ddl-searchable/ddl-searchable.component';
import { CustomersService } from 'src/app/dashboard/customer/customers.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as es6printJS from "print-js";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'title', 'user' ,'deadline','status', 'actions'];
  dataSource:any = [];
  tasksFilter!:FormGroup
  customersObj!:Item;
  @ViewChild('customers') customers !: DdlSearchableComponent;
  usersObj!:Item;
  @ViewChild('users') users !: DdlSearchableComponent;
  @ViewChild('start') start !: ElementRef;
  @ViewChild('end') end !: ElementRef;
  @ViewChild('immg') immg !: ElementRef;
  @ViewChild('infoo') infoo !: ElementRef;
  @ViewChild('footerInvoice') footerInvoice !: ElementRef;
// pagination setup
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent !: PageEvent;
  filteration:any = {
    offset:this.pageIndex+1,
    limit: this.pageSize,
    date:true
  }
  timeOutId:any
  cities!:any[];
  form : any;
  selectedCities:any;
  colDisplay:any={empName:false ,cusName:true ,serName:true ,qu:true ,ppu:false ,tp:true ,pm:false ,bd:true,p:false ,date:true ,acts:true};
  myDate:any
  sumCols:any;
  customerName:any ;
  invoiceNo!:number;
  constructor(
    private _TransactionsService:TransactionsService  
    ,private toaster:ToastrService
    ,public dialog: MatDialog
    ,private _CustomersService:CustomersService
    ,private _AuthService:AuthService
    ,private formBuilder: FormBuilder
    ,private spinnerService: NgxSpinnerService
     ) {
      this.cities = [
        { name: "Employee Name", code: "empName" },
        { name: "Customer Name", code: "cusName" },
        { name: "Service Name", code: "serName" },
        { name: "Quantity", code: "qu" },
        { name: "Price per unit", code: "ppu" }, 
        { name: "Total Price", code: "tp" },
        { name: "Payment Amount", code: "pm" } ,
        { name: "Balance Due", code: "bd" },
        { name: "Profite", code: "p" },
        { name: "Date", code: "date" },
        { name: "Actions", code: "acts" }
      ];
      this.form = this.formBuilder.group({
        selectedCities: [[  { name: "Customer Name", code: "cusName" },
        { name: "Service Name", code: "serName" },
        { name: "Quantity", code: "qu" },
        { name: "Total Price", code: "tp" },
        { name: "Balance Due", code: "bd" },
        { name: "Date", code: "date" },
        { name: "Actions", code: "acts" }
      ], Validators.required]
      });
    }

// print invoice
  printTest(x:any,y:any) {
      this.invoiceNo=this.generateRandom();
      this.myDate = new Date();
      this.spinnerService.show()
      this.immg.nativeElement.classList.toggle('d-block');
      this.footerInvoice.nativeElement.classList.toggle('d-none');
      this.infoo.nativeElement.classList.toggle('d-block');
      setTimeout(() => {
        es6printJS(x);
        this.immg.nativeElement.style.position='absolute'
        this.infoo.nativeElement.style.position='absolute'
        this.immg.nativeElement.style.opacity=0
        this.infoo.nativeElement.style.opacity=0
        this.immg.nativeElement.classList.toggle('d-block');
        this.infoo.nativeElement.classList.toggle('d-block');
        this.footerInvoice.nativeElement.classList.toggle('d-none');
        this.spinnerService.hide()
      }, 400);
    }

  ngOnInit(): void {
    this.getAllTransactions();
    this.getCustomers();
    this.getUsers();
    
    
      this.form.get("selectedCities").valueChanges.subscribe(()  => {
        Object.entries(this.colDisplay).forEach(([key,value]:any)=>{
          if (true ) {
            this.colDisplay[key]=false;
          }
        })
          for (let index = 0; index < this.form.get("selectedCities").value.length; index++) {
            this.colDisplay[`${this.form.get("selectedCities")?.value[index]?.code}`]=true ;
          }
      })
  }
    // patchForm() {
    //   this.form.patchValue({ selectedCities: [{ name: "Paris", code: "PRS" }] });
    //   // Here patchValue with Paris
    //   // NOTE : This Paris need to be in options of p-MultiSelect otherwise chip will not populate.
    // }
  getAllTransactions(){
    this.filteration.offset=this.filteration.offset > 0 ? this.filteration.offset - 1 : 0 
    this._TransactionsService.getAllTransactions(this.filteration).subscribe({
      next:(res)=>{
        this.sumCols={...res.allProfite[0]}
        this.length=res.result.count
        this.dataSource=res.result.rows
        this.toaster.success("success get Transactions","success")
      }
    })
  }
  getCustomers(){
    this._CustomersService.getAllCustomers().subscribe({
      next :(res)=>{
        this.customersObj= { staticArray:res.result.rows, placeholder: 'العميل', placeholderEn: 'Search By Customer', required: false, searachable: true, multiSelect: false };
      }
    })
  }
  getUsers(){
    this._AuthService.getAllUser().subscribe({
      next :(res)=>{
        this.usersObj= { staticArray:res.users.rows, placeholder: 'الموظف', placeholderEn: 'Search By Employee', required: false, searachable: true, multiSelect: false };
      }
    })
  }


  updateTask(e:any,ele:any){
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      width:"60%",
      disableClose:true,
      data:ele,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllTransactions()
    });

  }
  deleteTask(id:any){
    const dialogRef = this.dialog.open(ComfirmationComponent, {
      width: '750px',
      disableClose:true,
      data : {message :"Are You Sure to Delete ? "}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=='no') {
        this._TransactionsService.deleteTransaction(id).subscribe({
          next:()=>{
            this.toaster.success("Transaction Deleted Succesfully" , "Success")
            this.getAllTransactions()
          }
        })
      }else{
        this.toaster.info('Transaction not deleted' , "Info")
      }
    });
  }


  search(e:any,start:any,end:any){ 
    start?this.filteration.startedDate= new Date(start.split('-').reverse().join('-')).toISOString():'' ;
    end?this.filteration.endDate=new Date(end.split('-').reverse().join('-')).toISOString():'' ;
    // this.resetPagination()
    this.customerName = (this.customers.gettingResult()?.name )? this.customers?.gettingResult()?.name: '';
    (this.customers.gettingResult()?.id) ? this.filteration.customer_id= this.customers.gettingResult()?.id:'';
    (this.users.gettingResult()?.id) ? this.filteration.admin_id= this.users.gettingResult()?.id:'';
    this.getAllTransactions()
  }

  resetPagination(){
    this.filteration.offset=1 ;
    this.pageSize = 10;
    this.pageIndex =0;
  }

  resetSearch(start:any,end:any){
    const {limit ,offset ,...reset}=this.filteration
    this.filteration={limit,offset}
    this.getAllTransactions()
    this.resetPagination();
    this.customers.resetList();
    this.users.resetList();
   this.start.nativeElement.value=null
   this.end.nativeElement.value=null
   
  }
  // configration for pagination
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.filteration.offset=e.pageIndex+1 ;
    this.filteration.limit=e.pageSize ;
    this.getAllTransactions()
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  addTask(): void {
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      width:"60%",
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllTransactions()
    });
  }

  print(){
    window.print()
  }
  generateRandom(min :number = 500, max:number = 5000) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
  }
}
