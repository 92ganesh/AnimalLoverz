
console.log("Hi");

	var correct = [1,1,1,1,1,1,1,1];
	

 $(document).ready( function(){
	$("#firstname_error").hide();
	$("#lastname_error").hide();
	$("#dob_error").hide();
	$("#gender_error").hide();
	$("#email_error").hide();
	$("#password_error").hide();
	$("#phone_error").hide();
	$("#zip_error").hide();

	$('[name="firstname"]').focusout(
		function(){
			var firstname = document.signup.firstname.value;
			if(firstname=="")
			{	$("#firstname_error").show();  correct[0]=1;
			}
			else
			{	$("#firstname_error").hide();  correct[0]=0;
			}
		}
	);
	
	$('[name="lastname"]').focusout(
		function(){
			var firstname = document.signup.lastname.value;
			if(firstname=="")
			{	$("#lastname_error").show();  correct[1]=1;
			}
			else
			{	$("#lastname_error").hide();  correct[1]=0;
			}
		}
	);
	
	$('[name="dob"]').focusout(
		function(){
		var DOB_text = document.signup.dob.value;
		var num = "";  var i=0;
		while(DOB_text.charAt(i)!='/'&&i<DOB_text.length)
		{
			num+=DOB_text.charAt(i);
			i++;
		}
		var dd = num;  i++;
		
		var num = "";
		while(DOB_text.charAt(i)!='/'&&i<DOB_text.length)
		{
			num+=DOB_text.charAt(i);
			i++;
		}
		var mm = num;  i++;
		
		var num = "";
		while(i<DOB_text.length)
		{
			num+=DOB_text.charAt(i);
			i++;
		}
		var yyyy = num;
		
		var verified = [0,0,0];
		
		if(mm>=1&&mm<=12)
			verified[1]=1;
		
		if(verified[1]==1)
		{
			var leap_year = false;
			if ( (!(yyyy % 4) && yyyy % 100) || !(yyyy % 400)) 
			{
				leap_year = true;
			}
			verified[2]=1;
		}
			
		var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
		if(verified[1]==1&&verified[2]==1)
		{	if(dd==29&&mm==2)
			{	if(leap_year)	
					verified[0]=1;
			}else if(dd>0&&dd<=ListofDays[mm-1])
				verified[0]=1;
		}
		
		if(verified[0]!=1||verified[1]!=1||verified[2]!=1)
		{ 	$("#dob_error").show();			correct[2]=1;
		}else
		{		$("#dob_error").hide();		correct[2]=0;
		}
		
		}
	);
	
	
	$('[name="gender"]').focusout(
		function(){
		var gender_text = document.signup.gender.value;
		if( gender_text.toUpperCase()!="MALE" && gender_text.toUpperCase()!="FEMALE" )
		{	$("#gender_error").show();		correct[3]=1;
		}else
		{	$("#gender_error").hide();		correct[3]=0;
		}
		
		}
	);
	
	
	$('[name="email1_text"]').focusout(
		function(){
		emailField =  document.signup.email1_text;
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {	$("#email_error").show();		correct[4]=1;
		}else
		{	$("#email_error").hide();		correct[4]=0;
		}
		
		}
	);
	
	
	$('[name="password_text"]').focusout(
		function(){
		password_text = document.signup.password_text.value;
		capital_letters=0;  numbers=0;  special_char = 0;
		
		for(i=0;i<password_text.length;i++)
		{   if(password_text.charAt(i)>='0'&&password_text.charAt(i)<='9')	numbers++;
			else if (password_text.charAt(i)>='A'&&password_text.charAt(i)<='Z')	capital_letters++;
			else if (password_text.charAt(i)=='@'||password_text.charAt(i)=='$'||password_text.charAt(i)=='&'||password_text.charAt(i)=='*')   
				special_char++;
		}		
			
		if(capital_letters==0||numbers==0||special_char==0||password_text.length<8)
		{ 	$("#password_error").show();  		correct[5]=1;
		}else
		{	$("#password_error").hide();		correct[5]=0;
		}
		
		}
	);
	
	
	$('[name="phone"]').focusout(
		function(){
		var phone_text =  document.signup.phone.value
		if(phone_text.length!=10)
		{   $("#phone_error").show();		correct[6]=1;
		}else
		{	$("#phone_error").hide();		correct[6]=0;
		}
		
		}
	);
	
	
	$('[name="zip_code_text"]').focusout(
		function(){
		zip_text = document.signup.zip_code_text.value;
		if(zip_text.length!=6)
		{   $("#zip_error").show();			correct[7]=1;
		}else
		{	$("#zip_error").hide();			correct[7]=0;
		}
		
		}
	);
	
	
}
);


 function validate(){
		
		for(var i=0;i<8;i++)
		{
			if(correct[i]==1)
			{	alert('Some info need to be filled properly');	
				return false;	
			}
		}
		
		alert('Entered info seems correct');	
        return true;	
		
}











