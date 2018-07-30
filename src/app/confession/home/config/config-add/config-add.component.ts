import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../../../service/config.service";

@Component({
  selector: 'app-config-add',
  templateUrl: './config-add.component.html',
  styleUrls: ['./config-add.component.css']
})
export class ConfigAddComponent implements OnInit {

  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.initLayUi();
  }

  initLayUi(){
    layui.use('form', function(){
      var form = layui.form;

      form.on('switch(filter)', function(data){
        console.log(data.elem); //得到checkbox原始DOM对象
        console.log(data.elem.checked); //开关是否开启，true或者false
        console.log(data.value); //开关value值，也可以通过data.elem.value得到
        console.log(data.othis); //得到美化后的DOM对象
      });
    });
  }




  save(){
    var paramObj = {
      mainConfig:{
        title:"123"
      },
      popup:{
        title:"222"
      }
    };

    this.configService.save(paramObj).subscribe((resultData)=>{
      console.log(resultData)
    });
  }

  get(){
    var id = 101;
    this.configService.get(id).subscribe((resultData)=>{
      console.log(resultData)
    });
  }

}
