define(['knockout','methods'],function(ko,methods)
{
    var Cart=function()
   {
       var cur=this;
       this.name=ko.observable();
       cur.id=ko.observable();
    
       cur.quantity=ko.observable();
       cur.selected=ko.observable();
       cur.radiovalue=ko.observable();
       cur.checkedValue=ko.observableArray([]);
   }

    var CartFunction=function()
    {
        var cur=this;
        this.row=ko.observableArray([new Cart()]);
        this.data=ko.observableArray();
        this.data1=ko.observableArray();
        this.add=function()
        {
            cur.row.push(new Cart());

        }
      
        this.remove=function()
        {
            cur.row.remove(this);
        }
        this.clear=function()
        {
            var element=JSON.parse(ko.toJSON(cur.row()));
            console.log(element);
            console.log("rest");
            for(let i=0;i<cur.row().length;i++)
            {
                cur.row()[i].id("");
                cur.row()[i].name("");
                cur.row()[i].quantity("");
                cur.row()[i].selected("");
                cur.row()[i].radiovalue("");
                cur.row()[i].checkedValue([]);
            }
            
            cur.data1([]);
        }
       
        this.check=function(id,name,selected,radiovalue,quantity)
        {   
          
            
            if(methods.valid(id)||methods.valid(name)||methods.valid(selected)||methods.valid(quantity)||methods.valid(radiovalue))
            {
                alert("Fill all the values");
                return false;
            }
            return true;
        }
        this.join=function()
        {
            cur.data1([]);
            
            var element=JSON.parse(ko.toJSON(cur.row()));

            
             var assign=[];
            for(let i=0;i<element.length;i++)
            {
                assign[i]=true;
            }
            for(let i=0;i<element.length;i++)
            {
                
                var temp=element[i];
                
                
                var id=temp.id;
                var name=temp.name;
                var selected=temp.selected;
                var radiovalue=temp.radiovalue;
                var quantity=temp.quantity;

                if(!cur.check(id,name,selected,quantity,radiovalue))
                {
                    return;
                }
               
                for(let j=i+1;j<element.length;j++)
                {
                    var temp1=element[j];
                    var id1=temp1.id;
                    var name1=temp1.name;
                    var selected1=temp1.selected;
                    var quantity1=temp.quantity;
                    var radiovalue1=temp1.radiovalue;
                    if(!cur.check(id1,name1,selected1,quantity1,radiovalue1))
                    {
                        return;
                    }
                    if(id==id1 )
                    {
                       
                        element[i].quantity=Number(temp.quantity)+Number(temp1.quantity);
                        element[i].name=temp1.name;
                        element[i].selected=temp1.selected;
                        element[i].radiovalue=temp1.radiovalue;
                        
                        var a = temp.checkedValue;
                        var b = [];
                        b = temp1.checkedValue;
                      
                        var c = a.concat(b);
                      
                        if(c=="") continue;
                       
                        element[i].checkedValue=c.filter((item, pos) => c.indexOf(item) === pos)
                         assign[j]=false;
                        
                    }
                }
            }
            
                for(let i=0;i<element.length;i++)
                {
                    
                    if(assign[i])
                    {
                        if(element[i].checkedValue.length==0)
                        {
                           
                            element[i].checkedValue.push("NA");
                        }
                   
                       cur.data1.push(element[i]); 
                       
                    }
                }
            }
        }
    ko.applyBindings(new CartFunction());

})

  