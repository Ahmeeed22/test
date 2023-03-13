import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customer/customers.service';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  pettyCash=0;
  detailsProfite:any={}
  count:number=0;
  filteration:any
  detailsProfiteMonthly:any={}
  countMonthly:number= 0 ;
  amountCash:number= 0 ;
  dateToday=new Date() ;
  constructor(
    private _TransactionsService:TransactionsService  ,
    private _CustomersService:CustomersService
  ) { 
    var start = new Date();
    start.setUTCHours(0,0,0,0);
    var end = new Date();
    end.setUTCHours(23,59,59,999);

    this.filteration = {
      date:true ,
      startedDate :start.toISOString(),
      endDate : end.toISOString() ,
    }
    this.getPettyCash();
  }

  ngOnInit(): void {
    this.getAllTransactions();
    this.getAllTransactionsMonthly();
  }

  getAllTransactions(){
    this.filteration.offset=this.filteration.offset > 0 ? this.filteration.offset - 1 : 0 
    this._TransactionsService.getAllTransactions(this.filteration).subscribe({
      next:(res)=>{
        this.count=res.result.count
        console.log(res);
        this.detailsProfite={...res.allProfite[0]}
      }
    })
  }

   startOfMonth(date:any)
  {
   return new Date(date.getFullYear(), date.getMonth(),1);
  }

  getAllTransactionsMonthly(){
    let dt = new Date(); 
    let start = this.startOfMonth(dt).toISOString();
    var end = new Date();
    end.setUTCHours(23,59,59,999);
    this.filteration = {
      date:true ,
      startedDate :start,
      endDate : end.toISOString() ,
    }
    this.filteration.offset=this.filteration.offset > 0 ? this.filteration.offset - 1 : 0 
    this._TransactionsService.getAllTransactions(this.filteration).subscribe({
      next:(res)=>{
        this.countMonthly=res.result.count
        this.detailsProfiteMonthly={...res.allProfite[0]}
        console.log(this.detailsProfiteMonthly);
        this.amountCash=this.detailsProfiteMonthly.paymentAmount - this.detailsProfiteMonthly.total_price_without_profite 
      }
    })
  }

  getPettyCash(){
    this._CustomersService.getAllCustomersSearch({name:'petty Cash'}).subscribe({
      next : (res)=>{
        console.log(res);
        // this.pettyCash=res.result[0].transactions[0]?.paymentAmount ||0 ;
        this.pettyCash=res.result[0]?.transactions[0]?.paymentAmount ||0 ;

      }
    })
  }

}
