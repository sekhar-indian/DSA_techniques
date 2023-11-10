class a{

    arr=[4,2,6,8,3,9,1];
    size=this.arr.length;
     tem=0;

    bubbleSort(){
       for(let i=0;i<this.size;i++)
       {
        for(let j=0;j<this.size-i-1;j++)
        {
            if(this.arr[j]>this.arr[j+1])
            {
                this.temp=this.arr[j];
                this.arr[j]=this.arr[j+1];
                this.arr[j+1]=this.temp;
            }
        }
       } 
       return this.arr;
    }

}



let obj=new a();
console.log(obj.bubbleSort())