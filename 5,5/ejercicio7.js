function max(a, b, c)
{

     var mayor;


      if (a > b)
       {
                 if (a > c)
                  {
	               mayor = a
                   }else{
                   	mayor =c;
                   }
        }else{
        	if(b > c){
        		mayor = b;
        	}else{
        		mayor = c;
        	}
        }


	 return mayor
}




        var mayor = max (5,2,6);

      console.log(mayor); // 6