<?php

	include 'connect.php';
	
	//传入数据
	$id = isset($_GET['id']) ? $_GET['id'] : null;
	
	//编写sql语句
	$sql = 'select * from goodslist where id=$id';
	
	//获取查询结果集
	$result = $conn->query($sql);
	
	
	//$row = $result = $conn->query($sql);得到一个查询结果集
	// $row = $result->fetch_row();使用查询结果集，返回数组
	//使用查询结果集，返回数组
	$row = $result->fetch_all(MYSQLI_ASSOC);
	// 把数组转换成json字符串
	$res = json_encode($row,JSON_UNESCAPED_UNICODE);
	
	//释放查询结果集
	$result->close();
	
	
	//关闭数据库
	$conn->close();
	
	//把结果输到前台
	echo json_echo($res,JSON_UNESCAPED_UNICODE);
