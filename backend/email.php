<?php 

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	@$name = $request->name;
	@$phone = $request->phone;
	@$company = $request->company;
	@$email = $request->email;
	@$msg = $request->msg;
	

	$to      = 'sales@cmsolutionsit.com';
	//$to      = 'christianmanriquegarcia@gmail.com';
	$subject = 'Contact from CM IT Solutions Company from '.$email;
	$message = "contact number: ".$phone." ".$msg ;
	$headers = 'From: '.$email . "\r\n" .
    'X-Mailer: PHP/';
	//die($to."-".$subject."-".$message."-".$headers);
	$this_mail=mail($to, $subject, $message, $headers);
	$tmpMsg="";
	if($this_mail) 
		$tmpMsg='The message have been sent, Thanks for contact us! as soon we will contact you';
	else 
		$tmpMsg='The message have been sent, Thanks for contact us! as soon we will contact you';
		
	echo json_encode($tmpMsg);

?>