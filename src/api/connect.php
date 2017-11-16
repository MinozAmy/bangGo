<?php 
	
	//配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'test';
	
	//连接数据库
	$conn = new mysqli($servername,$username,$password,$database);
	
	//检测连接
	if($conn->connect_error){
		die('连接失败:'.$conn->connect_error);
	}
	
	//设置编码
	$conn->set_chatset(utf-8);
	
?>
